import { Globe, Mail } from 'lucide-react'
import type { SocialLinks } from '../data/profileTypes'

type FooterProps = {
  socials: SocialLinks
}

export function Footer({ socials }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-14 border-t border-neutral-200 bg-white/55 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7">
        <div className="grid w-full gap-4 text-sm font-medium text-neutral-700 sm:grid-cols-3 sm:text-base">
          <a
            href={socials.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 items-center justify-center gap-3 rounded-xl px-2 py-2 transition-colors hover:text-primary-600"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md  from-primary-700 to-primary-500 text-lg font-bold leading-none text-white">
              in
            </span>
            <span className="truncate">{socials.linkedinLabel}</span>
          </a>

          <a
            href={socials.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 items-center justify-center gap-3 rounded-xl px-2 py-2 transition-colors hover:text-primary-600"
          >
            <Globe className="size-7 shrink-0 text-primary-600" aria-hidden="true" />
            <span className="truncate">{socials.websiteLabel}</span>
          </a>

          <a
            href={`mailto:${socials.email}`}
            className="flex min-w-0 items-center justify-center gap-3 rounded-xl px-2 py-2 transition-colors hover:text-primary-600"
          >
            <Mail className="size-7 shrink-0 text-primary-600" aria-hidden="true" />
            <span className="truncate">{socials.email}</span>
          </a>
        </div>

        <p className="w-full border-t border-neutral-200 pt-5 text-center text-sm font-normal text-neutral-500">
          © {year} BestyPop™. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
