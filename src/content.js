export const CONTACT = {
  phoneDisplay: '+7 775 741 7979',
  phoneTel: '+77757417979',
  whatsappBase: 'https://wa.me/77757417979',
  address: 'ул. Бейбитшилик, 25а',
  addressArea: 'район Сарыарка, Астана',
  hours: 'Пн–Сб, 10:00–19:00',
  instagramHandle: '@datchikidavlenia',
  instagramUrl: 'https://instagram.com/datchikidavlenia',
  tiktokHandle: '@shinsensor.tpms',
  tiktokUrl: 'https://tiktok.com/@shinsensor.tpms',
  rating: '4.9',
  mapEmbedSrc:
    'https://maps.google.com/maps?q=Астана%20улица%20Бейбитшилик%2025а&z=16&output=embed',
  reviewUrl2gis: 'https://2gis.kz/reviews/70000001074768387/addReview?utm_source=lk',
}

export const EQUIPMENT = ['Autel MaxiTPMS', 'Launch TPMS90']

export function waLink(serviceLabel) {
  const text = serviceLabel
    ? `Здравствуйте! Хочу записаться на услугу: ${serviceLabel}`
    : 'Здравствуйте, хочу записаться'
  return `${CONTACT.whatsappBase}?text=${encodeURIComponent(text)}`
}

export const NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Диагностика', href: '#diagnostics' },
  { label: 'Калькулятор', href: '#calculator' },
  { label: 'Контакты', href: '#contacts' },
]

export const SERVICES = [
  {
    title: 'Клонирование датчиков',
    description: 'Клонирование ID датчика без перепрограммирования блока — без разбора колеса.',
    price: '7 000 ₸ / комплект',
    priceValue: 7000,
    unit: 'комплект',
  },
  {
    title: 'Программирование под авто',
    description: 'Программирование и привязка TPMS к штатному блоку автомобиля.',
    price: '7 000 ₸ / комплект',
    priceValue: 7000,
    unit: 'комплект',
    image: '/images/scan-launch.jpg',
    badge: { label: 'Самое популярное', tone: 'indigo' },
  },
  {
    title: 'Новый датчик TPMS',
    description: 'Autel или Launch в сборе, с установкой.',
    price: '15 000 ₸ / шт',
    priceValue: 15000,
    unit: 'шт',
    image: '/images/product-1.jpg',
    badge: { label: 'Новинка', tone: 'indigo' },
  },
  {
    title: 'Прошить свои датчики',
    description: 'Перепрошивка вашего комплекта датчиков под протокол авто.',
    price: '10 000 ₸ / комплект',
    priceValue: 10000,
    unit: 'комплект',
    badge: { label: 'За комплект', tone: 'amber' },
  },
  {
    title: 'Диагностика TPMS',
    description: 'Точная причина неисправности сканером — без замен наугад.',
    price: 'бесплатно',
    priceValue: 0,
    unit: 'шт',
    image: '/images/scan-1.jpg',
    badge: { label: 'Бесплатно', tone: 'green' },
  },
  {
    title: 'Адаптация (прописка через OBD2)',
    description: 'Прописка датчика через OBD2 для нестандартного автомобиля или комплектации.',
    price: '7 000 ₸',
    priceValue: 7000,
    unit: 'шт',
  },
]

export const WHY_US = [
  {
    title: 'По диагностике, не наугад',
    description: 'Точная причина неисправности сканером — меняем только то, что реально сломано.',
  },
  {
    title: 'Премиальные датчики любых марок',
    description: 'Работаем с оригинальными и премиальными аналогами под конкретный автомобиль.',
  },
  {
    title: 'За один визит',
    description: 'Прошивка, привязка и клонирование — прямо на месте, без повторных заездов.',
  },
  {
    title: 'Гарантия 2 года',
    description: 'Уверены в результате и даём письменную гарантию на установку.',
  },
]

export const STATS = [
  { value: 4.9, decimals: 1, suffix: '★', label: 'рейтинг на 2ГИС' },
  { value: 2, decimals: 0, suffix: ' года', label: 'гарантия на установку' },
  { value: 1, decimals: 0, suffix: ' визит', label: 'чтобы решить вопрос с датчиком' },
]

// Демонстрационные данные диагностики — иллюстрация того, что видно на сканере во время визита.
export const WHEEL_DIAGNOSTIC = [
  { id: 'fl', label: 'ПЛ', name: 'Перед-лево', top: '14%', left: '18%', pressure: '2.3', status: 'ok', statusLabel: 'OK' },
  { id: 'fr', label: 'ПП', name: 'Перед-право', top: '14%', left: '82%', pressure: '2.2', status: 'ok', statusLabel: 'OK' },
  { id: 'rl', label: 'ЗЛ', name: 'Зад-лево', top: '82%', left: '18%', pressure: '1.6', status: 'critical', statusLabel: 'Прокол' },
  { id: 'rr', label: 'ЗП', name: 'Зад-право', top: '82%', left: '82%', pressure: '2.1', status: 'warning', statusLabel: 'Батарея 12%' },
]

export const SCAN_REPORT = [
  { status: 'ok', text: 'Сканер Launch TPMS90 — обнаружено 4 из 4 датчиков' },
  { status: 'critical', text: 'ЗЛ: давление 1.6 бар — ниже нормы, возможен медленный прокол' },
  { status: 'warning', text: 'ЗП: заряд батареи датчика 12% — рекомендована замена' },
  { status: 'ok', text: 'ПЛ, ПП: давление и ID в норме, привязка к блоку подтверждена' },
]

export const HERO_IMAGE_PROMPT =
  'Крупный план премиального TPMS-датчика давления шин на тёмном матовом фоне, тёплый боковой свет янтарного/золотого оттенка, эффект боке, фотореалистичная автомобильная реклама, глубина резкости, лёгкая дымка, стиль премиального глянцевого автомобильного журнала, 4K, macro lens'
