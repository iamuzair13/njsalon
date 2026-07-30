import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid, { type GalleryImage } from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/config/site";

const galleryImages: GalleryImage[] = siteConfig.gallery.images;
const categories = siteConfig.gallery.categories;
const { sections } = siteConfig;

export default function GalleryPage() {
  return (
    <>

      <section className="bg-white py-26 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={sections.gallery.eyebrow}
            title={sections.gallery.title}
            subtitle={sections.gallery.subtitle}
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
