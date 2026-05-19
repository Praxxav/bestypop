import { motion } from 'framer-motion'
import type { IconName } from '../data/profileTypes'
import { iconMap } from './iconMap'

type FloatingIcon = {
  icon: IconName
  className: string
  delay: number
  rotate: number
}

const floatingIcons: FloatingIcon[] = [
  {
    icon: 'pen',
    className: 'left-[7%] top-[12%] size-20 lg:size-24',
    delay: 0.1,
    rotate: -12,
  },
  {
    icon: 'text',
    className: 'right-[9%] top-[26%] size-16 lg:size-20',
    delay: 0.2,
    rotate: 8,
  },
  {
    icon: 'image',
    className: 'right-[13%] top-[8%] size-16 lg:size-20',
    delay: 0.3,
    rotate: 9,
  },
  {
    icon: 'shirt',
    className: 'left-[12%] bottom-[18%] size-14 lg:size-16',
    delay: 0.4,
    rotate: -4,
  },
  {
    icon: 'sparkles',
    className: 'right-[8%] bottom-[20%] size-12 lg:size-14',
    delay: 0.5,
    rotate: 0,
  },
]

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block" aria-hidden="true">
      {floatingIcons.map((item) => {
        const Icon = iconMap[item.icon]

        return (
          <motion.div
            key={`${item.icon}-${item.className}`}
            className={`absolute text-primary-600/15 ${item.className}`}
            initial={{ opacity: 0, y: 14, rotate: item.rotate - 4 }}
            animate={{ opacity: 1, y: 0, rotate: item.rotate }}
            transition={{ duration: 0.7, delay: item.delay, ease: 'easeOut' }}
          >
            <Icon className="size-full stroke-[1.35]" />
          </motion.div>
        )
      })}

      <motion.div
        className="absolute left-[8%] top-[45%] grid grid-cols-5 gap-2 opacity-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index} className="size-1 rounded-full bg-primary-600" />
        ))}
      </motion.div>
    </div>
  )
}
