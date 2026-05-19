import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router'

type NavbarProps = {
  meetingPath?: string
}

export function Navbar({ meetingPath = 'meet.bestypop.com' }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-8 lg:px-10">
        <Link
          to="/jineesh-mathew"
          className="shrink-0 text-2xl font-bold tracking-normal text-neutral-900 transition-colors hover:text-primary-600 sm:text-3xl"
          aria-label="BestyPop home"
        >
          BestyPop<sup className="ml-0.5 align-super text-[0.42em] font-bold">™</sup>
        </Link>

        <div className="flex w-full min-w-0 items-center gap-2 overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 sm:w-auto sm:max-w-none sm:text-base">
          <CalendarDays className="size-5 shrink-0 text-primary-600" aria-hidden="true" />
          <span className="block min-w-0 truncate">{meetingPath}</span>
        </div>
      </nav>
    </header>
  )
}
