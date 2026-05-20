import { useEffect } from 'react'
import { useParams } from 'react-router'
import { MdCheckroom, MdFactory, MdInventory2, MdPeople } from 'react-icons/md'
import { FiLinkedin, FiGlobe, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaHeart } from 'react-icons/fa'
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
      <main className="mx-auto flex h-full w-full max-w-4xl flex-1 flex-col items-center overflow-y-auto px-2 py-0.5 sm:px-3 sm:py-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Hero Section */}
        <div className="w-full shrink-0">
          <HeroSection profile={profile} />
        </div>

        {/* Info Section */}
        <div className="w-full shrink-0">
          <InfoSection items={profile.bio} />
        </div>

        {/* Stats Section */}
        <section className="w-full shrink-0">
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-1.5">
            <div className="flex flex-col items-center gap-1 rounded-lg bg-white/60 p-1.5 text-center backdrop-blur-sm">
              <MdCheckroom className="size-4 text-purple-600 sm:size-5" />
              <p className="text-[0.7rem] font-bold text-neutral-900 sm:text-[0.75rem]">30+</p>
              <p className="text-[0.55rem] text-neutral-600 sm:text-[0.6rem]">Apparel Styles</p>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-white/60 p-1.5 text-center backdrop-blur-sm">
              <MdFactory className="size-4 text-purple-600 sm:size-5" />
              <p className="text-[0.7rem] font-bold text-neutral-900 sm:text-[0.75rem]">Tiruppur</p>
              <p className="text-[0.55rem] text-neutral-600 sm:text-[0.6rem]">Manufacturing</p>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-white/60 p-1.5 text-center backdrop-blur-sm">
              <MdInventory2 className="size-4 text-purple-600 sm:size-5" />
              <p className="text-[0.7rem] font-bold text-neutral-900 sm:text-[0.75rem]">POD ,Bulk & Single Piece Customization</p>
              <p className="text-[0.55rem] text-neutral-600 sm:text-[0.6rem]">Production</p>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-white/60 p-1.5 text-center backdrop-blur-sm">
              <MdPeople className="size-4 text-purple-600 sm:size-5" />
              <p className="text-[0.7rem] font-bold text-neutral-900 sm:text-[0.75rem]">100+</p>
              <p className="text-[0.55rem] text-neutral-600 sm:text-[0.6rem]">Brands & Creators</p>
            </div>
          </div>
        </section>

        {/* Booking Cards */}
        <section
          className="mt-0.5 sm:mt-1 w-full shrink-0 flex flex-col items-center justify-center gap-1"
          aria-label="Available meetings"
        >
          {profile.meetings.map((meeting) => (
            <BookingCard key={meeting.slug} meeting={meeting} profileSlug={profile.slug} />
          ))}
        </section>

        {/* Footer */}
        <footer className="w-full shrink-0 pb-6 pt-1 px-2 sm:px-3 sm:pb-8 mt-1">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[0.7rem] sm:text-xs font-medium text-neutral-600">
            <a
              href={profile.socials.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
            >
              <span className="flex size-[14px] sm:size-4 items-center justify-center rounded-sm bg-[#6b46c1] text-[8px] sm:text-[10px] font-bold text-white">in</span>
              <span>LinkedIn</span>
            </a>
            <span className="text-neutral-300">|</span>
            <a
              href={profile.socials.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
            >
              <FiGlobe className="size-[14px] sm:size-4 text-[#6b46c1]" />
              <span>Website</span>
            </a>
            <span className="text-neutral-300">|</span>
            <a
              href={`https://wa.me/${profile.socials.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
            >
              <FaWhatsapp className="size-[14px] sm:size-4 text-green-500" />
              <span>WhatsApp</span>
            </a>
            <span className="text-neutral-300">|</span>
            <a
              href={`mailto:${profile.socials.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
            >
              <FiMail className="size-[14px] sm:size-4 text-[#6b46c1]" />
              <span>Email</span>
            </a>
          </div>
          
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-[0.65rem] sm:text-xs text-neutral-500">
            <div className="flex items-center gap-1.5 font-bold text-neutral-900">
              <FaHeart className="text-[#6b46c1]" />
              <span>BestyPop™</span>
            </div>
            <span className="text-neutral-300">|</span>
            <span>Custom Apparel. Scalable Impact.</span>
          </div>
        </footer>
      </main>
    </BookingLayout>
  )
}
