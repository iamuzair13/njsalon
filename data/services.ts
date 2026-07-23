import type { LucideIcon } from "lucide-react";
import { Scissors, Sparkles, Hand, Heart } from "lucide-react";

export type ServiceItem = {
  name: string;
  description: string;
  startingPrice?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair Dressing",
    icon: Scissors,
    services: [
      {
        name: "Hair Cut",
        description: "Precision cuts and blowouts tailored to your face shape and lifestyle.",
        startingPrice: "Rs. 1,500",
      },
      {
        name: "Hair Coloring",
        description: "Global color, highlights, and balayage using premium ammonia-free products.",
        startingPrice: "Rs. 3,000",
      },
      {
        name: "Hair Restructure & Protein Treatment",
        description: "Deep conditioning and protein therapy to restore softness and strength.",
        startingPrice: "Rs. 4,000",
      },
    ],
  },
  {
    id: "skin",
    title: "Skin Care",
    icon: Sparkles,
    services: [
      {
        name: "Classic Facial",
        description: "Cleanse, exfoliate, and hydrate for a refreshed, glowing complexion.",
        startingPrice: "Rs. 2,000",
      },
      {
        name: "HydraFacial",
        description: "Advanced multi-step treatment that cleanses, extracts, and hydrates deeply.",
        startingPrice: "Rs. 5,000",
      },
      {
        name: "Skin Polish",
        description: "Gentle exfoliation and brightening to reveal smoother, radiant skin.",
        startingPrice: "Rs. 3,500",
      },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    icon: Hand,
    services: [
      {
        name: "Manicure",
        description: "Nail shaping and hand massage with a flawless polish finish.",
        startingPrice: "Rs. 1,200",
      },
      {
        name: "Pedicure",
        description: "Relaxing foot soak, scrub, and care for soft, well-groomed feet.",
        startingPrice: "Rs. 1,500",
      },
      {
        name: "Nail Art",
        description: "Custom designs, gel extensions, and creative nail art for any occasion.",
        startingPrice: "Rs. 2,000",
      },
    ],
  },
  {
    id: "bridal",
    title: "Special Events",
    icon: Heart,
    services: [
      {
        name: "Bridal Makeup",
        description: "Full bridal look with premium products, long-lasting, photo-ready.",
        startingPrice: "Rs. 15,000",
      },
      {
        name: "Party Makeup",
        description: "Glamorous event makeup tailored to your outfit and personality.",
        startingPrice: "Rs. 5,000",
      },
      {
        name: "Event Hairstyling",
        description: "Elegant updos, curls, and styling for weddings, parties, and special events.",
        startingPrice: "Rs. 3,000",
      },
    ],
  },
];

export const homeServicePreview = serviceCategories.map((cat) => ({
  id: cat.id,
  title: cat.title,
  icon: cat.icon,
  description: cat.services[0].description,
}));
