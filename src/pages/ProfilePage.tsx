import { useEffect } from 'react'
import { useParams } from 'react-router'
import { MdCheckroom, MdFactory, MdInventory2, MdPeople } from 'react-icons/md'
import { FiLinkedin, FiGlobe, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { BookingCard } from '../components/BookingCard'
import { HeroSection } from '../components/HeroSection'
import { InfoSection } from '../components/InfoSection'
import { getProfileBySlug } from '../data/profiles'
import { BookingLayout } from '../layouts/BookingLayout'

function upsertMetaDescription(content: string) {
  const selector = 'meta[name="description"]'
  let meta = document.querySelector<HTMLMetaElement>(selector)

  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.append(meta)
  }

  meta.content = content
}

export function ProfilePage() {
  const { slug } = useParams()
  const profile = getProfileBySlug(slug)

  useEffect(() => {
    if (!profile) {
      document.title = 'Profile Not Found | BestyPop™'
      upsertMetaDescription('The requested BestyPop meeting profile could not be found.')
      return
    }

    document.title = `${profile.name} | Book a Meeting | BestyPop™`
    upsertMetaDescription(`Book a meeting with ${profile.name}, ${profile.role}.`)
  }, [profile])

  if (!profile) {
    return (
      <BookingLayout>
        <main className="mx-auto flex min-h-[72vh] w-full max-w-3xl flex-col items-center justify-center px-5 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-primary-600">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal text-neutral-900 sm:text-5xl">
            Meeting profile not found
          </h1>
          <p className="mt-5 max-w-xl text-lg font-normal leading-8 text-neutral-600">
            The BestyPop profile you are looking for is not available. Use the main meeting page to continue.
          </p>
          <a
            href="/jineesh-mathew"
            className="mt-8 inline-flex rounded-xl bg-primary-700 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-800 hover:shadow-xl"
          >
            View BestyPop profiles
          </a>
        </main>
      </BookingLayout>
    )
  }

  return (
    <BookingLayout profile={profile}>
      <main className="mx-auto flex h-full w-full max-w-4xl flex-1 flex-col items-center overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
        {/* Hero Section */}
        <div className="w-full shrink-0">
          <HeroSection profile={profile} />
        </div>

        {/* Info Section */}
        <div className="w-full shrink-0 overflow-y-auto flex-1">
          <InfoSection items={profile.bio} />

          {/* Stats Section - Compact */}
          <section className="my-3 w-full">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              <div className="flex flex-col items-center gap-2 rounded-lg bg-white/50 p-3 text-center backdrop-blur-sm">
                <MdCheckroom className="size-6 text-purple-600" />
                <p className="text-sm font-bold text-neutral-900">100+</p>
                <p className="text-xs text-neutral-600">Apparel</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg bg-white/50 p-3 text-center backdrop-blur-sm">
                <MdFactory className="size-6 text-purple-600" />
                <p className="text-sm font-bold text-neutral-900">Tiruppur</p>
                <p className="text-xs text-neutral-600">Manufacturing</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg bg-white/50 p-3 text-center backdrop-blur-sm">
                <MdInventory2 className="size-6 text-purple-600" />
                <p className="text-sm font-bold text-neutral-900">POD & Bulk</p>
                <p className="text-xs text-neutral-600">Production</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg bg-white/50 p-3 text-center backdrop-blur-sm">
                <MdPeople className="size-6 text-purple-600" />
                <p className="text-sm font-bold text-neutral-900">500+</p>
                <p className="text-xs text-neutral-600">Brands & Creators</p>
              </div>
            </div>
          </section>


          {/* Booking Cards - Compact */}
          <section
            className="my-2 w-full flex shrink-0 flex-col items-center justify-center gap-2"
            aria-label="Available meetings"
          >
            {profile.meetings.map((meeting) => (
              <BookingCard key={meeting.slug} meeting={meeting} profileSlug={profile.slug} />
            ))}
          </section>

          {/* Footer - Compact */}
          <footer className="mt-2 w-full shrink-0 border-t border-neutral-200 px-2 py-2">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-neutral-600">
              <a
                href={profile.socials.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-neutral-900"
              >
                <FiLinkedin className="size-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={profile.socials.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-neutral-900"
              >
                <FiGlobe className="size-4" />
                <span className="hidden sm:inline">Website</span>
              </a>
              <a
                href={`https://wa.me/919999999999`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-neutral-900"
              >
                <FaWhatsapp className="size-4 text-green-500" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="flex items-center gap-1 transition-colors hover:text-neutral-900"
              >
                <FiMail className="size-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
            <p className="mt-2 text-center text-xs text-neutral-500">© 2026 BestyPop™. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </BookingLayout>
  )
}
