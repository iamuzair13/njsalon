# Hardcoded Content Report

Second-pass architecture audit of all components and pages. Every hardcoded business-specific string has been moved into configuration files (`config/site.ts` → `sections` object, and `config/animation.ts` for animation values).

---

## 1. Animation Values → `config/animation.ts`

Created `config/animation.ts` with reusable presets extracted from repeated inline values across all components and pages.

| File | Line (approx) | Hardcoded Value | Moved To |
|------|---------------|-----------------|----------|
| `components/SectionHeading.tsx` | 20-23 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` etc. | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `components/CTASection.tsx` | 24-27 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` etc. | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `components/BeforeAfterSection.tsx` | 29-33 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` + `delay: index * 0.1` | `fadeInUp`, `viewportOnce`, `easeOutExpoDelayed(index * 0.1)` |
| `components/TestimonialCard.tsx` | 27-30 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` etc. | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `components/FAQSection.tsx` | 18-22 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` etc. | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `components/FAQSection.tsx` | 33-37 | `delay: 0.1` | `easeOutExpoDelayed(0.1)` |
| `components/VideoIntroSection.tsx` | 30-33 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` etc. | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `app/page.tsx` | 31-34 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` etc. | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `app/page.tsx` | 76-83 | `delay: index * 0.1` | `easeOutExpoDelayed(index * 0.1)` |
| `app/page.tsx` | 113-116 | `initial={{ opacity: 0, x: -24, filter: "blur(12px)" }}` | `fadeInLeft`, `viewportOnce`, `easeOutExpo` |
| `app/page.tsx` | 150-153 | `initial={{ opacity: 0, x: 24, filter: "blur(12px)" }}` | `fadeInRight`, `viewportOnce`, `easeOutExpo` |
| `app/about/page.tsx` | 22-25 | `initial={{ opacity: 0, x: -24, filter: "blur(12px)" }}` | `fadeInLeft`, `viewportOnce`, `easeOutExpo` |
| `app/about/page.tsx` | 44-47 | `initial={{ opacity: 0, x: 24, filter: "blur(12px)" }}` | `fadeInRight`, `viewportOnce`, `easeOutExpo` |
| `app/about/page.tsx` | 82-85 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `app/about/page.tsx` | 99-102 | `delay: 0.1` | `easeOutExpoDelayed(0.1)` |
| `app/about/page.tsx` | 132-139 | `delay: index * 0.1` | `easeOutExpoDelayed(index * 0.1)` |
| `app/services/page.tsx` | 19-22 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `app/services/page.tsx` | 39-43 | `delay: 0.15` | `easeOutExpoDelayed(0.15)` |
| `app/services/page.tsx` | 79-82 | `initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}` | `fadeInUp`, `viewportOnce`, `easeOutExpo` |
| `app/services/page.tsx` | 95-103 | `delay: index * 0.1` | `easeOutExpoDelayed(index * 0.1)` |
| `app/contact/page.tsx` | 22-25 | `initial={{ opacity: 0, x: -24, filter: "blur(12px)" }}` | `fadeInLeft`, `viewportOnce`, `easeOutExpo` |
| `app/contact/page.tsx` | 84-87 | `initial={{ opacity: 0, x: 24, filter: "blur(12px)" }}` | `fadeInRight`, `viewportOnce`, `easeOutExpo` |

---

## 2. Text Content → `config/site.ts` → `sections`

### `components/BeforeAfterSection.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~10 | `eyebrow="Real Results"` | `sections.beforeAfter.eyebrow` |
| ~11 | `title="Before & After"` | `sections.beforeAfter.title` |
| ~12 | `subtitle="Drag the slider to see the transformation..."` | `sections.beforeAfter.subtitle` |

### `components/BeforeAfterSlider.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~99 | `"After"` | `sections.beforeAfter.afterLabel` |
| ~117 | `"Before"` | `sections.beforeAfter.beforeLabel` |
| ~90, ~108 | `TODO: replace with real NJ Beauty Bliss...` comments | Removed |

### `components/VideoIntroSection.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~37 | `"See Us in Action"` | `sections.videoIntro.eyebrow` |
| ~40 | `"Your Path to"` | `sections.videoIntro.title` |
| ~42 | `"Effortless"` + `"Beauty"` | `sections.videoIntro.titleHighlight` |
| ~44 | `"Step inside {businessName} and see..."` | `sections.videoIntro.description` (with `resolveText()`) |
| ~55 | `aria-label="Play video introduction"` | `sections.videoIntro.ariaLabel` |
| ~94 | `"PLAY INTRO • PLAY INTRO • PLAY INTRO • PLAY INTRO"` | `sections.videoIntro.badgeText` |

### `components/TestimonialCard.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~37 | `"Client Love"` | `sections.testimonials.eyebrow` |
| ~40 | `"What Our Happy Clients Say"` | `sections.testimonials.title` |
| ~42 | `"See what our happy clients have to say..."` | `sections.testimonials.subtitle` |
| ~122 | `aria-label="Previous slide"` | `sections.testimonials.prevAriaLabel` |
| ~150 | `aria-label="Next slide"` | `sections.testimonials.nextAriaLabel` |

### `components/FAQSection.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~25 | `"FAQ's"` | `sections.faq.title` |
| ~28 | `"Everything you need to know before your visit to {businessName}."` | `sections.faq.subtitle` (with `resolveText()`) |
| ~83 | `"Still have questions? Contact us on WhatsApp..."` | `sections.faq.footerText` |

### `components/ContactForm.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~26 | `"Thank you!"` | `sections.contactForm.successTitle` |
| ~29 | `"Your message has been received..."` | `sections.contactForm.successMessage` |
| ~36 | `"Send another message"` | `sections.contactForm.sendAnotherText` |
| ~53 | `"Name"` | `sections.contactForm.fields.name.label` |
| ~60 | `"Your full name"` | `sections.contactForm.fields.name.placeholder` |
| ~69 | `"Phone"` | `sections.contactForm.fields.phone.label` |
| ~76 | `"Your phone number"` | `sections.contactForm.fields.phone.placeholder` |
| ~85 | `"Message"` | `sections.contactForm.fields.message.label` |
| ~92 | `"How can we help you?"` | `sections.contactForm.fields.message.placeholder` |
| ~101 | `"Send Message"` | `sections.contactForm.submitButtonText` |

### `components/Footer.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~79 | `"Quick Links"` | `sections.footer.quickLinksTitle` |
| ~99 | `"Visit Us"` | `sections.footer.visitUsTitle` |
| ~114 | `"Hours"` | `sections.footer.hoursTitle` |
| ~174 | `"Quick Links"` (desktop) | `sections.footer.quickLinksTitle` |
| ~189 | `"Visit Us"` (desktop) | `sections.footer.visitUsTitle` |
| ~205 | `"Hours"` (desktop) | `sections.footer.hoursTitle` |

### `components/Header.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~99 | `aria-label="Close menu"` / `"Open menu"` | `sections.header.closeMenuAriaLabel` / `openMenuAriaLabel` |

### `components/GalleryGrid.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~73 | `TODO: replace with real NJ Beauty Bliss photo` comment | Removed |
| ~102 | `aria-label="Close"` | `sections.gallery.closeAriaLabel` |
| ~112 | `aria-label="Previous"` | `sections.gallery.prevAriaLabel` |
| ~122 | `aria-label="Next"` | `sections.gallery.nextAriaLabel` |
| ~132 | `TODO: replace with real NJ Beauty Bliss photo` comment | Removed |

### `components/VideoModal.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~79 | `aria-label="Close video"` | `sections.videoModal.closeAriaLabel` |
| ~94 | `TODO: replace with real NJ Beauty Bliss intro video...` comment | Removed |

### `components/ServiceCard.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~59 | `"Starting from"` | `sections.serviceCard.startingFromText` |

### `components/WhatsAppButton.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~11 | `text = "Book on WhatsApp"` | `siteConfig.booking.buttonText` |

### `components/Hero.tsx`

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~49 | `alt="Hero background"` | `sections.hero.backgroundImageAlt` |
| ~121 | `alt="Hero image"` | `sections.hero.heroImageAlt` |
| ~128-147 | Commented-out block with `"Ready to reveal your best self?"`, `"Book a personalised consultation..."`, `"Meet Your Expert"` | Removed entirely |

### `components/SectionHeading.tsx`

No hardcoded text content — only animation values were extracted (see section 1).

### `components/CTASection.tsx`

No hardcoded text content — already config-driven from first pass. Animation values extracted (see section 1).

---

## 3. Pages → `config/site.ts` → `sections`

### `app/page.tsx` (Home)

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~52 | `"30+ happy clients on Google"` | `sections.home.trustStrip.googleReviewsText` |
| ~57 | `"Johar Town, Lahore"` | `sections.home.trustStrip.locationText` |
| ~69 | `eyebrow=""` | `sections.home.servicesPreview.eyebrow` |
| ~70 | `title="What We Offer"` | `sections.home.servicesPreview.title` |
| ~71 | `subtitle="From everyday haircare to full bridal makeovers..."` | `sections.home.servicesPreview.subtitle` |
| ~99 | `"View All Services"` | `sections.home.servicesPreview.viewAllText` |
| ~119 | `"About us"` | `sections.home.aboutTeaser.badge` |
| ~121 | `"Your Beauty, Our Passion"` | `sections.home.aboutTeaser.title` |
| ~123-127 | `"At {businessName}, we believe every visit..."` | `sections.home.aboutTeaser.description` (with `resolveText()`) |
| ~144 | `"Discover Our Story"` | `sections.home.aboutTeaser.discoverStoryText` |
| ~159 | `alt="About image"` | `sections.home.aboutTeaser.aboutImageAlt` |

### `app/about/page.tsx` (About)

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~18 | Comment `"Salon story"` | Changed to `"Story"` |
| ~39 | `"Years of Excellence"` | `sections.about.experienceBadgeLabel` |
| ~92 | `"Our Mission"` | `sections.about.missionTitle` |
| ~109 | `"Our Vision"` | `sections.about.visionTitle` |
| ~124 | `eyebrow="Our Team"` | `sections.about.team.eyebrow` |
| ~125 | `title="Meet the Stylists"` | `sections.about.team.title` |
| ~126 | `subtitle="Our skilled team of beauty professionals..."` | `sections.about.team.subtitle` |

### `app/services/page.tsx` (Services)

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~25 | `"Our Services"` | `sections.services.eyebrow` |
| ~28 | `"Beauty Crafted with Precision & Care"` | `sections.services.title` |
| ~31-35 | `"At {businessName}, we offer a comprehensive range..."` | `sections.services.description` (with `resolveText()`) |
| ~47 | `"Years of Experience"` | `sections.services.stats[0].label` |
| ~48 | `"Beauty Services"` | `sections.services.stats[1].label` |
| ~49 | `"Happy Clients"` | `sections.services.stats[2].label` |

### `app/gallery/page.tsx` (Gallery)

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~17 | `eyebrow="Our Work"` | `sections.gallery.eyebrow` |
| ~18 | `title="Beauty Gallery"` | `sections.gallery.title` |
| ~19 | `subtitle="A glimpse of the beautiful results..."` | `sections.gallery.subtitle` |

### `app/contact/page.tsx` (Contact)

| Line | Hardcoded Value | Moved To |
|------|-----------------|----------|
| ~90 | `eyebrow="Send a Message"` | `sections.contact.formEyebrow` |
| ~91 | `title="We'd Love to Hear From You"` | `sections.contact.formTitle` |

---

## 4. Configuration Files Created/Modified

| File | Action |
|------|--------|
| `config/animation.ts` | **Created** — Reusable animation presets: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `viewportOnce`, `easeOutExpo`, `easeOutExpoDelayed()`, `easeOutQuick`, `easeOutFast`, `scaleIn`, `staggerContainer` |
| `types/site.ts` | **Modified** — Added `SectionTexts` interface with all UI string fields; added `sections: SectionTexts` to `SiteConfig` |
| `config/site.ts` | **Modified** — Added `sections` object with all UI strings; added `resolveText()` helper for `{businessName}` placeholder resolution |

---

## 5. Summary

- **Total hardcoded strings found and moved**: 60+
- **Total animation value patterns extracted**: 22+ instances across 10 files
- **Business-specific comments removed**: 5 (TODO comments referencing "NJ Beauty Bliss")
- **Commented-out hardcoded block removed**: 1 (in `Hero.tsx`)
- **New config files created**: 1 (`config/animation.ts`)
- **All components are now industry-neutral** — no component references "salon", "beauty", "stylist", or any business-specific term
- **Build status**: ✅ Compiled successfully with zero TypeScript errors
