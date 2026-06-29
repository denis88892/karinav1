'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedFadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedFadeUp({
  children,
  delay = 0,
  className = '',
}: AnimatedFadeUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.7, ease: 'easeOut', delay }
      }
    >
      {children}
    </motion.div>
  )
}

interface AnimatedScaleProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedScale({
  children,
  delay = 0,
  className = '',
}: AnimatedScaleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.7, ease: 'easeOut', delay }
      }
    >
      {children}
    </motion.div>
  )
}

interface AnimatedContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  as?: string
}

export function AnimatedContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  as = 'div',
}: AnimatedContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  const MotionDiv = motion.div as any
  return (
    <MotionDiv
      ref={ref}
      className={className}
      as={as}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
            delayChildren: prefersReducedMotion ? 0 : 0.1,
          },
        },
      }}
    >
      {children}
    </MotionDiv>
  )
}

interface AnimatedItemProps {
  children: React.ReactNode
  className?: string
  as?: string
}

export function AnimatedItem({ children, className = '', as = 'div' }: AnimatedItemProps) {
  const MotionDiv = motion.div as any
  return (
    <MotionDiv
      className={className}
      as={as}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </MotionDiv>
  )
}
