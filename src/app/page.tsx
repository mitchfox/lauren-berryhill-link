'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { AmazonIcon, InstagramIcon } from '@/components/SocialIcons'
import { Racing_Sans_One } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import { SiGoogleclassroom, SiNeutralinojs } from 'react-icons/si'
import { FaGlobe } from 'react-icons/fa'
import { CgShoppingBag } from 'react-icons/cg'
import { HiOutlineMail } from 'react-icons/hi'
import { LuMail } from "react-icons/lu";

import Profile from '../images/photos/profile.jpg'
import { GiLeafSwirl, GiLipstick, GiShadowFollower } from "react-icons/gi";
import { FaBookOpen, FaPercentage } from 'react-icons/fa'
import { CgGym } from 'react-icons/cg'
import WithMeLogo from '../images/logos/WithMeLogo.svg'
import Link_Thumbnail from '../images/photos/link_thumbnail.jpeg'
import Hungry_Root from '../images/photos/hungry_root.webp'
import Wild_Body from '../images/photos/wild_body.webp'
import Soul_CBD from '../images/photos/soul_cbd.webp'
import Coffee_Img from '../images/photos/coffee_img.webp'
import Logo from '../images/photos/logo.png'
import Amazon from '../images/photos/amazon.jpg'
import LogoTransparent from '../images/photos/logo-transparent.png'
import CoachingApplication from '../images/photos/coachingapplication.png'
import Macro from '../images/photos/macro.png'


const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 transform p-1 transition-transform hover:scale-110"
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 text-[#EC6C6B] transition group-hover:text-[#EC6C6B]/80" />
    </Link>
  )
}

function LinkBox({
  icon: Icon,
  title,
  href,
  image,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  href: string
  image?: string | null
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl border border-[#FFD4D4] bg-white/95 p-4 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/90"
    >
      <div className="flex flex-1 items-center gap-4">
        {image ? (
          <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : Icon && (
          <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl bg-[#FFD4D4]/10 p-2">
            <Icon className="h-6 w-6 text-[#EC6C6B] transition group-hover:text-[#EC6C6B]/80" />
          </div>
        )}
        <div className="text-left">
          <h2
            className="pr-6 text-sm font-bold text-[#222222]"
            style={{
              textTransform: 'uppercase',
              lineHeight: '1.4',
              letterSpacing: '0.02em'
            }}
          >
            {title}
          </h2>
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-[#EC6C6B] transition group-hover:text-[#EC6C6B]/80"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  )
}

export default function Home() {
  const socialLinks = [
    {
      href: 'https://www.instagram.com/keto_coach_lauren/#',
      icon: InstagramIcon,
    },
    {
      href: 'https://keto-coach-lauren-f212.mykajabi.com/subscribe-to-keto-coach-lauren',
      icon: LuMail,
    },
  ]

  const linksData = [
    {
      title: 'Join me on WithMe',
      href: 'https://withme.so/Ketocoachlauren',
      image: 'https://openaccessimages.s3.eu-west-2.amazonaws.com/storefront-images/social-imgs/withmelogo.png',
    },
    {
      title: 'Personal Website',
      href: 'https://www.ketocoachlauren.com/',
      image: Logo.src,
      icon: FaGlobe
    },
    {
      title: '1:1 Coaching Application',
      href: 'https://ketocoachlauren.typeform.com/applyhere',
      image: CoachingApplication.src,
      icon: SiGoogleclassroom
    },
    {
      title: 'Subscribe To My Email List',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/subscribe-to-keto-coach-lauren',
      image: null,
      icon: LuMail
    },
    {
      title: "P'TULA: Code KETOCOACH",
      href: 'https://www.ptula.com/?dt_id=2179911',
      image: null,
      icon: CgShoppingBag
    },
    {
      title: 'Bowmar Nutrition: Code KETOCOACH',
      href: 'https://bowmarnutrition.com/?rfsn=5820563.5d12361',
      image: null,
      icon: SiNeutralinojs
    },
    {
      title: 'Amazon Store Front',
      href: 'https://www.amazon.com/shop/keto_coach_lauren?ref_=cm_sw_r_cp_ud_aipsfshop_NT4AJG2TH23K5R73PXFR',
      image: Amazon.src,
      icon: AmazonIcon,
    },
  ]

  return (
    <>
      <Container className="flex-1 bg-[#FFD4D4] pb-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30dvh] sm:hidden"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(255, 212, 212, 0) 0%, rgba(255, 212, 212, 0.8) 50%, rgba(255, 212, 212, 0.95) 75%, rgb(255, 212, 212) 100%)',
                }}
              />
              <div className="mx-auto h-[50dvh] sm:mt-12 sm:h-48 sm:w-40 md:h-72 md:w-64">
                <img
                  src={Profile.src}
                  alt="Keto Coach Lauren"
                  className="h-full w-full object-cover object-top sm:rounded-3xl"
                />
              </div>
            </div>

            <div className="relative z-30">
                <span></span>

              <h1
                className={`${racingSansOne.className} -mt-16 mb-4 text-4xl leading-none text-[#222222] sm:mt-6 sm:text-5xl`}
              >
                Keto Coach Lauren
              </h1>
              <p className="mb-8 px-6 text-sm font-medium text-[#222222]">
                Certified Nutrition Coach & CPT. Explore all my links below.
              </p>

              <div className="mb-12 flex justify-center gap-6">
                {socialLinks.map(({ href, icon: Icon }) => (
                  <SocialLink key={href} href={href} icon={Icon} />
                ))}
              </div>

              <div className="space-y-4 px-8">
                {linksData.map(({ title, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    href={href}
                    image={image}
                    icon={icon}
                  />
                ))}
              </div>
              <FreeTrialBanner />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
