import { motion } from 'framer-motion'
import { finalFindings, finalStamp } from '../content'
import { PlayfulSecondaryButton } from './PlayfulSecondaryButton'

type FinalResultCardProps = {
  secondaryLabel: string
  helperText: string | null
  onSecondaryClick: () => void
  onRestart: () => void
  onPrint: () => void
}

export function FinalResultCard({
  secondaryLabel,
  helperText,
  onSecondaryClick,
  onRestart,
  onPrint,
}: FinalResultCardProps) {
  return (
    <motion.section
      key="result"
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-5xl"
    >
      <div className="glass-card overflow-visible p-5 sm:p-8 lg:p-10">
        <motion.div
          className="absolute right-3 top-8 z-20 hidden rounded-full border border-[#ffd6e8] bg-[rgba(255,247,251,0.96)] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#cb6c95] shadow-[0_18px_36px_rgba(224,171,194,0.24)] sm:block"
          initial={{ opacity: 0, rotate: 4, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 10, scale: 1 }}
          transition={{ delay: 0.32, duration: 0.45 }}
        >
          {finalStamp}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative z-10 space-y-6">
            <span className="soft-pill">
              <span className="h-2 w-2 rounded-full bg-[#ff9abc]" />
              Диагноз подтверждён
            </span>

            <div className="space-y-4">
              <p className="panel-label">Заключение комиссии</p>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.08] text-[#6b4d62] sm:text-5xl">
                Вы официально заражены милотой.
              </h2>
              <p className="max-w-xl text-base leading-8 text-[#7d6475]">
                Проверка завершена. Система старалась быть серьёзной, но результаты всё равно получились подозрительно обаятельными.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/75 bg-[linear-gradient(145deg,rgba(255,245,249,0.95),rgba(255,251,246,0.88),rgba(243,237,255,0.95))] p-6 shadow-[0_20px_44px_rgba(224,173,196,0.2)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c06a92]">
                С первым апреля 💖
              </p>
              <p className="mt-4 font-display text-3xl leading-[1.22] text-[#674d61]">
                Но часть диагноза всё равно была правдой.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="button"
                onClick={onPrint}
                className="no-print inline-flex items-center justify-center rounded-full border border-white/80 bg-white/82 px-6 py-3.5 text-sm font-bold text-[#8c667d] shadow-[0_14px_32px_rgba(217,170,191,0.18)] transition-transform duration-300 hover:scale-[1.01]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Распечатать диагноз
              </motion.button>
              <motion.button
                type="button"
                onClick={onRestart}
                className="no-print inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffb1cb_0%,#f2aacd_50%,#dcb4ff_100%)] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(232,155,191,0.34)] transition-transform duration-300 hover:scale-[1.01]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Пройти повторное обследование
              </motion.button>
            </div>

            <PlayfulSecondaryButton
              label={secondaryLabel}
              helperText={helperText}
              onClick={onSecondaryClick}
            />
          </div>

          <div className="relative z-10 space-y-5">
            <div className="glass-card p-6">
              <p className="panel-label">Финальная выписка</p>
              <div className="relative mt-6 flex items-center justify-center py-6">
                <motion.div
                  className="absolute h-60 w-60 rounded-full border border-white/85"
                  animate={{ scale: [0.9, 1.03, 0.9], opacity: [0.3, 0.82, 0.3] }}
                  transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute h-44 w-44 rounded-full border border-[#ffd6e7]"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.42, 0.95, 0.42] }}
                  transition={{ duration: 3.3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                />
                <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98)_0%,rgba(255,234,244,0.94)_46%,rgba(242,234,255,0.98)_100%)] shadow-[0_28px_64px_rgba(222,174,196,0.28)]">
                  <span className="text-5xl">💖</span>
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#b17f96]">
                    подтверждено
                  </p>
                </div>
              </div>
              <p className="text-center text-sm leading-7 text-[#7d6475]">
                Подпись дежурной системы: &quot;Ну всё, это уже официально слишком мило&quot;.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="panel-label">Итоговые показатели</p>
                <span className="rounded-full bg-[#fff0f6] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#cb6f97]">
                  A+
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {finalFindings.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.14 + index * 0.08, duration: 0.35 }}
                    className="rounded-[24px] border border-white/75 bg-white/62 px-4 py-4 text-sm font-semibold leading-6 text-[#7b6476]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
