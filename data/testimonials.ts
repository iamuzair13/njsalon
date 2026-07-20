export type Testimonial = {
  quote: string;
  author: string;
  label: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The facial and mani-pedi here were fantastic — relaxing, clean, and the team really knows what they're doing.",
    author: "Verified Client",
    label: "Facial & Mani-Pedi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop",
    rating: 5,
  },
  {
    quote:
      "After a hair restructure treatment, my hair feels soft and healthy again. Best decision I made for my hair.",
    author: "Verified Client",
    label: "Hair Restructure",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a32d82e9d7?w=160&h=160&fit=crop",
    rating: 5,
  },
  {
    quote:
      "One of the best salons in Johar Town — hygienic, calm atmosphere, and genuinely friendly staff.",
    author: "Verified Client",
    label: "Regular Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop",
    rating: 5,
  },
  {
    quote:
      "Everything was clean and well maintained, and the results exceeded what I expected.",
    author: "Verified Client",
    label: "Bridal Makeup",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop",
    rating: 5,
  },
];
