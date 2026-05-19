import { Navbar } from '../components/Navbar'
import type { Profile } from '../data/profileTypes'

type BookingLayoutProps = {
  children: React.ReactNode
  profile?: Profile
}

export function BookingLayout({ children, profile }: BookingLayoutProps) {
  const meetingPath = profile ? `meet.bestypop.com/${profile.slug}` : 'meet.bestypop.com'

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-50 font-sans text-neutral-900 antialiased">
      <Navbar meetingPath={meetingPath} />
      {children}
    </div>
  )
}
