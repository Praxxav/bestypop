import { motion, useReducedMotion } from 'framer-motion'
import {  MdLocationOn } from 'react-icons/md'
import type { Profile } from '../data/profileTypes'

type HeroSectionProps = {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative isolate shrink-0 overflow-hidden py-0.5 text-center">
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full shadow-lg bg-neutral-200 sm:size-28">
          <img
            src={profile.image}
            alt={`${profile.name} profile portrait`}
            className="size-full rounded-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* <div className="mt-1.5 sm:mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2 py-0.5 text-[9px] font-semibold text-[#6b46c1] shadow-sm backdrop-blur-md sm:text-[10px] border border-white/50">
          <MdCheckroom className="size-3 sm:size-3.5" />
          <span>Custom Apparel • POD • Bulk Manufacturing</span>
        </div> */}

        <h1 className="mt-1.5 sm:mt-2 max-w-5xl text-base font-bold tracking-tight text-[#15112e] sm:text-lg">
          {profile.name}
        </h1>
        <p className="mt-0.5 text-[1.5rem] font-medium tracking-wide text-[#5c50c6] sm:text-[0.95rem]">
          {profile.role.split('BestyPop™')[0]}
          <span className="font-semibold">BestyPop™</span>
        </p>

        {profile.location && (
          <div className="mt-1 flex items-center justify-center gap-1.5 text-[9px] font-medium text-neutral-500 sm:text-[14px]">
            <MdLocationOn className="size-3.5 text-[#6b46c1] sm:size-4" />
            <span>{profile.location}</span>
          </div>
        )}

        <div className="mt-1 h-1px w-10 rounded-full bg-linear-to-r from-transparent via-[#6b46c1] to-transparent sm:mt-1.5" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
