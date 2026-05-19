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
      className="group rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_24px_70px_rgba(79,70,229,0.13)] sm:p-8"
      initial={prefersReducedMotion ? false : { opacity: 1, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 sm:size-28">
            <Icon className="size-11 stroke-[1.8] sm:size-12" aria-hidden="true" />
          </div>

          <div className="min-w-0 text-left">
            <h2 className="text-2xl font-bold leading-tight tracking-normal text-neutral-900 sm:text-3xl">
              {meeting.title}
            </h2>
            <div className="mt-3 flex items-center gap-2 text-base font-semibold text-neutral-700">
              <Clock className="size-5 text-primary-600" aria-hidden="true" />
              <span>{meeting.duration}</span>
            </div>
            <p className="mt-3 max-w-xl text-base font-normal leading-7 tracking-normal text-neutral-600 sm:text-lg">
              {meeting.description}
            </p>
          </div>
        </div>

        <motion.a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold tracking-normal text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl active:shadow-md sm:w-auto sm:min-w-56"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          aria-label={`${meeting.cta} with ${meeting.title}`}
        >
          <span>{meeting.cta}</span>
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </motion.a>
      </div>
    </motion.article>
  )
}
