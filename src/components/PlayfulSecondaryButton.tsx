import { AnimatePresence, motion } from 'framer-motion'

type PlayfulSecondaryButtonProps = {
  label: string
  helperText: string | null
  onClick: () => void
  compact?: boolean
}

export function PlayfulSecondaryButton({
  label,
  helperText,
  onClick,
  compact = false,
}: PlayfulSecondaryButtonProps) {
  return (
    <div className={`flex flex-col ${compact ? 'items-start' : 'items-start sm:items-center'}`}>
      <motion.button
        type="button"
        onClick={onClick}
        className={`group no-print relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white/70 font-semibold text-[#8c667d] shadow-[0_14px_34px_rgba(215,166,190,0.2)] backdrop-blur-md transition-colors duration-300 hover:bg-white/88 ${
          compact ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-sm'
        }`}
        whileHover={{ x: 4, y: -2, rotate: -0.8, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        animate={{ y: [0, -2, 0], rotate: [0, -0.4, 0.4, 0] }}
        transition={{
          duration: 5.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.button>

      <AnimatePresence mode="wait">
        {helperText ? (
          <motion.p
            key={helperText}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
            className={`mt-2 max-w-[18rem] text-sm leading-6 text-[#966e84] ${
              compact ? '' : 'sm:text-center'
            }`}
          >
            {helperText}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
