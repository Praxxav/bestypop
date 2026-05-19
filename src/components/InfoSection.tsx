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
      className="mx-auto w-full max-w-3xl px-5 pt-9 sm:px-8 sm:pt-12 lg:px-10"
      variants={listVariants}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate="visible"
      aria-label="Profile details"
    >
      <div className="divide-y divide-neutral-200">
        {items.map((item) => {
          const Icon = iconMap[item.icon]

          return (
            <motion.article
              key={item.text}
              className="flex w-full flex-col items-center gap-5 py-6 text-center sm:flex-row sm:items-center sm:text-left"
              variants={rowVariants}
              transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }}
            >
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 shadow-sm sm:size-24">
                <Icon className="size-9 stroke-[1.8] sm:size-10" aria-hidden="true" />
              </div>
              <p className="w-full max-w-[17rem] break-words text-base font-normal leading-7 tracking-normal text-neutral-700 sm:max-w-2xl sm:flex-1 sm:text-xl sm:leading-8">
                {item.text}
              </p>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}
