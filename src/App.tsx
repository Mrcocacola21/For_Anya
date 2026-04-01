import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  diagnosticComments,
  diagnosticMetrics,
  diagnosticPhases,
  heroContent,
  objectionResponses,
  secondaryButtonStates,
} from './content'
import { DiagnosticPanel } from './components/DiagnosticPanel'
import { FinalResultCard } from './components/FinalResultCard'
import { FloatingDecor } from './components/FloatingDecor'
import { HeroSection } from './components/HeroSection'

type Stage = 'hero' | 'diagnostic' | 'result'

const TOTAL_SCAN_DURATION_MS = 7800
const METRIC_STEP_MS = 860
const COMMENT_STEP_MS = 1120

export default function App() {
  const [stage, setStage] = useState<Stage>('hero')
  const [progress, setProgress] = useState(0)
  const [visibleMetricCount, setVisibleMetricCount] = useState(0)
  const [visibleCommentCount, setVisibleCommentCount] = useState(0)
  const [secondaryIndex, setSecondaryIndex] = useState(0)
  const [helperText, setHelperText] = useState<string | null>(null)
  const [responseCursor, setResponseCursor] = useState(0)
  const [scanRun, setScanRun] = useState(0)

  useEffect(() => {
    if (!helperText) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setHelperText(null)
    }, 1800)

    return () => window.clearTimeout(timeoutId)
  }, [helperText])

  useEffect(() => {
    if (stage !== 'diagnostic') {
      return
    }

    let resultTimeoutId = 0
    const startedAt = performance.now()

    const intervalId = window.setInterval(() => {
      const elapsed = performance.now() - startedAt
      const ratio = Math.min(elapsed / TOTAL_SCAN_DURATION_MS, 1)
      const nextProgress = Math.round(ratio * 100)
      const nextVisibleMetricCount = Math.min(
        diagnosticMetrics.length,
        Math.max(0, Math.floor((elapsed - 260) / METRIC_STEP_MS) + 1),
      )
      const nextVisibleCommentCount = Math.min(
        diagnosticComments.length,
        Math.max(0, Math.floor((elapsed - 620) / COMMENT_STEP_MS) + 1),
      )
      const nextSecondaryIndex = Math.min(
        secondaryButtonStates.length - 1,
        Math.max(1, Math.floor((elapsed - 240) / 1500) + 1),
      )

      setProgress(nextProgress)
      setVisibleMetricCount(nextVisibleMetricCount)
      setVisibleCommentCount(nextVisibleCommentCount)
      setSecondaryIndex(nextSecondaryIndex)

      if (ratio >= 1) {
        window.clearInterval(intervalId)
        resultTimeoutId = window.setTimeout(() => {
          setStage('result')
        }, 820)
      }
    }, 90)

    return () => {
      window.clearInterval(intervalId)

      if (resultTimeoutId) {
        window.clearTimeout(resultTimeoutId)
      }
    }
  }, [scanRun, stage])

  const resetScanState = () => {
    setProgress(0)
    setVisibleMetricCount(0)
    setVisibleCommentCount(0)
    setSecondaryIndex(0)
    setHelperText(null)
  }

  const handleStart = () => {
    resetScanState()
    setScanRun((current) => current + 1)
    setStage('diagnostic')
  }

  const handleRestart = () => {
    resetScanState()
    setStage('hero')
  }

  const handleSecondaryClick = () => {
    const responsePool = stage === 'hero' ? objectionResponses.hero : objectionResponses.active
    const nextResponse = responsePool[responseCursor % responsePool.length]

    setHelperText(nextResponse)
    setResponseCursor((current) => current + 1)

    if (stage !== 'hero') {
      setSecondaryIndex((current) => Math.min(current + 1, secondaryButtonStates.length - 1))
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const phaseLabel =
    diagnosticPhases.find((phase) => progress < phase.threshold)?.label ??
    diagnosticPhases[diagnosticPhases.length - 1].label

  const secondaryLabel =
    stage === 'hero' ? heroContent.secondaryCta : secondaryButtonStates[secondaryIndex]

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <FloatingDecor stage={stage} />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_38%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.32),transparent_34%)]" />

      <AnimatePresence mode="wait">
        {stage === 'hero' ? (
          <HeroSection
            secondaryLabel={secondaryLabel}
            helperText={helperText}
            onStart={handleStart}
            onSecondaryClick={handleSecondaryClick}
          />
        ) : null}

        {stage === 'diagnostic' ? (
          <DiagnosticPanel
            progress={progress}
            phaseLabel={phaseLabel}
            visibleMetricCount={visibleMetricCount}
            visibleCommentCount={visibleCommentCount}
            secondaryLabel={secondaryLabel}
            helperText={helperText}
            onSecondaryClick={handleSecondaryClick}
          />
        ) : null}

        {stage === 'result' ? (
          <FinalResultCard
            secondaryLabel={secondaryLabel}
            helperText={helperText}
            onSecondaryClick={handleSecondaryClick}
            onRestart={handleRestart}
            onPrint={handlePrint}
          />
        ) : null}
      </AnimatePresence>
    </main>
  )
}
