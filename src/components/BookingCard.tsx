import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import type { Meeting } from '../data/profileTypes'
import { iconMap } from './iconMap'

type BookingCardProps = {
  meeting: Meeting
  profileSlug: string
}

export function BookingCard({ meeting, profileSlug }: BookingCardProps) {
  const Icon = iconMap[meeting.icon]
  const durationMinutes = meeting.duration.match(/\d+/)?.[0] || '15'
  const bookingUrl = `https://cal.bestypopdemostore.com/${profileSlug}/${durationMinutes}min?overlayCalendar=true`
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      className="group flex w-full shrink-0 flex-row items-center justify-between rounded-xl border border-neutral-100 bg-white p-[clamp(0.5rem,1.5dvh,1rem)] shadow-sm transition-shadow hover:shadow-md sm:flex-1"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex min-w-0 flex-row items-center gap-[clamp(0.75rem,2dvh,1.25rem)]">
        <div className="flex size-[clamp(2.5rem,6dvh,3.5rem)] shrink-0 items-center justify-center rounded-full bg-[#f2efff] text-[#201944]">
          <Icon className="size-[clamp(1.25rem,3dvh,1.5rem)] stroke-[1.8]" aria-hidden="true" />
        </div>

        <div className="min-w-0 text-left">
          <h2 className="truncate text-[clamp(1rem,2.5dvh,1.125rem)] font-bold tracking-tight text-[#16122d]">
            {meeting.title}
          </h2>
          <div className="mt-1 flex items-center gap-1.5 text-[clamp(0.75rem,1.5dvh,0.875rem)] font-semibold text-neutral-600">
            <Clock className="size-3.5 text-[#201944]" aria-hidden="true" />
            <span>{meeting.duration}</span>
          </div>
          {/* Show description on all screens */}
          <p className="mt-1 line-clamp-1 text-[clamp(0.75rem,1.5dvh,0.875rem)] font-normal text-neutral-600">
            {meeting.description}
          </p>
        </div>
      </div>

      <motion.a
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="ml-3 flex shrink-0 items-center justify-center rounded-lg bg-[#6b46c1] p-[clamp(0.5rem,1.5dvh,0.75rem)] text-white shadow-sm transition-all hover:bg-[#553c9a] md:px-[clamp(1rem,2dvh,1.5rem)] md:py-[clamp(0.5rem,1.5dvh,0.75rem)]"
        whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
        aria-label={`${meeting.cta} with ${meeting.title}`}
      >
        <span className="mr-1.5 text-[10px] font-medium tracking-normal sm:mr-2 sm:text-xs md:text-[clamp(0.75rem,1.5dvh,0.875rem)] md:font-semibold">
          {meeting.cta}
        </span>
        <ArrowRight className="size-4 md:size-[clamp(0.75rem,1.5dvh,0.875rem)]" aria-hidden="true" />
      </motion.a>
    </motion.article>
  )
}
