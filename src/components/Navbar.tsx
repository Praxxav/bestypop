import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router'

type NavbarProps = {
  meetingPath?: string
}

export function Navbar({ meetingPath = 'meet.bestypop.com' }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 sm:gap-2">
        <Link
          to="/jineesh-mathew"
          className="shrink-0 text-[clamp(0.9rem,2.5dvh,1.25rem)] font-bold tracking-normal text-neutral-900 transition-colors hover:text-primary-600"
          aria-label="BestyPop home"
        >
          BestyPop<sup className="ml-0.5 align-super text-[0.4em] font-bold">™</sup>
        </Link>

        <div className="flex min-w-0 items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[0.6rem] font-medium text-neutral-700 sm:max-w-62.5 sm:gap-2 sm:px-3 sm:py-1 sm:text-[0.7rem]">
          <CalendarDays className="size-3 shrink-0 text-primary-600" aria-hidden="true" />
          <span className="block min-w-0 truncate">{meetingPath}</span>
        </div>
      </nav>
    </header>
  )
}
