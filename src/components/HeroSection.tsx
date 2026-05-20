import { motion, useReducedMotion } from 'framer-motion'
import { MdCheckroom, MdLocationOn } from 'react-icons/md'
import type { Profile } from '../data/profileTypes'

type HeroSectionProps = {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative isolate shrink-0 overflow-hidden py-2 text-center">
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="relative size-28 shrink-0 overflow-hidden rounded-full shadow-lg bg-neutral-200 sm:size-36">
          <img
            src={profile.image}
            alt={`${profile.name} profile portrait`}
            className="size-full rounded-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold text-[#6b46c1] shadow-sm backdrop-blur-md sm:text-xs border border-white/50">
          <MdCheckroom className="size-3 sm:size-3.5" />
          <span>Custom Apparel • POD • Bulk Manufacturing</span>
        </div>

        <h1 className="mt-2 sm:mt-3 max-w-5xl text-lg font-bold tracking-tight text-[#15112e] sm:text-xl">
          {profile.name}
        </h1>
        <p className="mt-0.5 text-[0.75rem] font-medium tracking-wide text-[#5c50c6] sm:text-[0.85rem]">
          {profile.role.split('BestyPop™')[0]}
          <span className="font-semibold">BestyPop™</span>
        </p>

        {profile.location && (
          <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[10px] font-medium text-neutral-500 sm:text-xs">
            <MdLocationOn className="size-3.5 text-[#6b46c1] sm:size-4" />
            <span>{profile.location}</span>
          </div>
        )}

        <div className="mt-2 h-[1px] w-12 rounded-full bg-gradient-to-r from-transparent via-[#6b46c1] to-transparent sm:mt-3 sm:w-16" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
