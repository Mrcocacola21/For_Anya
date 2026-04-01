import { motion } from 'framer-motion'
import { floatingEmojis } from '../content'

type FloatingDecorProps = {
  stage: 'hero' | 'diagnostic' | 'result'
}

export function FloatingDecor({ stage }: FloatingDecorProps) {
  const stageScale = stage === 'result' ? 1.08 : stage === 'diagnostic' ? 1 : 0.94

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,203,224,0.9)_0%,rgba(255,203,224,0.08)_72%)] blur-3xl"
        animate={{ scale: [0.96 * stageScale, 1.08 * stageScale, 0.98 * stageScale], x: [0, 24, 6] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-3rem] top-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,191,255,0.88)_0%,rgba(212,191,255,0.08)_70%)] blur-3xl"
        animate={{ scale: [1.02, 0.92, 1.04], y: [0, -30, 0] }}
        transition={{ duration: 17, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-5rem] left-[26%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,231,209,0.9)_0%,rgba(255,231,209,0.05)_72%)] blur-3xl"
        animate={{ scale: [0.92, 1.08, 0.95], y: [0, -16, 0], x: [0, -14, 12] }}
        transition={{ duration: 14.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />

      {floatingEmojis.map((item) => (
        <motion.span
          key={`${item.emoji}-${item.top}-${item.left}`}
          className={`absolute select-none opacity-80 drop-shadow-[0_12px_24px_rgba(247,185,208,0.45)] ${item.sizeClass}`}
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -18 * stageScale, 0],
            x: [0, 10 * stageScale, 0],
            rotate: [0, -5, 5, 0],
            opacity: stage === 'hero' ? [0.34, 0.7, 0.34] : [0.44, 0.88, 0.44],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  )
}
