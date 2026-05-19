import abhiramiImage from '../assets/profiles/abhirami-a.png'
import arunImage from '../assets/profiles/arun-menon.png'
import jineeshImage from '../assets/profiles/jineesh-mathew.png'
import rathipriyaImage from '../assets/profiles/rathipriya-d.png'
import type { Profile } from './profileTypes'

export const profiles: Profile[] = [
  {
    slug: 'jineesh-mathew',
    name: 'Jineesh Mathew',
    role: 'Co-Founder, BestyPop™',
    image: jineeshImage,
    bio: [
      {
        icon: 'shirt',
        text: 'BestyPop™ is a Tiruppur-based apparel manufacturing and customization company supporting brands, businesses, creators, and organizations through premium knitwear production and scalable merchandise solutions.',
      },
      {
        icon: 'users',
        text: 'Serving startups, communities, creators, and businesses with customized apparel, on-demand manufacturing, and long-term production support.',
      },
    ],
    meetings: [
      {
        slug: 'quick-connect',
        title: 'Quick Connect',
        duration: '15 min',
        description: 'Ideal for introductions, partnership inquiries, and general business discussions.',
        cta: 'Schedule Meeting',
        icon: 'users',
      },
      {
        slug: 'strategic-discussion',
        title: 'Strategic Discussion',
        duration: '30 min',
        description:
          'For detailed discussions related to manufacturing partnerships, custom apparel programs, merchandise execution, and long-term collaboration opportunities.',
        cta: 'Schedule Meeting',
        icon: 'target',
      },
    ],
    socials: {
      linkedinLabel: 'linkedin.com/in/jineeshmathew',
      linkedinUrl: 'https://www.linkedin.com/in/jineeshmathew999',
      websiteLabel: 'bestypop.com',
      websiteUrl: 'https://bestypop.com',
      email: 'jineesh.mathew@bestypop.com',
    },
  },
  {
    slug: 'rathipriya-d',
    name: 'Rathipriya D',
    role: 'Graphic Designer, BestyPop™',
    image: rathipriyaImage,
    bio: [
      {
        icon: 'pen',
        text: 'Designing creative and print-ready graphics for POD and customization projects across a wide range of apparel and merchandise.',
      },
      {
        icon: 'shirt',
        text: 'Specialized in artwork creation, mockups, logo placements, and visual customization to bring ideas to life.',
      },
      {
        icon: 'pencil',
        text: 'Passionate about design quality, brand consistency, and delivering impactful visuals that enhance customer experience.',
      },
    ],
    meetings: [
      {
        slug: 'design-connect',
        title: 'Design Connect',
        duration: '15 min',
        description: 'For discussions related to design requests, customization artwork, mockups, and creative support.',
        cta: 'Book Meeting',
        icon: 'calendar',
      },
    ],
    socials: {
      linkedinLabel: 'linkedin.com/in/rathipriya-d',
      linkedinUrl: 'https://linkedin.com/in/rathipriya-d',
      websiteLabel: 'bestypop.com',
      websiteUrl: 'https://bestypop.com',
      email: 'hello@bestypop.com',
    },
  },
  {
    slug: 'abhirami-a',
    name: 'Abhirami A',
    role: 'Graphic Designer, BestyPop™',
    image: abhiramiImage,
    bio: [
      {
        icon: 'palette',
        text: 'Supporting apparel customization, print-ready artwork creation, mockup preparation, and creative design workflows for BestyPop™.',
      },
      {
        icon: 'shirt',
        text: 'Focused on POD-ready graphics, logo placements, apparel visuals, and customization support across multiple products and brands.',
      },
    ],
    meetings: [
      {
        slug: 'creative-connect',
        title: 'Creative Connect',
        duration: '15 min',
        description:
          'For discussions related to apparel designs, customization artwork, print concepts, mockup support, and creative coordination.',
        cta: 'Book Meeting',
        icon: 'pencil',
      },
    ],
    socials: {
      linkedinLabel: 'linkedin.com/in/abhirami-a',
      linkedinUrl: 'https://linkedin.com/in/abhirami-a',
      websiteLabel: 'bestypop.com',
      websiteUrl: 'https://bestypop.com',
      email: 'hello@bestypop.com',
    },
  },
  {
    slug: 'arun-menon',
    name: 'Arun Mukunda Menon',
    role: 'Head of Operations, BestyPop™',
    image: arunImage,
    bio: [
      {
        icon: 'clipboard',
        text: 'Head of Operations at BestyPop™, focused on driving efficient production, seamless order execution, and operational excellence across our manufacturing and fulfillment processes.',
      },
      {
        icon: 'sparkles',
        text: 'Committed to streamlining workflows, ensuring quality, and delivering a smooth experience at every stage.',
      },
    ],
    meetings: [
      {
        slug: 'operations-connect',
        title: 'Operations Connect',
        duration: '15 min',
        description:
          'For discussions related to production coordination, operational support, order execution, and general business inquiries.',
        cta: 'Book Meeting',
        icon: 'clipboard',
      },
    ],
    socials: {
      linkedinLabel: 'linkedin.com/in/arun-menon',
      linkedinUrl: 'https://linkedin.com/in/arun-menon',
      websiteLabel: 'bestypop.com',
      websiteUrl: 'https://bestypop.com',
      email: 'arun.menon@bestypop.com',
    },
  },
]

export function getProfileBySlug(slug: string | undefined) {
  return profiles.find((profile) => profile.slug === slug)
}
