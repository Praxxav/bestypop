import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router'

type NavbarProps = {
  meetingPath?: string
}

export function Navbar({ meetingPath = 'meet.bestypop.com' }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-[clamp(0.5rem,2dvh,1rem)] sm:flex-row sm:items-center sm:gap-4 sm:px-6">
        <Link
          to="/jineesh-mathew"
          className="shrink-0 text-[clamp(1.25rem,4dvh,1.875rem)] font-bold tracking-normal text-neutral-900 transition-colors hover:text-primary-600"
          aria-label="BestyPop home"
        >
          BestyPop<sup className="ml-0.5 align-super text-[0.42em] font-bold">™</sup>
        </Link>

        <div className="flex w-full min-w-0 items-center gap-2 overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 px-3 py-[clamp(0.25rem,1dvh,0.5rem)] text-[clamp(0.75rem,2dvh,0.875rem)] font-medium text-neutral-700 sm:w-auto sm:max-w-none">
          <CalendarDays className="size-[clamp(1rem,3dvh,1.25rem)] shrink-0 text-primary-600" aria-hidden="true" />
          <span className="block min-w-0 truncate">{meetingPath}</span>
        </div>
      </nav>
    </header>
  )
}
