import { motion } from 'framer-motion'
import { heroContent, heroPreviewTags } from '../content'
import { PlayfulSecondaryButton } from './PlayfulSecondaryButton'

type HeroSectionProps = {
  secondaryLabel: string
  helperText: string | null
  onStart: () => void
  onSecondaryClick: () => void
}

export function HeroSection({
  secondaryLabel,
  helperText,
  onStart,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <motion.section
      key="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -22 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl"
    >
      <div className="glass-card p-5 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10">
            <span className="soft-pill no-print">
              <span className="h-2 w-2 rounded-full bg-[#f39abc]" />
              {heroContent.badge}
            </span>

            <div className="mt-7 space-y-5">
              <p className="panel-label">{heroContent.eyebrow}</p>
              <h1 className="max-w-xl font-display text-4xl leading-[1.08] text-[#6b4d61] sm:text-5xl lg:text-[4rem]">
                {heroContent.title}
              </h1>
              <p className="max-w-xl text-base leading-8 text-[#7a6172] sm:text-lg">
                {heroContent.subtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <motion.button
                type="button"
                onClick={onStart}
                className="no-print inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffb1cb_0%,#f3aacd_52%,#dcb4ff_100%)] px-7 py-4 text-sm font-extrabold tracking-[0.08em] text-white shadow-[0_20px_50px_rgba(232,155,191,0.38)] transition-transform duration-300 hover:scale-[1.02]"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {heroContent.primaryCta}
              </motion.button>
              <PlayfulSecondaryButton
                label={secondaryLabel}
                helperText={helperText}
                onClick={onSecondaryClick}
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroPreviewTags.map((tag, index) => (
                <motion.div
                  key={tag}
                  className="rounded-[24px] border border-white/70 bg-white/60 px-4 py-4 text-sm font-semibold leading-6 text-[#845f74] shadow-[0_16px_34px_rgba(215,174,194,0.14)] backdrop-blur-md"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.09, duration: 0.45 }}
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="glass-card min-h-[370px] p-6 sm:p-7">
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="panel-label">Предварительное сканирование</p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#7d6575]">
                    Система уже заметила слишком спокойную, красивую и подозрительно приятную энергетику.
                  </p>
                </div>

                <div className="relative mt-8 flex items-center justify-center py-4">
                  <motion.div
                    className="absolute h-56 w-56 rounded-full border border-white/80"
                    animate={{ scale: [0.92, 1.04, 0.92], opacity: [0.35, 0.82, 0.35] }}
                    transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute h-44 w-44 rounded-full border border-[#ffd6e7]/80"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.48, 0.92, 0.48] }}
                    transition={{ duration: 3.3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                  />
                  <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96)_0%,rgba(255,235,244,0.96)_48%,rgba(242,232,255,0.96)_100%)] shadow-[0_24px_60px_rgba(223,172,197,0.32)]">
                    <span className="text-4xl">💗</span>
                    <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.22em] text-[#b47f98]">
                      готово
                    </p>
                  </div>

                  <motion.div
                    className="absolute left-0 top-5 rounded-full border border-white/80 bg-white/76 px-4 py-2 text-sm font-semibold text-[#8b677c] shadow-[0_12px_28px_rgba(219,177,196,0.2)]"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                  >
                    очарование найдено
                  </motion.div>
                  <motion.div
                    className="absolute bottom-5 right-0 rounded-full border border-white/80 bg-white/78 px-4 py-2 text-sm font-semibold text-[#8b677c] shadow-[0_12px_28px_rgba(219,177,196,0.2)]"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                  >
                    режим: мягкая тревога
                  </motion.div>
                </div>

                <div className="mt-6 rounded-[28px] border border-white/75 bg-white/65 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#7a6071]">Статус системы</p>
                      <p className="mt-1 text-sm leading-6 text-[#9a7488]">
                        Готова к официальному подтверждению милоты.
                      </p>
                    </div>
                    <span className="rounded-full bg-[#ffeaf2] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#ce6b94]">
                      в сети
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
