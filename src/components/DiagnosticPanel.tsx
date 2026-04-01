import { motion } from 'framer-motion'
import { diagnosticComments, diagnosticMetrics } from '../content'
import { MetricCard } from './MetricCard'
import { PlayfulSecondaryButton } from './PlayfulSecondaryButton'

type DiagnosticPanelProps = {
  progress: number
  phaseLabel: string
  visibleMetricCount: number
  visibleCommentCount: number
  secondaryLabel: string
  helperText: string | null
  onSecondaryClick: () => void
}

export function DiagnosticPanel({
  progress,
  phaseLabel,
  visibleMetricCount,
  visibleCommentCount,
  secondaryLabel,
  helperText,
  onSecondaryClick,
}: DiagnosticPanelProps) {
  const warningVisible = progress >= 44
  const visibleMetricLabels = diagnosticMetrics.slice(0, visibleMetricCount).map((metric) => metric.label)

  return (
    <motion.section
      key="diagnostic"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl"
    >
      <div className="glass-card p-5 sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="soft-pill">
                <span className="h-2 w-2 rounded-full bg-[#ff9abc]" />
                Диагностический протокол
              </span>
              <span className="soft-pill">Апрельская версия</span>
            </div>

            <div className="space-y-4">
              <p className="panel-label">Идёт обязательная проверка очарования</p>
              <h2 className="max-w-2xl font-display text-3xl leading-[1.14] text-[#6b4d62] sm:text-[2.7rem]">
                Пожалуйста, не мешайте системе фиксировать слишком приятные показатели.
              </h2>
              <p className="text-base leading-8 text-[#7d6475]">
                Текущая фаза: <span className="font-semibold text-[#8f6a80]">{phaseLabel}</span>
              </p>
            </div>

            <div className="rounded-[30px] border border-white/75 bg-white/62 p-5 shadow-[0_18px_44px_rgba(220,176,198,0.14)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#7f6477]">Ход проверки</p>
                  <p className="mt-1 text-sm leading-6 text-[#9a778a]">
                    Система ведёт себя серьёзно, но результаты уже подозрительно милые.
                  </p>
                </div>
                <p className="font-display text-4xl text-[#6a4d60]">{progress}%</p>
              </div>
              <div className="mt-4 metric-track h-3">
                <motion.div
                  className="metric-fill"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              </div>
            </div>

            {warningVisible ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[28px] border border-[#ffd4e7] bg-[linear-gradient(135deg,rgba(255,236,244,0.96),rgba(255,247,244,0.88),rgba(244,236,255,0.94))] px-5 py-4 shadow-[0_16px_34px_rgba(236,170,196,0.18)]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ca6d95]">
                  ⚠ Обнаружен опасный уровень привлекательного вайба
                </p>
              </motion.div>
            ) : null}

            <div className="grid gap-4 md:grid-cols-2">
              {diagnosticMetrics.map((metric, index) => (
                <MetricCard
                  key={metric.id}
                  metric={metric}
                  isVisible={index < visibleMetricCount}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 space-y-5">
            <div className="glass-card p-6">
              <p className="panel-label">Центральный сканер</p>
              <div className="relative mt-6 flex items-center justify-center py-5">
                <motion.div
                  className="absolute h-64 w-64 rounded-full border border-white/80"
                  animate={{ scale: [0.9, 1.04, 0.92], opacity: [0.24, 0.82, 0.24] }}
                  transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute h-48 w-48 rounded-full border border-[#ffd2e6]"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.92, 0.35] }}
                  transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute h-36 w-36 rounded-full border border-[#eadfff]"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.95, 0.45] }}
                  transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                />
                <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98)_0%,rgba(255,235,244,0.94)_45%,rgba(242,234,255,0.98)_100%)] shadow-[0_26px_60px_rgba(222,174,196,0.28)]">
                  <span className="text-4xl">✨</span>
                  <span className="mt-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#b07f96]">
                    {progress}%
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {visibleMetricLabels.length > 0 ? (
                    visibleMetricLabels.slice(-3).map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-white/80 bg-white/76 px-3 py-2 text-xs font-bold tracking-[0.1em] text-[#8a657a]"
                      >
                        {label}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full border border-white/80 bg-white/76 px-3 py-2 text-xs font-bold tracking-[0.1em] text-[#8a657a]">
                      подготавливаем датчики
                    </span>
                  )}
                </div>
                <p className="text-sm leading-6 text-[#7d6475]">
                  Система работает в режиме повышенной деликатности, но уже слегка смущена результатами.
                </p>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="panel-label">Комментарий системы</p>
                <span className="rounded-full bg-[#fff0f6] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#cb6f97]">
                  эфир
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {diagnosticComments.map((comment, index) =>
                  index < visibleCommentCount ? (
                    <motion.div
                      key={comment}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3 rounded-[24px] border border-white/75 bg-white/62 px-4 py-4"
                    >
                      <span className="mt-0.5 text-base">✦</span>
                      <p className="text-sm leading-6 text-[#7a6374]">{comment}</p>
                    </motion.div>
                  ) : (
                    <div
                      key={`placeholder-${comment}`}
                      className="rounded-[24px] border border-white/65 bg-white/46 px-4 py-4"
                    >
                      <div className="h-3.5 w-full animate-pulse rounded-full bg-white/75" />
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="panel-label">Попытка возражения</p>
              <div className="mt-4">
                <PlayfulSecondaryButton
                  label={secondaryLabel}
                  helperText={helperText}
                  onClick={onSecondaryClick}
                  compact
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
