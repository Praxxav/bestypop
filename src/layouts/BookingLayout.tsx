import { Navbar } from '../components/Navbar'
import type { Profile } from '../data/profileTypes'

type BookingLayoutProps = {
  children: React.ReactNode
  profile?: Profile
}

export function BookingLayout({ children, profile }: BookingLayoutProps) {
  const meetingPath = profile ? `meet.bestypop.com/${profile.slug}` : 'meet.bestypop.com'

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden font-sans text-neutral-900 antialiased">
      <Navbar meetingPath={meetingPath} />
      <div className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
}
