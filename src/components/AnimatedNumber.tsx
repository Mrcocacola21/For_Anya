import { useEffect, useState } from 'react'

type AnimatedNumberProps = {
  value: number
  active: boolean
}

export function AnimatedNumber({ value, active }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const precision = Number.isInteger(value) ? 0 : 1

  useEffect(() => {
    if (!active) {
      setDisplayValue(0)
      return
    }

    let frameId = 0
    const duration = 900
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplayValue(value * eased)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [active, value])

  return (
    <span>
      {displayValue.toLocaleString('ru-RU', {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      })}
    </span>
  )
}
