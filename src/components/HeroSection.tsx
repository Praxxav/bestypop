import { motion, useReducedMotion } from 'framer-motion'
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

        <h1 className="mt-2 max-w-5xl text-lg font-bold tracking-tight text-[#15112e] sm:text-xl">
          {profile.name}
        </h1>
        <p className="mt-0.5 text-[0.75rem] font-medium tracking-wide text-[#5c50c6] sm:text-[0.85rem]">
          {profile.role.split('BestyPop™')[0]}
          <span className="font-semibold">BestyPop™</span>
        </p>
        <div className="mt-1.5 h-0.5 w-10 rounded-full bg-[#5c50c6]" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
