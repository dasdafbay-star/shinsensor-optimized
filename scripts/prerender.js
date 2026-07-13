import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distIndexPath = resolve(__dirname, '../dist/index.html')

// Text that must be present in the prerendered markup — if it's missing,
// something broke (React never mounted, an uncaught error blanked the
// page, etc.) and we must not overwrite dist/index.html with a dud.
const REQUIRED_TEXT = 'Полный цикл диагностики TPMS'

async function scrollThroughPage(page) {
  // Triggers the ScrollTrigger.batch() reveals in useReveal.js so every
  // section ends up in its "revealed" (opacity: 1) resting state rather
  // than the initial opacity: 0 set before the user scrolls to it.
  await page.evaluate(async () => {
    const step = 500
    const delay = 100
    let y = 0
    while (y < document.body.scrollHeight) {
      y += step
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, delay))
    }
    window.scrollTo(0, 0)
  })
  await new Promise((r) => setTimeout(r, 500))
}

async function main() {
  const server = await preview({
    preview: { port: 4174, strictPort: false, open: false },
  })
  const url = server.resolvedUrls?.local?.[0]
  if (!url) throw new Error('Could not resolve a local preview URL')

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--use-gl=swiftshader',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--no-sandbox',
    ],
  })

  try {
    const page = await browser.newPage()
    page.on('pageerror', (err) => console.error('[prerender] page error:', err.message))
    page.on('console', (msg) => {
      if (msg.type() === 'error') console.error('[prerender] console error:', msg.text())
    })

    await page.setViewport({ width: 1440, height: 900 })
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })

    // Wait for the hero heading — the GSAP hero intro animation and the
    // lazy-loaded Spline scene are allowed to still be in flight/failed,
    // we only need the actual text content to exist in the DOM.
    await page.waitForFunction(
      () => document.querySelector('h1')?.textContent.trim().length > 0,
      { timeout: 20000 }
    )

    // Let the hero's own intro animation (gsap.from + stagger) settle.
    await new Promise((r) => setTimeout(r, 1500))

    await scrollThroughPage(page)

    const rawHtml = await page.evaluate(() => document.documentElement.outerHTML)

    // Some dynamically-injected tags (e.g. modulepreload links for lazy
    // chunks like the Spline scene) get resolved to the preview server's
    // absolute origin. Strip it back down to root-relative paths so the
    // shipped HTML doesn't point at localhost.
    const html = rawHtml.split(new URL(url).origin).join('')

    if (!html.includes(REQUIRED_TEXT)) {
      throw new Error(
        `Prerendered HTML is missing expected content ("${REQUIRED_TEXT}") — aborting without touching dist/index.html`
      )
    }

    writeFileSync(distIndexPath, `<!doctype html>\n${html}\n`)
    console.log(`[prerender] dist/index.html rewritten (${html.length} bytes)`)
  } finally {
    await browser.close()
    await new Promise((r) => server.httpServer.close(r))
  }
}

main().catch((err) => {
  console.error('[prerender] failed:', err)
  process.exit(1)
})
