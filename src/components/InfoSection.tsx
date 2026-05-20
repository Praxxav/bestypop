import { motion, useReducedMotion } from 'framer-motion'
import type { InfoItem } from '../data/profileTypes'


type InfoSectionProps = {
  items: InfoItem[]
}

const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 1, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export function InfoSection({ items }: InfoSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      className="mx-auto w-full max-w-3xl shrink-0 px-2 py-1 text-center text-sm sm:px-4 sm:py-2"
      variants={listVariants}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate="visible"
      aria-label="Profile details"
    >
      <div className="flex flex-col items-center gap-1">
        {items.map((item) => (
          <motion.article
            key={item.text}
            className="w-full max-w-160"
            variants={rowVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <p className="text-xs font-medium leading-snug tracking-normal text-neutral-800 sm:text-sm sm:leading-relaxed">
              {item.text}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
