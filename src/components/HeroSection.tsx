import { motion, useReducedMotion } from 'framer-motion'
import type { Profile } from '../data/profileTypes'

type HeroSectionProps = {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative isolate shrink-0 overflow-hidden pt-[clamp(0.25rem,1.5dvh,1.5rem)] text-center">
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="relative size-[clamp(3.5rem,10dvh,8rem)] shrink-0 overflow-hidden rounded-full shadow-sm bg-neutral-200">
          <img
            src={profile.image}
            alt={`${profile.name} profile portrait`}
            className="size-full rounded-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 className="mt-[clamp(0.25rem,1.5dvh,1.5rem)] max-w-5xl text-[clamp(1.125rem,3.5dvh,2.5rem)] font-bold tracking-tight text-[#15112e]">
          {profile.name}
        </h1>
        <p className="mt-[clamp(0.125rem,0.5dvh,0.5rem)] text-[clamp(0.75rem,1.5dvh,1.125rem)] font-medium tracking-wide text-[#5c50c6]">
          {profile.role.split('BestyPop™')[0]}
          <span className="font-semibold">BestyPop™</span>
        </p>
        <div className="mt-[clamp(0.25rem,1.5dvh,1.5rem)] h-[2px] w-[clamp(1.5rem,3dvh,2rem)] rounded-full bg-[#5c50c6]" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
