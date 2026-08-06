import GalleryHero from "@/components/GalleryHero";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid, { type GalleryImage } from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Luxury salon interior with styling stations",
    category: "Hair",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.pexels.com/photos/37273222/pexels-photo-37273222.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Relaxing facial spa treatment",
    category: "Skin",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.pexels.com/photos/34930141/pexels-photo-34930141.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Elegant nail polish collection",
    category: "Nails",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.pexels.com/photos/32647179/pexels-photo-32647179.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Bridal makeup application",
    category: "Bridal",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.pexels.com/photos/32856321/pexels-photo-32856321.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Professional hair styling session",
    category: "Hair",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.pexels.com/photos/29908196/pexels-photo-29908196.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Advanced skin treatment in progress",
    category: "Skin",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.pexels.com/photos/38264838/pexels-photo-38264838.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Intricate nail art design",
    category: "Nails",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.pexels.com/photos/31065906/pexels-photo-31065906.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Elegant bridal updo hairstyle",
    category: "Bridal",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.pexels.com/photos/7389078/pexels-photo-7389078.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Hair coloring and highlights",
    category: "Hair",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.pexels.com/photos/7446666/pexels-photo-7446666.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Glowing facial treatment result",
    category: "Skin",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.pexels.com/photos/22668324/pexels-photo-22668324.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    alt: "Professional manicure in progress",
    category: "Nails",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.pexels.com/photos/28742353/pexels-photo-28742353.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Glamorous event makeup look",
    category: "Bridal",
    width: 800,
    height: 1000,
  },
];

const categories = ["All", "Hair", "Skin", "Nails", "Bridal"];

export default function GalleryPage() {
  return (
    <>

      <GalleryHero />

      <section id="gallery-grid" className="bg-white py-16 sm:py-24">
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
