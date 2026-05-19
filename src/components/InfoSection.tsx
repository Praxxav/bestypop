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
      className="mx-auto w-full max-w-3xl shrink-0 px-4 pt-[clamp(0.25rem,1dvh,1rem)] text-center"
      variants={listVariants}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate="visible"
      aria-label="Profile details"
    >
      <div className="flex flex-col items-center gap-[clamp(0.25rem,1dvh,0.5rem)]">
        {items.map((item) => (
          <motion.article
            key={item.text}
            className="w-full max-w-[40rem]"
            variants={rowVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <p className="text-[clamp(0.75rem,2dvh,0.9375rem)] font-medium leading-relaxed tracking-normal text-neutral-800">
              {item.text}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
