import {
  Scissors,
  Sparkles,
  Hand,
  Heart,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Target,
  Eye,
  Award,
  Users,
  Send,
} from "lucide-react";
import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  // ─── Business Type ───────────────────────────────────────
  businessType: "salon",

  // ─── Business Info ───────────────────────────────────────
  business: {
    businessName: "NJ Beauty Bliss",
    tagline: "Where Beauty Meets Elegance",
    shortDescription:
      "Premium bridal makeup, hair styling, facials & nail care in Johar Town, Lahore.",
    longDescription:
      "NJ Beauty Bliss is a trusted beauty salon in the heart of Johar Town, Lahore, known for its clean, relaxing atmosphere and skilled team of stylists and beauty specialists. From everyday haircare to full bridal makeovers, every client is treated with personal attention and care.",
    mission:
      "To provide every client with a premium beauty experience in a clean, relaxing environment — delivering results that exceed expectations every single time.",
    vision:
      "To be the most loved and trusted beauty salon in Lahore, known for quality service, hygiene, and a genuinely caring approach to every client who walks through our doors.",
    foundedYear: 2020,
    experienceYears: "5+",
    rating: "4.9",
    clientsServed: "1k+",
    projectsCompleted: "20+",
    email: "info@njbeautybliss.com",
    phone: "+92 308 0815888",
    whatsapp: "923080815888",
    website: "https://njbeautybliss.com",
    address: "Block J, Johar Town Phase 2, Lahore, Pakistan",
    googleMapEmbed:
      "https://www.google.com/maps?q=31.473231,74.257807&z=16&output=embed",
    googleMapCoordinates: { lat: 31.473231, lng: 74.257807 },
    openingHours: {
      weekdays: "Monday – Saturday: 10am – 8pm",
      weekend: "Sunday: 12pm – 6pm",
    },
    socialLinks: {
      facebook: "https://www.facebook.com/njbeautybliss1",
      instagram:
        "https://www.instagram.com/nj_beauty_bliss?igsh=c2djNmQ3dWIwaDUy",
      whatsapp: "https://wa.me/923080815888",
    },
  },

  // ─── SEO ─────────────────────────────────────────────────
  seo: {
    title: "NJ Beauty Bliss : Premium Salon in Johar Town, Lahore",
    description:
      "Premium bridal makeup, hair styling, facials & nail care in Johar Town, Lahore. 4.9★ rated salon with a clean, relaxing atmosphere.",
    keywords: [
      "beauty salon lahore",
      "bridal makeup lahore",
      "hair styling johar town",
      "facials lahore",
      "nail care lahore",
      "NJ Beauty Bliss",
    ],
    openGraphImage: "/hero1.png",
    favicon: "/favicon.ico",
    schemaType: "BeautySalon",
  },

  // ─── Branding ────────────────────────────────────────────
  branding: {
    logo: "NJ Beauty Bliss",
    primaryColor: "#E4577B",
    secondaryColor: "#C93F63",
    accentColor: "#F7C6D3",
    backgroundColor: "#FFF9F7",
    surfaceColor: "#FDEEF1",
    textColor: "#262223",
    mutedColor: "#6B6062",
    borderColor: "#F0DCE1",
    successColor: "#25D366",
    errorColor: "#E5484D",
  },

  // ─── Typography ──────────────────────────────────────────
  typography: {
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    buttonRadius: "9999px",
    cardRadius: "1.75rem",
    sectionSpacing: "6rem",
    containerWidth: "80rem",
  },

  // ─── Navigation ──────────────────────────────────────────
  navigation: [
    { title: "Home", href: "/", visible: true },
    { title: "About", href: "/about", visible: true },
    { title: "Services", href: "/services", visible: true },
    { title: "Gallery", href: "/gallery", visible: true },
    { title: "Contact", href: "/contact", visible: true },
  ],

  // ─── Hero ────────────────────────────────────────────────
  hero: {
    badge: "",
    title: "Where Beauty, Meets Elegance.",
    subtitle: "",
    description:
      "Personalised beauty consultations, premium treatments, and a relaxing salon experience designed around you.",
    backgroundImage: "/hero1.png",
    primaryCTA: {
      label: "Book Consultation",
      href: "https://wa.me/923080815888",
    },
    secondaryCTA: {
      label: "Explore Services",
      href: "/services",
    },
  },

  // ─── About ───────────────────────────────────────────────
  about: {
    heading: "Beauty with a Personal Touch",
    subHeading: "Our Story",
    story:
      "NJ Beauty Bliss is a trusted beauty salon in the heart of Johar Town, Lahore, known for its clean, relaxing atmosphere and skilled team of stylists and beauty specialists. From everyday haircare to full bridal makeovers, every client is treated with personal attention and care.",
    image: "/about.jfif",
    features: [
      {
        title: "Personalised Care",
        description:
          "Every treatment is tailored to your unique style and needs.",
      },
      {
        title: "Premium Products",
        description:
          "We use only high-quality, ammonia-free, and skin-friendly products.",
      },
      {
        title: "Expert Team",
        description:
          "Skilled stylists and beauty specialists with years of experience.",
      },
    ],
    statistics: [
      { value: "5+", label: "Years of Excellence" },
      { value: "20+", label: "Beauty Services" },
      { value: "1k+", label: "Happy Clients" },
      { value: "4.9", label: "Average Rating" },
    ],
  },

  // ─── Services ────────────────────────────────────────────
  services: [
    {
      id: "hair",
      title: "Hair Dressing",
      icon: Scissors,
      image: "/about4.jpg",
      services: [
        {
          title: "Hair Cut",
          description:
            "Precision cuts and blowouts tailored to your face shape and lifestyle.",
          price: "Rs. 1,500",
        },
        {
          title: "Hair Coloring",
          description:
            "Global color, highlights, and balayage using premium ammonia-free products.",
          price: "Rs. 3,000",
        },
        {
          title: "Hair Restructure & Protein Treatment",
          description:
            "Deep conditioning and protein therapy to restore softness and strength.",
          price: "Rs. 4,000",
        },
      ],
    },
    {
      id: "skin",
      title: "Skin Care",
      icon: Sparkles,
      image: "/about3.jpg",
      services: [
        {
          title: "Classic Facial",
          description:
            "Cleanse, exfoliate, and hydrate for a refreshed, glowing complexion.",
          price: "Rs. 2,000",
        },
        {
          title: "HydraFacial",
          description:
            "Advanced multi-step treatment that cleanses, extracts, and hydrates deeply.",
          price: "Rs. 5,000",
        },
        {
          title: "Skin Polish",
          description:
            "Gentle exfoliation and brightening to reveal smoother, radiant skin.",
          price: "Rs. 3,500",
        },
      ],
    },
    {
      id: "nails",
      title: "Nails",
      icon: Hand,
      image: "/hero1.png",
      services: [
        {
          title: "Manicure",
          description:
            "Nail shaping and hand massage with a flawless polish finish.",
          price: "Rs. 1,200",
        },
        {
          title: "Pedicure",
          description:
            "Relaxing foot soak, scrub, and care for soft, well-groomed feet.",
          price: "Rs. 1,500",
        },
        {
          title: "Nail Art",
          description:
            "Custom designs, gel extensions, and creative nail art for any occasion.",
          price: "Rs. 2,000",
        },
      ],
    },
    {
      id: "bridal",
      title: "Special Events",
      icon: Heart,
      image: "/hero1.png",
      services: [
        {
          title: "Bridal Makeup",
          description:
            "Full bridal look with premium products, long-lasting, photo-ready.",
          price: "Rs. 15,000",
        },
        {
          title: "Party Makeup",
          description:
            "Glamorous event makeup tailored to your outfit and personality.",
          price: "Rs. 5,000",
        },
        {
          title: "Event Hairstyling",
          description:
            "Elegant updos, curls, and styling for weddings, parties, and special events.",
          price: "Rs. 3,000",
        },
      ],
    },
  ],

  // ─── Gallery ─────────────────────────────────────────────
  gallery: {
    categories: ["All", "Hair", "Skin", "Nails", "Bridal"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop",
        alt: "Salon interior",
        category: "Hair",
        width: 600,
        height: 600,
      },
      {
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop",
        alt: "Facial spa treatment",
        category: "Skin",
        width: 600,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop",
        alt: "Nail care and polish",
        category: "Nails",
        width: 600,
        height: 600,
      },
      {
        src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1d1?w=600&h=800&fit=crop",
        alt: "Bridal makeup",
        category: "Bridal",
        width: 600,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop",
        alt: "Hair styling session",
        category: "Hair",
        width: 600,
        height: 600,
      },
      {
        src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=700&fit=crop",
        alt: "Skin treatment",
        category: "Skin",
        width: 600,
        height: 700,
      },
      {
        src: "https://images.unsplash.com/photo-1632345031435-3757e6a406b5?w=600&h=600&fit=crop",
        alt: "Nail art design",
        category: "Nails",
        width: 600,
        height: 600,
      },
      {
        src: "https://images.unsplash.com/photo-1583241475880-20bf6e67462f?w=600&h=800&fit=crop",
        alt: "Bridal hairstyle",
        category: "Bridal",
        width: 600,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1503951918674-251d0c16a1b1?w=600&h=600&fit=crop",
        alt: "Hair coloring",
        category: "Hair",
        width: 600,
        height: 600,
      },
      {
        src: "https://images.unsplash.com/photo-1616396798856-6370c0c16a1b?w=600&h=700&fit=crop",
        alt: "Facial treatment",
        category: "Skin",
        width: 600,
        height: 700,
      },
      {
        src: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&h=600&fit=crop",
        alt: "Manicure",
        category: "Nails",
        width: 600,
        height: 600,
      },
      {
        src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&h=800&fit=crop",
        alt: "Event makeup look",
        category: "Bridal",
        width: 600,
        height: 800,
      },
    ],
  },

  // ─── Before & After ──────────────────────────────────────
  beforeAfter: [
    {
      title: "Hair Coloring",
      beforeImage:
        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=450&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=450&fit=crop",
      beforeAlt: "Hair before coloring treatment",
      afterAlt: "Hair after coloring treatment",
    },
    {
      title: "Facial Treatment",
      beforeImage:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1616396798856-6370c0c16a1b?w=600&h=450&fit=crop",
      beforeAlt: "Skin before facial treatment",
      afterAlt: "Skin after facial treatment",
    },
    {
      title: "Bridal Makeup",
      beforeImage:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=450&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1d1?w=600&h=450&fit=crop",
      beforeAlt: "Client before bridal makeup",
      afterAlt: "Client after bridal makeup",
    },
  ],

  // ─── Team ────────────────────────────────────────────────
  team: [
    {
      name: "Stylist 1",
      designation: "Hair & Bridal Makeup",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Stylist 2",
      designation: "Facials & Skin Care",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a32d82e9d7?w=400&h=400&fit=crop",
    },
    {
      name: "Stylist 3",
      designation: "Nail Art & Care",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ],

  // ─── Testimonials ────────────────────────────────────────
  testimonials: [
    {
      author: "Anabia Ali",
      designation: "Facial & Mani-Pedi",
      image: "/Mask group.png",
      rating: 5,
      review:
        "The facial and mani-pedi here were fantastic relaxing, clean, and the team really knows what they're doing.",
    },
    {
      author: "Hafsa Khan",
      designation: "Hair Restructure",
      image: "/Mask-group-2.png",
      rating: 5,
      review:
        "After a hair restructure treatment, my hair feels soft and healthy again. Best decision I made for my hair.",
    },
    {
      author: "Nimra Ali",
      designation: "Regular Client",
      image: "/Mask-group-3.png",
      rating: 5,
      review:
        "One of the best salons in Johar Town hygienic, calm atmosphere, and genuinely friendly staff.",
    },
    {
      author: "Sara",
      designation: "Bridal Makeup",
      image: "/Mask group.png",
      rating: 5,
      review:
        "Everything was clean and well maintained, and the results exceeded what I expected.",
    },
  ],

  // ─── FAQ ─────────────────────────────────────────────────
  faqs: [
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "Appointments are recommended so we can reserve the right time and stylist for you. Walk-ins are welcomed too.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "The quickest way to book is by WhatsApp. Send us your preferred service, date, and time, and our team will confirm your appointment.",
    },
    {
      question: "Do you offer bridal makeup trials?",
      answer:
        "Yes. We recommend a bridal trial so you can discuss your preferred look, test the makeup, and plan every detail before your event.",
    },
    {
      question: "What should I do before a facial or skin treatment?",
      answer:
        "Please let our team know about any skin sensitivities, allergies, or products you are currently using. We will recommend the most suitable treatment for you.",
    },
    {
      question: "Are your products and tools hygienic?",
      answer:
        "Absolutely. We maintain a clean salon environment and use carefully sanitised tools and quality products for every service.",
    },
  ],

  // ─── Contact ─────────────────────────────────────────────
  contact: {
    heading: "Visit Our Salon",
    subHeading: "Get in Touch",
    description:
      "We'd love to hear from you. Visit us, call us, or send a message — we're here to help you look and feel your best.",
    cards: [
      {
        icon: MapPin,
        title: "Address",
        details: ["Block J, Johar Town Phase 2, Lahore, Pakistan"],
      },
      {
        icon: Phone,
        title: "Phone",
        details: ["+92 308 0815888"],
      },
      {
        icon: Clock,
        title: "Hours",
        details: ["Monday – Saturday: 10am – 8pm", "Sunday: 12pm – 6pm"],
      },
    ],
    showMap: true,
  },

  // ─── Footer ──────────────────────────────────────────────
  footer: {
    description:
      "Premium beauty salon in Johar Town, Lahore. Bridal makeup, hair styling, facials & nail care.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    servicesLinks: [
      { label: "Hair Dressing", href: "/services#hair" },
      { label: "Skin Care", href: "/services#skin" },
      { label: "Nails", href: "/services#nails" },
      { label: "Special Events", href: "/services#bridal" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    copyright: "NJ Beauty Bliss. All rights reserved.",
  },

  // ─── CTA ─────────────────────────────────────────────────
  cta: {
    title: "Ready for a Glow-Up?",
    description:
      "Book your appointment today and let our expert team take care of the rest.",
    buttonText: "Book on WhatsApp",
  },

  // ─── Stats ───────────────────────────────────────────────
  stats: [
    { icon: Award, value: 5, suffix: "+", label: "Years of Experience" },
    { icon: Sparkles, value: 20, suffix: "+", label: "Beauty Services" },
    { icon: Users, value: 999, suffix: "+", label: "Happy Clients" },
    { icon: Star, value: 4.9, suffix: "", decimals: 1, label: "Average Rating" },
  ],

  // ─── Features (section toggles) ──────────────────────────
  features: {
    showHero: true,
    showTrustStrip: true,
    showServices: true,
    showAbout: true,
    showVideo: true,
    showBeforeAfter: true,
    showTestimonials: true,
    showGallery: true,
    showTeam: true,
    showFAQ: true,
    showCTA: true,
    showCounters: true,
    showMap: true,
    showNewsletter: false,
    showBlogs: false,
    showPartners: false,
    showAwards: false,
    showInstagramFeed: false,
    showPricing: false,
  },

  // ─── Theme ───────────────────────────────────────────────
  theme: {
    animationSpeed: "normal",
    buttonStyle: "pill",
    borderRadius: "1.75rem",
    shadowStyle: "sm",
    glassmorphism: false,
    gradientUsage: true,
    cardStyle: "elevated",
  },

  // ─── Media ───────────────────────────────────────────────
  media: {
    hero: "/hero1.png",
    about: "/about.jfif",
    logo: "NJ Beauty Bliss",
    favicon: "/favicon.ico",
    services: ["/about4.jpg", "/about3.jpg", "/hero1.png", "/hero1.png"],
    gallery: [],
    team: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580489944761-15a32d82e9d7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    ],
    video: "/vidssave.com INTRO_ make up & hair _ A cinematic B-roll 1080P.mp4",
    videoPoster: "",
  },

  // ─── Booking ─────────────────────────────────────────────
  booking: {
    provider: "whatsapp",
    phone: "923080815888",
    buttonText: "Book Now",
  },

  // ─── Section Texts (all UI strings) ──────────────────────
  sections: {
    beforeAfter: {
      eyebrow: "Real Results",
      title: "Before & After",
      subtitle:
        "Drag the slider to see the transformation our treatments deliver. Real results from real clients.",
      beforeLabel: "Before",
      afterLabel: "After",
    },
    videoIntro: {
      eyebrow: "See Us in Action",
      title: "Your Path to",
      titleHighlight: "Effortless Beauty",
      description:
        "Step inside {businessName} and see what makes every visit special.",
      ariaLabel: "Play video introduction",
      badgeText: "PLAY INTRO • PLAY INTRO • PLAY INTRO • PLAY INTRO",
    },
    testimonials: {
      eyebrow: "Client Love",
      title: "What Our Happy Clients Say",
      subtitle:
        "See what our happy clients have to say. They've shared how our services helped them look and feel their best.",
      prevAriaLabel: "Previous slide",
      nextAriaLabel: "Next slide",
    },
    faq: {
      title: "FAQ's",
      subtitle: "Everything you need to know before your visit to {businessName}.",
      footerText:
        "Still have questions? Contact us on WhatsApp and our team will be happy to help.",
    },
    contactForm: {
      successTitle: "Thank you!",
      successMessage:
        "Your message has been received. We'll get back to you shortly.",
      sendAnotherText: "Send another message",
      fields: {
        name: { label: "Name", placeholder: "Your full name" },
        phone: { label: "Phone", placeholder: "Your phone number" },
        message: { label: "Message", placeholder: "How can we help you?" },
      },
      submitButtonText: "Send Message",
    },
    footer: {
      quickLinksTitle: "Quick Links",
      visitUsTitle: "Visit Us",
      hoursTitle: "Hours",
    },
    gallery: {
      eyebrow: "Our Work",
      title: "Beauty Gallery",
      subtitle:
        "A glimpse of the beautiful results our team creates every day.",
      closeAriaLabel: "Close",
      prevAriaLabel: "Previous",
      nextAriaLabel: "Next",
    },
    home: {
      trustStrip: {
        googleReviewsText: "30+ happy clients on Google",
        locationText: "Johar Town, Lahore",
      },
      servicesPreview: {
        eyebrow: "",
        title: "What We Offer",
        subtitle:
          "From everyday haircare to full bridal makeovers, our skilled team offers a full range of beauty services.",
        viewAllText: "View All Services",
      },
      aboutTeaser: {
        badge: "About us",
        title: "Your Beauty, Our Passion",
        description:
          "At {businessName}, we believe every visit should leave you feeling confident, cared for, and beautifully yourself. Our expert team creates personalised beauty experiences with thoughtful detail.",
        discoverStoryText: "Discover Our Story",
        aboutImageAlt: "About image",
      },
    },
    about: {
      experienceBadgeLabel: "Years of Excellence",
      missionTitle: "Our Mission",
      visionTitle: "Our Vision",
      team: {
        eyebrow: "Our Team",
        title: "Meet the Stylists",
        subtitle:
          "Our skilled team of beauty professionals is here to make you look and feel your best.",
      },
    },
    services: {
      eyebrow: "Our Services",
      title: "Beauty Crafted with Precision & Care",
      description:
        "At {businessName}, we offer a comprehensive range of beauty services tailored to your unique needs. From everyday haircare to luxurious bridal makeovers, our expert team combines skill, premium products, and a relaxing atmosphere to deliver results you'll love.",
      stats: [
        { label: "Years of Experience" },
        { label: "Beauty Services" },
        { label: "Happy Clients" },
      ],
    },
    contact: {
      formEyebrow: "Send a Message",
      formTitle: "We'd Love to Hear From You",
    },
    serviceCard: {
      startingFromText: "Starting from",
    },
    header: {
      openMenuAriaLabel: "Open menu",
      closeMenuAriaLabel: "Close menu",
    },
    videoModal: {
      closeAriaLabel: "Close video",
    },
    hero: {
      backgroundImageAlt: "Hero background",
      heroImageAlt: "Hero image",
    },
  },
};

// ─── Derived helpers ───────────────────────────────────────
export function getBookingUrl(): string {
  const { booking } = siteConfig;
  switch (booking.provider) {
    case "whatsapp":
      return `https://wa.me/${booking.phone}`;
    case "calendly":
      return booking.url ?? "#";
    case "custom":
      return booking.url ?? "#";
    case "phone":
      return `tel:${booking.phone}`;
    default:
      return "#";
  }
}

export function getVisibleNav() {
  return siteConfig.navigation.filter((item) => item.visible);
}

export function getHomeServicePreview() {
  return siteConfig.services.map((cat) => ({
    id: cat.id,
    title: cat.title,
    icon: cat.icon,
    image: cat.image,
    description: cat.services[0]?.description ?? "",
  }));
}

export function resolveText(text: string): string {
  return text.replace(/\{businessName\}/g, siteConfig.business.businessName);
}
