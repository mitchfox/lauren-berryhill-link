'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { AmazonIcon, InstagramIcon } from '@/components/SocialIcons'
import { Satisfy } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import Leto_Coach from '../images/photos/leto_coach_img.jpg'
import Marco_Tracking from '../images/photos/marco_tracking.webp'
import Red_Light from '../images/photos/red_light.webp'
import Link_Thumbnail from '../images/photos/link_thumbnail.jpeg'
import Hungry_Root from '../images/photos/hungry_root.webp'
import Wild_Body from '../images/photos/wild_body.webp'
import Soul_CBD from '../images/photos/soul_cbd.webp'
import Coffee_Img from '../images/photos/coffee_img.webp'
import { SiGoogleclassroom, SiNeutralinojs, SiTarget } from 'react-icons/si'
import { GiLeafSwirl, GiLipstick, GiShadowFollower } from "react-icons/gi";
import { FaBookOpen, FaGlobe, FaPercentage } from 'react-icons/fa'
import { CgGym, CgMail, CgShoppingBag, CgShoppingCart } from 'react-icons/cg'
import WithMeLogo from '../images/logos/WithMeLogo.svg'

const satisfy = Satisfy({
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
      <Icon className="h-6 w-6 fill-white transition group-hover:fill-white/80" />
    </Link>
  )
}

function LinkBox({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  href: string
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
    >
      <div className="flex flex-1 items-center gap-4">
        {image ? (
          <div className="aspect-square h-12 w-12 min-w-[3rem] overflow-hidden rounded-xl">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ) : (
          Icon && (
            <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl bg-white/5 p-2">
              <Icon className="h-6 w-6 text-white" />
            </div>
          )
        )}
        <div className="text-left">
          <h2 className="pr-6 text-xs font-medium text-white">{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-white/80">{description}</p>
          )}
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-white/70"
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
    // {
    //   href: 'https://www.tiktok.com/@marfskitchengarden',
    //   icon: TikTokIcon,
    // },
    // {
    //   href: 'https://youtube.com/@marfskitchengarden?si=e0belEEwRKq8rbEv',
    //   icon: YouTubeIcon,
    // },
    // {
    //   href: 'https://www.facebook.com/MarfsKitchen/',
    //   icon: FacebookIcon,
    // },
  ]

  const linksData = [
    {
      title: 'Home Gym Convertible Barbell',
      description: '',
      href: 'https://www.penguin.co.uk/books/463153/give-it-a-grow-by-swales-martha/9780241710364',
      image: null,
      icon: CgGym,
    },
    {
      title: 'Half Off Macro Tracking 101',
      description: '',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/offers/Xo8VSffu/checkout',
      image: Marco_Tracking,
      icon: null,
    },
    {
      title: '1:1 Coaching Application',
      description: '',
      href: 'https://ketocoachlauren.typeform.com/applyhere',
      image: null,
      icon: SiGoogleclassroom,
    },
    {
      title: 'Summer Sculpt',
      description: '',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/offers/j5pgMrYY?coupon_code=SUMMERSCULPT10',
      image: Marco_Tracking,
      icon: null,
    },
    {
      title: 'Sauna + Red Light',
      description: '',
      href: 'https://urlgeni.us/amazon/Lj5qA',
      image: Red_Light,
      icon: null,
    },
    {
      title: 'WithMe Coaching',
      description: 'Certified Personal Trainer, Nutrition & Weightloss Coac',
      href: 'https://withme.so/ketocoachlauren',
      image: WithMeLogo,
      icon: null,
    },
    {
      title: 'Voloom code LAUREN',
      description: '',
      href: 'https://glnk.io/jmov/lauren6si',
      image: null,
      icon: CgShoppingCart,
    },
    {
      title: '15% off hormone test',
      description: '',
      href: 'https://refer.everlywell.com/s/ketocoachlauren',
      image: null,
      icon: FaPercentage,
    },
    {
      title: 'Carry On Bag',
      description: '',
      href: 'https://luxemegabag.com/products/luxe-mega-bag-all-in-1-travel-bag',
      image: null,
      icon: CgShoppingBag,
    },
    {
      title: 'Hair Faves',
      description: '',
      href: 'https://urlgeni.us/amazon/ApgHs',
      image: Link_Thumbnail,
      icon: null,
    },
    {
      title: 'Magnetic Lashes',
      description: '',
      href: 'https://urlgeni.us/amazon/4wn15',
      image: Link_Thumbnail,
      icon: null,
    },
    {
      title: 'Hungryroot | code KETOCOACHLAUREN ',
      description: '',
      href: 'https://www.hungryroot.com/?promo=KETOCOACHLAUREN&b=483&utm_source=keto-coach-lauren&utm_medium=influencer&utm_campaign=reels',
      image: Hungry_Root,
      icon: null,
    },
    {
      title: 'Target Activewear',
      description: '',
      href: 'https://liketk.it/547Fn',
      image: null,
      icon: SiTarget,
    },
    {
      title: 'Coffee Essentials',
      href: 'https://urlgeni.us/amazon/3Zjv',
      image: Link_Thumbnail,
      icon: null,
    },
    {
      title: 'P’Tula- code KETOCOACH',
      href: 'https://www.ptula.com/KETOCOACH',
      image: null,
      icon: CgShoppingBag,
    },
    {
      title: 'Weighted Vest',
      href: 'https://urlgeni.us/amzn/pOPW',
      image: null,
      icon: AmazonIcon,
    },
    {
      title: 'MELT- code KETOCOACH',
      href: 'https://bowmarnutrition.com/products/melt?rfsn=5820563.5d12361&_pos=1&_psq=melt&_ss=e&_v=1.0&utm_source=refersion&utm_medium=affiliate&utm_campaign=5820563.5d12361',
      image: null,
      icon: SiNeutralinojs,
    },
    {
      title: 'Hungryroot- code KETOCOACHLAUREN',
      href: 'https://www.hungryroot.com/?promo=KETOCOACHLAUREN&b=483&utm_source=keto-coach-lauren&utm_medium=influencer&utm_campaign=reels',
      image: Hungry_Root,
      icon: null
    },
    {
      title: 'Hormone Test',
      href: 'https://refer.everlywell.com/2gtnh!367663e852!a',
      image: null,
      icon: CgShoppingCart,
    },
    {
      title: 'At Home Nails',
      href: 'https://urlgeni.us/amazon/MwWNr',
      image: Link_Thumbnail,
      icon: null,
    },
    {
      title: 'Wild Bodycare code KETOCOACHLAUREN',
      href: 'https://www.wearewild.com/us/?discount=KETOCOACHLAUREN&utm_source=instagram&utm_medium=influencer&utm_campaign=ketocaoachlauren-2&utm_content=standard-1',
      image: Wild_Body,
      icon: null,
    },
    {
      title: 'Soul CBD code KETOCOACHLAUREN',
      href: 'https://www.getsoul.com/discount/KETOCOACHLAUREN?redirect=/products/',
      image: Soul_CBD,
      icon: null
    },
    {
      title: 'Red light/Weighted Vest/Vibe plate',
      href: 'https://liketk.it/51xz5',
      image: Red_Light,
      icon: null
    },
    {
      title: 'Olive Rose Makeup',
      href: 'https://us.olivetreepeople.com/collections/olive-rose?referral=laurenberryhill',
      image: null,
      icon: GiLipstick
    },
    {
      title: 'My Skincare',
      href: 'https://us.olivetreepeople.com/pages/olive-brain-regime?referral=laurenberryhill',
      image: null,
      icon: GiLeafSwirl
    },
    {
      title: 'Coffee Bar Essentials',
      href: 'https://liketk.it/4Zfiw',
      image: Coffee_Img,
      icon: null
    },
    {
      title: 'InBody USA Composition Scale',
      href: 'https://shop.inbodyusa.com/collections/at-home-body-composition-scale?aff=81',
      image: null,
      icon: CgShoppingBag
    },
    {
      title: 'Weighted Vest',
      href: 'https://urlgeni.us/amzn/pOPW',
      image: null,
      icon: AmazonIcon,
    },
    {
      title: 'ULike - code LAUREN130',
      href: 'https://us.ulike.com/4e2IODc',
      image: null,
      icon: CgShoppingBag,
    },
    {
      title: 'Keto Coach Lauren Website',
      href: 'http://www.ketocoachlauren.com/',
      image: null,
      icon: FaGlobe
    },
    {
      title: 'Bowmar Nutrition Code: KETOCOACH',
      href: 'http://bowmarnutrition.com/ketocoachlauren',
      image: null,
      icon: SiNeutralinojs
    },
    {
      title: 'Strategy Sessions',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/offers/LVJAwLrH',
      image: null,
      icon: SiGoogleclassroom
    },
    {
      title: '12 Months Of Workouts',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/offers/aRRAjLdf',
      image: null,
      icon: CgGym
    },
    {
      title: 'Walking Pad',
      href: 'https://www.walkingpad.com/products/walkingpad-c2-foldable-walking-machine?_pos=1&_sid=6cb877e68&_ss=r?variant=40860148727973',
      image: null,
      icon: CgShoppingCart
    },
    {
      title: 'WalkingPad- code KETO_COACH_LAUREN for 30% off',
      href: 'https://www.walkingpad.com/products/walkingpad-c2-foldable-walking-machine?_pos=1&_sid=6cb877e68&_ss=r?variant=40860148727973',
      image: null,
      icon: CgShoppingCart
    },
    {
      title: 'My Amazon Store',
      href: 'https://www.amazon.com/shop/keto_coach_lauren?ref=exp_inf_sh_pub_keto_coach_lauren',
      image: null,
      icon: AmazonIcon
    },
    {
      title: 'Smart Nutrition Sale',
      href: 'https://amzn.to/3UiMOs3',
      image: null,
      icon: AmazonIcon
    },
    {
      title: 'Twinkle Decor Trees',
      href: 'https://amzn.to/3YZrtGY',
      image: null,
      icon: AmazonIcon
    },
    {
      title: 'Comfy Amazon haul',
      href: 'https://amzn.to/4dn6nX0',
      image: null,
      icon: AmazonIcon
    },
    {
      title: 'Pickleball/Golf/Tennis Fits',
      href: 'https://r.amzlink.to/?btn_url=https%3A%2F%2Fwww.amazon.com%2Fvdp%2F07f527d2961e45958c2460eb24b50ef4%3Fref%3Dive_share_mshop_vw-iga&btn_ref=org-433bb393e1b8b503',
      image: Link_Thumbnail,
      icon: null,
    },
    {
      title: 'Real Feel Tree',
      href: 'https://amzn.to/48yme3X',
      image: null,
      icon: AmazonIcon
    },
    {
      title: "Keto Coach Lauren's Amazon Page - Home Organization",
      href: 'https://www.amazon.com/shop/keto_coach_lauren/list/5L2D1VMB8WE8?ref_=aipsflist',
      image: Link_Thumbnail,
      icon: null,
    },
    {
      title: 'Macro Tracking 101 Course',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/offers/joqcTQF9?coupon_code=MACROS101',
      image: null,
      icon: SiGoogleclassroom
    },
    {
      title: 'PARAGON- code LAURENB',
      href: 'https://www.paragonfitwear.com/LAURENB',
      image: null,
      icon: CgShoppingCart
    },
    {
      title: 'KCL Workout Library',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/kcl-workout-library',
      image: null,
      icon: FaBookOpen 
    },
    {
      title: 'Apply For 1:1 Coaching',
      href: 'https://ketocoachlauren.typeform.com/applyhere',
      image: null,
      icon: SiGoogleclassroom
    },
    {
      title: 'Subscribe To My Email List',
      href: 'https://keto-coach-lauren-f212.mykajabi.com/subscribe-to-keto-coach-lauren',
      image: null,
      icon: CgMail
    },
    {
      title: 'Walli Case- code LAUREN',
      href: 'https://wallicases.com/?rstr=2657',
      image: null,
      icon: CgShoppingBag
    },
    {
      title: '7 Day Simple Start Keto Meal Plan',
      href: 'https://www.ketocoachlauren.com/product-page/7-day-simple-start-keto-meal-plan?mc_cid=201e6a7471&mc_eid=UNIQID',
      image: null,
      icon: FaBookOpen
    },
    {
      title: 'LIKEtoKNOWit',
      href: 'https://www.liketoknow.it/Keto_Coach_Lauren',
      image: null,
      icon: GiShadowFollower
    },
    {
      title: 'Rossa Self Tanning code KETOCOACH',
      href: 'https://rossaselftanning.com/?sca_ref=3144455.bMmJ1mhuMR',
      image: null,
      icon: CgShoppingCart
    },
  ]

  return (
    <>
      <Container className="flex-1 bg-zinc-950 pb-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30dvh] bg-gradient-to-b from-transparent via-transparent to-zinc-950 sm:hidden"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.95) 75%, #000000 100%)',
                }}
              />
              <div className="mx-auto h-[40dvh] sm:mt-12 sm:h-48 sm:w-40 md:h-72 md:w-64">
                <img
                  src={Leto_Coach.src}
                  alt="Kimberly"
                  className="h-full w-full object-cover object-top sm:rounded-3xl"
                />
              </div>
            </div>

            <div className="relative z-30">
              <h1
                className={`${satisfy.className} -mt-16 mb-4 text-4xl leading-none text-white sm:mt-6 sm:text-5xl`}
              >
                Keto Coach Lauren
              </h1>
              <p className="mb-8 px-6 text-sm text-white/80">
                All links to my faves, coaching etc
              </p>

              <div className="mb-12 flex justify-center gap-6">
                {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
                {socialLinks.map(({ href, icon: Icon }) => (
                  <SocialLink key={href} href={href} icon={Icon} />
                ))}
              </div>

              <div className="space-y-4 px-4">
                {linksData.map(({ title, description, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    {...(icon ? { icon } : {})}
                    {...(image ? { image: image.src } : {})}
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
