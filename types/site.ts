import type { LucideIcon } from "lucide-react";

// ─── Booking ───────────────────────────────────────────────
export type BookingProvider = "whatsapp" | "calendly" | "custom" | "phone";

export interface BookingConfig {
  provider: BookingProvider;
  /** Phone number for WhatsApp or phone call */
  phone?: string;
  /** Full URL for Calendly or custom booking page */
  url?: string;
  /** Text shown on booking buttons */
  buttonText: string;
}

// ─── Social Links ──────────────────────────────────────────
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  whatsapp?: string;
}

// ─── Business ──────────────────────────────────────────────
export interface BusinessInfo {
  businessName: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  mission: string;
  vision: string;
  foundedYear: number;
  experienceYears: string;
  rating: string;
  clientsServed: string;
  projectsCompleted: string;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
  address: string;
  googleMapEmbed: string;
  googleMapCoordinates: {
    lat: number;
    lng: number;
  };
  openingHours: {
    weekdays: string;
    weekend: string;
  };
  socialLinks: SocialLinks;
}

// ─── SEO ───────────────────────────────────────────────────
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  openGraphImage?: string;
  favicon?: string;
  schemaType: string;
}

// ─── Branding ──────────────────────────────────────────────
export interface BrandingConfig {
  logo: string;
  logoDark?: string;
  logoLight?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  mutedColor: string;
  borderColor: string;
  successColor: string;
  errorColor: string;
}

// ─── Typography ────────────────────────────────────────────
export interface TypographyConfig {
  headingFont: string;
  bodyFont: string;
  buttonRadius: string;
  cardRadius: string;
  sectionSpacing: string;
  containerWidth: string;
}

// ─── Navigation ────────────────────────────────────────────
export interface NavItem {
  title: string;
  href: string;
  visible: boolean;
}

// ─── CTA ───────────────────────────────────────────────────
export interface CTAConfig {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

// ─── Hero ──────────────────────────────────────────────────
export interface HeroConfig {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

// ─── About ─────────────────────────────────────────────────
export interface AboutFeature {
  title: string;
  description: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutConfig {
  heading: string;
  subHeading: string;
  story: string;
  image: string;
  features: AboutFeature[];
  statistics: AboutStat[];
  timeline?: TimelineItem[];
}

// ─── Services ──────────────────────────────────────────────
export interface ServiceItem {
  title: string;
  description: string;
  price?: string;
  duration?: string;
  featured?: boolean;
  image?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  image?: string;
  services: ServiceItem[];
}

// ─── Gallery ───────────────────────────────────────────────
export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface GalleryConfig {
  categories: string[];
  images: GalleryImage[];
}

// ─── Before & After ────────────────────────────────────────
export interface BeforeAfterItem {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

// ─── Team ──────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  designation: string;
  bio?: string;
  image: string;
  socialLinks?: SocialLinks;
}

// ─── Testimonials ──────────────────────────────────────────
export interface Testimonial {
  author: string;
  designation: string;
  image: string;
  rating: number;
  review: string;
}

// ─── FAQ ───────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

// ─── Contact ───────────────────────────────────────────────
export interface ContactCard {
  icon: LucideIcon;
  title: string;
  details: string[];
}

export interface ContactConfig {
  heading: string;
  subHeading: string;
  description: string;
  cards: ContactCard[];
  showMap: boolean;
}

// ─── Footer ────────────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  description: string;
  quickLinks: FooterLink[];
  servicesLinks: FooterLink[];
  legalLinks: FooterLink[];
  copyright: string;
}

// ─── Stats ─────────────────────────────────────────────────
export interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

// ─── Features (section toggles) ────────────────────────────
export interface FeaturesConfig {
  showHero: boolean;
  showTrustStrip: boolean;
  showServices: boolean;
  showAbout: boolean;
  showVideo: boolean;
  showBeforeAfter: boolean;
  showTestimonials: boolean;
  showGallery: boolean;
  showTeam: boolean;
  showFAQ: boolean;
  showCTA: boolean;
  showCounters: boolean;
  showMap: boolean;
  showNewsletter: boolean;
  showBlogs: boolean;
  showPartners: boolean;
  showAwards: boolean;
  showInstagramFeed: boolean;
  showPricing: boolean;
}

// ─── Theme ─────────────────────────────────────────────────
export interface ThemeConfig {
  animationSpeed: "slow" | "normal" | "fast";
  buttonStyle: "pill" | "rounded" | "sharp";
  borderRadius: string;
  shadowStyle: "sm" | "md" | "lg" | "xl";
  glassmorphism: boolean;
  gradientUsage: boolean;
  cardStyle: "elevated" | "outlined" | "minimal";
}

// ─── Media ─────────────────────────────────────────────────
export interface MediaConfig {
  hero: string;
  about: string;
  logo: string;
  favicon: string;
  services: string[];
  gallery: string[];
  team: string[];
  video?: string;
  videoPoster?: string;
}

// ─── Section Texts (all UI strings) ────────────────────────
export interface SectionTexts {
  beforeAfter: {
    eyebrow: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
  };
  videoIntro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    ariaLabel: string;
    badgeText: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    prevAriaLabel: string;
    nextAriaLabel: string;
  };
  faq: {
    title: string;
    subtitle: string;
    footerText: string;
  };
  contactForm: {
    successTitle: string;
    successMessage: string;
    sendAnotherText: string;
    fields: {
      name: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    submitButtonText: string;
  };
  footer: {
    quickLinksTitle: string;
    visitUsTitle: string;
    hoursTitle: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    closeAriaLabel: string;
    prevAriaLabel: string;
    nextAriaLabel: string;
  };
  home: {
    trustStrip: {
      googleReviewsText: string;
      locationText: string;
    };
    servicesPreview: {
      eyebrow: string;
      title: string;
      subtitle: string;
      viewAllText: string;
    };
    aboutTeaser: {
      badge: string;
      title: string;
      description: string;
      discoverStoryText: string;
      aboutImageAlt: string;
    };
  };
  about: {
    experienceBadgeLabel: string;
    missionTitle: string;
    visionTitle: string;
    team: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { label: string }[];
  };
  contact: {
    formEyebrow: string;
    formTitle: string;
  };
  serviceCard: {
    startingFromText: string;
  };
  header: {
    openMenuAriaLabel: string;
    closeMenuAriaLabel: string;
  };
  videoModal: {
    closeAriaLabel: string;
  };
  hero: {
    backgroundImageAlt: string;
    heroImageAlt: string;
  };
}

// ─── Root Site Config ──────────────────────────────────────
export interface SiteConfig {
  businessType: string;
  business: BusinessInfo;
  seo: SEOConfig;
  branding: BrandingConfig;
  typography: TypographyConfig;
  navigation: NavItem[];
  hero: HeroConfig;
  about: AboutConfig;
  services: ServiceCategory[];
  gallery: GalleryConfig;
  beforeAfter: BeforeAfterItem[];
  team: TeamMember[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  contact: ContactConfig;
  footer: FooterConfig;
  cta: CTAConfig;
  stats: StatItem[];
  features: FeaturesConfig;
  theme: ThemeConfig;
  media: MediaConfig;
  booking: BookingConfig;
  sections: SectionTexts;
}
