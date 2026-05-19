import { Globe, Mail } from 'lucide-react'
import type { SocialLinks } from '../data/profileTypes'

type FooterProps = {
  socials: SocialLinks
}

export function Footer({ socials }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 bg-neutral-50 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-sm font-medium text-neutral-600 sm:flex-row sm:gap-10 sm:text-[15px]">
          <a
            href={socials.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 transition-colors hover:text-neutral-900"
          >
            <span className="flex size-[1.125rem] shrink-0 items-center justify-center rounded-[4px] bg-[#1a1532] text-[10px] font-bold leading-none text-white sm:size-[1.25rem] sm:text-[11px]">
              in
            </span>
            <span className="truncate">{socials.linkedinLabel}</span>
          </a>

          <a
            href={socials.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 transition-colors hover:text-neutral-900"
          >
            <Globe className="size-[1.125rem] shrink-0 text-[#1a1532] sm:size-[1.25rem]" aria-hidden="true" />
            <span className="truncate">{socials.websiteLabel}</span>
          </a>

          <a
            href={`mailto:${socials.email}`}
            className="flex items-center justify-center gap-2.5 transition-colors hover:text-neutral-900"
          >
            <Mail className="size-[1.125rem] shrink-0 text-[#1a1532] sm:size-[1.25rem]" aria-hidden="true" />
            <span className="truncate">{socials.email}</span>
          </a>
        </div>

        <p className="w-full border-t border-neutral-200 pt-6 text-center text-[13px] font-normal text-neutral-500">
          © {year} BestyPop™. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
