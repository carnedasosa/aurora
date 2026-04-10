'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 10,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
  },
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  className,
  style,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ perspective: '1200px', ...style }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
