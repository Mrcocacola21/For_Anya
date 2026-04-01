export type MetricTone = 'rose' | 'peach' | 'lilac' | 'mint'

export type DiagnosticMetric = {
  id: string
  label: string
  score: number
  tone: MetricTone
  note: string
  status: string
}

export type FloatingEmoji = {
  emoji: string
  top: string
  left: string
  sizeClass: string
  duration: number
  delay: number
}

export const heroContent = {
  badge: 'Система обнаружения милоты v1.04',
  eyebrow: 'Апрельский протокол проверки',
  title: 'Внимание. Обнаружен критически милый человек.',
  subtitle:
    'Пожалуйста, пройдите обязательную проверку на уровень очарования. Формальность, конечно. Но очень симпатично оформленная.',
  primaryCta: 'Начать диагностику',
  secondaryCta: 'Я вообще-то обычная',
}

export const heroPreviewTags = [
  'Протокол A-01',
  'Режим деликатного сканирования',
  'Сертифицировано для мягкой паники',
]

export const secondaryButtonStates = [
  'Я вообще-то обычная',
  'точно?',
  'сомнительно',
  'система не согласна',
  'это уже невозможно скрыть',
]

export const objectionResponses = {
  hero: [
    'Заявление принято. Проверка всё равно обязательна.',
    'Хорошо. Система это очень вежливо перепроверит.',
    'Возражение сохранено, но уровень интриги уже вырос.',
  ],
  active: [
    'Возражение зафиксировано. Доверия не вызвало.',
    'Система кивает, но продолжает любоваться результатами.',
    'Формально спор принят. По факту уже поздно.',
  ],
}

export const diagnosticPhases = [
  { threshold: 18, label: 'Проверяем фоновую милость' },
  { threshold: 42, label: 'Сканируем улыбку и общий вайб' },
  { threshold: 68, label: 'Анализируем побочный эффект нравиться людям' },
  { threshold: 101, label: 'Фиксируем критическое очарование' },
]

export const diagnosticMetrics: DiagnosticMetric[] = [
  {
    id: 'charm',
    label: 'Уровень очарования',
    score: 98.6,
    tone: 'rose',
    note: 'Система обнаружила подозрительно высокий уровень очарования.',
    status: 'обнаружено',
  },
  {
    id: 'smile',
    label: 'Подозрительность улыбки',
    score: 94.2,
    tone: 'peach',
    note: 'Наблюдается выраженный эффект "ну как тут не улыбнуться в ответ".',
    status: 'очень подозрительно',
  },
  {
    id: 'mood',
    label: 'Вероятность поднимать людям настроение',
    score: 99.8,
    tone: 'lilac',
    note: 'Вероятность делать день лучше: 99.8%. Это уже медицинский факт.',
    status: 'критический уровень',
  },
  {
    id: 'cozy',
    label: 'Коэффициент уютности',
    score: 96.4,
    tone: 'mint',
    note: 'Зафиксирован редкий и очень опасный запас приятного вайба.',
    status: 'выше нормы',
  },
  {
    id: 'attention',
    label: 'Риск украсть чьё-то внимание',
    score: 92.7,
    tone: 'rose',
    note: 'Объект стабильно перехватывает чужие мысли и взгляд.',
    status: 'повышенный',
  },
  {
    id: 'adorable',
    label: 'Индекс опасной милоты',
    score: 97.9,
    tone: 'lilac',
    note: 'Диагностирована нестандартная концентрация милоты.',
    status: 'почти незаконно',
  },
]

export const diagnosticComments = [
  'Объект вызывает повышенную симпатию у окружающих.',
  'Риск случайно понравиться кому-то: критический.',
  'Наблюдается опасный уровень приятного вайба.',
  'Слишком приятный человек. Повторяем анализ на всякий случай.',
  'Система старалась быть объективной, но тоже уже очарована.',
]

export const finalFindings = [
  'Очарование: критически высокое',
  'Уютность: за пределами нормы',
  'Способность нравиться людям: подтверждена',
  'Опасность для чужого внимания: серьёзная',
]

export const floatingEmojis: FloatingEmoji[] = [
  { emoji: '✨', top: '10%', left: '14%', sizeClass: 'text-xl sm:text-2xl', duration: 8.4, delay: 0.1 },
  { emoji: '💖', top: '18%', left: '82%', sizeClass: 'text-2xl sm:text-3xl', duration: 9.3, delay: 0.8 },
  { emoji: '🌸', top: '72%', left: '12%', sizeClass: 'text-2xl sm:text-3xl', duration: 10.2, delay: 1.2 },
  { emoji: '⭐', top: '76%', left: '86%', sizeClass: 'text-xl sm:text-2xl', duration: 7.9, delay: 0.4 },
  { emoji: '🐰', top: '36%', left: '8%', sizeClass: 'text-lg sm:text-xl', duration: 11.1, delay: 1.6 },
  { emoji: '🐱', top: '56%', left: '90%', sizeClass: 'text-lg sm:text-xl', duration: 8.8, delay: 0.6 },
]

export const finalStamp = 'Одобрено Институтом Милых Ситуаций'
