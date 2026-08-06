import type { LucideIcon } from "lucide-react";
import { Scissors, Sparkles, Hand, Heart } from "lucide-react";

export type ServiceItem = {
  name: string;
  description: string;
  startingPrice?: string;
  image?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  image?: string;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair Dressing",
    icon: Scissors,
    image: "https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop",
    services: [
      {
        name: "Hair Cut",
        description: "Precision cuts and blowouts tailored to your face shape and lifestyle.",
        startingPrice: "Rs. 1,500",
        image: "https://images.pexels.com/photos/32856321/pexels-photo-32856321.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "Hair Coloring",
        description: "Global color, highlights, and balayage using premium ammonia-free products.",
        startingPrice: "Rs. 3,000",
        image: "https://images.pexels.com/photos/7389078/pexels-photo-7389078.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "Hair Restructure & Protein Treatment",
        description: "Deep conditioning and protein therapy to restore softness and strength.",
        startingPrice: "Rs. 4,000",
        image: "https://images.pexels.com/photos/23349891/pexels-photo-23349891.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
    ],
  },
  {
    id: "skin",
    title: "Skin Care",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/37273222/pexels-photo-37273222.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop",
    services: [
      {
        name: "Classic Facial",
        description: "Cleanse, exfoliate, and hydrate for a refreshed, glowing complexion.",
        startingPrice: "Rs. 2,000",
        image: "https://images.pexels.com/photos/29908196/pexels-photo-29908196.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "HydraFacial",
        description: "Advanced multi-step treatment that cleanses, extracts, and hydrates deeply.",
        startingPrice: "Rs. 5,000",
        image: "https://images.pexels.com/photos/7446666/pexels-photo-7446666.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "Skin Polish",
        description: "Gentle exfoliation and brightening to reveal smoother, radiant skin.",
        startingPrice: "Rs. 3,500",
        image: "https://images.pexels.com/photos/37240365/pexels-photo-37240365.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    icon: Hand,
    image: "https://images.pexels.com/photos/34930141/pexels-photo-34930141.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop",
    services: [
      {
        name: "Manicure",
        description: "Nail shaping and hand massage with a flawless polish finish.",
        startingPrice: "Rs. 1,200",
        image: "https://images.pexels.com/photos/22668324/pexels-photo-22668324.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "Pedicure",
        description: "Relaxing foot soak, scrub, and care for soft, well-groomed feet.",
        startingPrice: "Rs. 1,500",
        image: "https://images.pexels.com/photos/34871614/pexels-photo-34871614.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "Nail Art",
        description: "Custom designs, gel extensions, and creative nail art for any occasion.",
        startingPrice: "Rs. 2,000",
        image: "https://images.pexels.com/photos/38264838/pexels-photo-38264838.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
    ],
  },
  {
    id: "bridal",
    title: "Special Events",
    icon: Heart,
    image: "https://images.pexels.com/photos/32647179/pexels-photo-32647179.jpeg?auto=compress&cs=tinysrgb&w=1200&h=960&fit=crop",
    services: [
      {
        name: "Bridal Makeup",
        description: "Full bridal look with premium products, long-lasting, photo-ready.",
        startingPrice: "Rs. 15,000",
        image: "https://images.pexels.com/photos/15983864/pexels-photo-15983864.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "Party Makeup",
        description: "Glamorous event makeup tailored to your outfit and personality.",
        startingPrice: "Rs. 5,000",
        image: "https://images.pexels.com/photos/28742353/pexels-photo-28742353.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
      {
        name: "Event Hairstyling",
        description: "Elegant updos, curls, and styling for weddings, parties, and special events.",
        startingPrice: "Rs. 3,000",
        image: "https://images.pexels.com/photos/31065906/pexels-photo-31065906.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
      },
    ],
  },
];

export const homeServicePreview = serviceCategories.map((cat) => ({
  id: cat.id,
  title: cat.title,
  icon: cat.icon,
  image: cat.image,
  description: cat.services[0].description,
}));
