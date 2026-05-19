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
      className="group rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#f2efff] text-[#201944] sm:size-20">
            <Icon className="size-8 stroke-[1.8] sm:size-10" aria-hidden="true" />
          </div>

          <div className="min-w-0 text-left">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-[#16122d] sm:text-2xl">
              {meeting.title}
            </h2>
            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-neutral-600 sm:text-[15px]">
              <Clock className="size-4 text-[#201944]" aria-hidden="true" />
              <span>{meeting.duration}</span>
            </div>
            <p className="mt-2 max-w-xl text-sm font-normal leading-relaxed tracking-normal text-neutral-600 sm:text-[15px]">
              {meeting.description}
            </p>
          </div>
        </div>

        <motion.a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#201944] px-6 py-3.5 text-[15px] font-semibold tracking-normal text-white shadow-sm transition-all hover:bg-[#16122d] hover:shadow-md active:shadow-sm sm:w-auto sm:min-w-48"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          aria-label={`${meeting.cta} with ${meeting.title}`}
        >
          <span>{meeting.cta}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </motion.a>
      </div>
    </motion.article>
  )
}
