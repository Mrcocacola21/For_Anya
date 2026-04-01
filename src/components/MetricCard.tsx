import { motion } from 'framer-motion'
import type { DiagnosticMetric, MetricTone } from '../content'
import { AnimatedNumber } from './AnimatedNumber'

type MetricCardProps = {
  metric: DiagnosticMetric
  isVisible: boolean
  index: number
}

const toneStyles: Record<
  MetricTone,
  {
    badge: string
    glow: string
    chip: string
  }
> = {
  rose: {
    badge: 'bg-[#fff0f7] text-[#d36c95]',
    glow: 'from-[#ffd6e7] via-[#ffb8d0] to-[#efc7ff]',
    chip: 'bg-[#ffe6f1]',
  },
  peach: {
    badge: 'bg-[#fff5ee] text-[#d18a6a]',
    glow: 'from-[#ffe2cf] via-[#ffd6ca] to-[#ffd6ea]',
    chip: 'bg-[#fff0e6]',
  },
  lilac: {
    badge: 'bg-[#f4efff] text-[#8867c8]',
    glow: 'from-[#ecdfff] via-[#dfccff] to-[#ffcae0]',
    chip: 'bg-[#efe6ff]',
  },
  mint: {
    badge: 'bg-[#eefcf7] text-[#579887]',
    glow: 'from-[#dcf6eb] via-[#e6ffef] to-[#e7dcff]',
    chip: 'bg-[#e9fbf2]',
  },
}

export function MetricCard({ metric, isVisible, index }: MetricCardProps) {
  const tone = toneStyles[metric.tone]

  if (!isVisible) {
    return (
      <div className="glass-card min-h-[220px] p-5 sm:p-6">
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-3">
              <div className="h-4 w-32 animate-pulse rounded-full bg-white/80" />
              <div className="h-10 w-24 animate-pulse rounded-full bg-white/65" />
            </div>
            <div className="h-9 w-24 animate-pulse rounded-full bg-white/70" />
          </div>
          <div className="space-y-4">
            <div className="metric-track">
              <div className="h-full w-1/3 animate-pulse rounded-full bg-white/80" />
            </div>
            <div className="space-y-2">
              <div className="h-3.5 w-full animate-pulse rounded-full bg-white/70" />
              <div className="h-3.5 w-5/6 animate-pulse rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.2, 0.9, 0.2, 1] }}
      className="glass-card min-h-[220px] p-5 sm:p-6"
    >
      <div
        className={`absolute inset-x-8 top-6 h-16 rounded-full bg-gradient-to-r ${tone.glow} opacity-60 blur-2xl`}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold leading-6 text-[#7b6072]">{metric.label}</p>
            <div className="mt-5 flex items-end gap-2">
              <span className="font-display text-4xl leading-none text-[#624b5d] sm:text-[2.8rem]">
                <AnimatedNumber value={metric.score} active={isVisible} />
              </span>
              <span className="pb-1 text-sm font-semibold text-[#9b7389]">%</span>
            </div>
          </div>
          <span className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] ${tone.badge}`}>
            {metric.status}
          </span>
        </div>

        <div className="space-y-4">
          <div className="metric-track">
            <motion.div
              className="metric-fill"
              initial={{ width: 0 }}
              animate={{ width: `${metric.score}%` }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="flex items-start gap-3">
            <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${tone.chip}`} />
            <p className="text-sm leading-6 text-[#7b6476]">{metric.note}</p>
          </div>
        </div>

        {metric.score >= 97 ? (
          <motion.div
            className="absolute right-5 top-5 text-lg"
            animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            {index % 2 === 0 ? '✨' : '💖'}
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  )
}
