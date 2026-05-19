import { motion, useReducedMotion } from 'framer-motion'
import type { Profile } from '../data/profileTypes'
import { FloatingIcons } from './FloatingIcons'

type HeroSectionProps = {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden px-5 pt-10 text-center sm:px-8 sm:pt-14 lg:px-10">
      <FloatingIcons />

      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        initial={prefersReducedMotion ? false : { opacity: 0.96, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="relative size-44 overflow-hidden rounded-full bg-primary-100 p-1 shadow-lg sm:size-60 lg:size-72">
          <img
            src={profile.image}
            alt={`${profile.name} profile portrait`}
            className="size-full rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.04] tracking-normal text-neutral-900 sm:mt-8 sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-semibold tracking-normal text-primary-600 sm:text-2xl lg:text-3xl">
          {profile.role.split('BestyPop™')[0]}
          <span className="font-bold">BestyPop™</span>
        </p>
        <div className="mt-5 h-1 w-12 rounded-full  from-primary-600 to-primary-500" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
