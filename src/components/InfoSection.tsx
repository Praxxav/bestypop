import { motion, useReducedMotion } from 'framer-motion'
import type { InfoItem } from '../data/profileTypes'
import { iconMap } from './iconMap'

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
      className="mx-auto w-full max-w-3xl px-5 pt-8 text-center sm:px-8 sm:pt-10 lg:px-10"
      variants={listVariants}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate="visible"
      aria-label="Profile details"
    >
      <div className="flex flex-col items-center gap-4">
        {items.map((item) => (
          <motion.article
            key={item.text}
            className="w-full max-w-[40rem]"
            variants={rowVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <p className="text-sm font-medium leading-relaxed tracking-normal text-neutral-800 md:text-[15px] md:leading-relaxed">
              {item.text}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
