export type IconName =
  | 'calendar'
  | 'clipboard'
  | 'image'
  | 'palette'
  | 'pen'
  | 'pencil'
  | 'sparkles'
  | 'target'
  | 'text'
  | 'shirt'
  | 'users'

export type InfoItem = {
  icon: IconName
  text: string
}

export type Meeting = {
  slug: string
  title: string
  duration: string
  description: string
  cta: string
  icon: IconName
}

export type SocialLinks = {
  linkedinLabel: string
  linkedinUrl: string
  websiteLabel: string
  websiteUrl: string
  email: string
  whatsapp: string
}

export type Profile = {
  slug: string
  name: string
  role: string
  location?: string
  image: string
  imagePosition?: string
  bio: InfoItem[]
  meetings: Meeting[]
  socials: SocialLinks
}
