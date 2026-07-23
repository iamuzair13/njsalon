import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid, { type GalleryImage } from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

const galleryImages: GalleryImage[] = [
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
    src: "https://images.unsplash.com/photo-1503951918674-fed76431b60e?w=600&h=600&fit=crop",
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
];

const categories = ["All", "Hair", "Skin", "Nails", "Bridal"];

export default function GalleryPage() {
  return (
    <>

      <section className="bg-white py-26 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Beauty Gallery"
            subtitle="A glimpse of the beautiful results our team creates every day."
          />
          <div className="mt-12">
            <GalleryGrid images={galleryImages} categories={categories} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
