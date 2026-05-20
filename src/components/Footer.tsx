import { Globe, Mail } from 'lucide-react'
import type { SocialLinks } from '../data/profileTypes'

type FooterProps = {
  socials: SocialLinks
}

export function Footer({ socials }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-[clamp(0.25rem,1dvh,0.75rem)] shrink-0 bg-neutral-50 px-4 pt-[clamp(0.25rem,1dvh,1rem)] pb-[clamp(1.5rem,4dvh,2rem)]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-[clamp(0.25rem,1dvh,0.75rem)]">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[clamp(0.7rem,1.5dvh,0.875rem)] font-medium text-neutral-600 sm:gap-10">
          <a
            href={socials.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 transition-colors hover:text-neutral-900"
          >
            <span className="flex size-[clamp(1rem,2.5dvh,1.25rem)] shrink-0 items-center justify-center rounded-sm bg-[#1a1532] text-[clamp(0.5rem,1.5dvh,0.6875rem)] font-bold leading-none text-white">
              in
            </span>
            <span className="truncate">{socials.linkedinLabel}</span>
          </a>

          <a
            href={socials.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 transition-colors hover:text-neutral-900"
          >
            <Globe className="size-[clamp(1rem,2.5dvh,1.25rem)] shrink-0 text-[#1a1532]" aria-hidden="true" />
            <span className="truncate">{socials.websiteLabel}</span>
          </a>

          <a
            href={`mailto:${socials.email}`}
            className="flex items-center justify-center gap-2 transition-colors hover:text-neutral-900"
          >
            <Mail className="size-[clamp(1rem,2.5dvh,1.25rem)] shrink-0 text-[#1a1532]" aria-hidden="true" />
            <span className="truncate">{socials.email}</span>
          </a>
        </div>

        <p className="w-full border-t border-neutral-200 pt-[clamp(0.25rem,1dvh,0.75rem)] text-center text-[clamp(0.65rem,1.5dvh,0.8125rem)] font-normal text-neutral-500">
          © {year} BestyPop™. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
