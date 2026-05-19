import { useEffect } from 'react'
import { useParams } from 'react-router'
import { BookingCard } from '../components/BookingCard'
import { Footer } from '../components/Footer'
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
      <main className="pb-16 pt-6">
        <HeroSection profile={profile} />
        <InfoSection items={profile.bio} />

        <section
          className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-5 pt-10 sm:px-8 lg:px-10"
          aria-label="Available meetings"
        >
          {profile.meetings.map((meeting) => (
            <BookingCard key={meeting.slug} meeting={meeting} profileSlug={profile.slug} />
          ))}
        </section>
      </main>

      <Footer socials={profile.socials} />
    </BookingLayout>
  )
}
