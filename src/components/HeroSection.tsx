import { motion, useReducedMotion } from 'framer-motion'
import type { Profile } from '../data/profileTypes'

type HeroSectionProps = {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden px-5 pt-12 text-center sm:px-8 sm:pt-16 lg:px-10">
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="relative size-32 overflow-hidden rounded-full shadow-sm sm:size-40 lg:size-48 bg-neutral-200">
          <img
            src={profile.image}
            alt={`${profile.name} profile portrait`}
            className="size-full rounded-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 className="mt-6 max-w-5xl text-3xl font-bold tracking-tight text-[#15112e] sm:mt-8 sm:text-4xl lg:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-base font-medium tracking-wide text-[#5c50c6] sm:text-lg lg:text-xl">
          {profile.role.split('BestyPop™')[0]}
          <span className="font-semibold">BestyPop™</span>
        </p>
        <div className="mt-6 h-[2px] w-8 rounded-full bg-[#5c50c6] sm:mt-8" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
