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
      "The facial and mani-pedi here were fantastic relaxing, clean, and the team really knows what they're doing.",
    author: "Anabia Ali",
    label: "Facial & Mani-Pedi",
    avatar: "/Mask group.png",
    rating: 5,
  },
  {
    quote:
      "After a hair restructure treatment, my hair feels soft and healthy again. Best decision I made for my hair.",
    author: "Hafsa Khan",
    label: "Hair Restructure",
    avatar: "/Mask-group-2.png",
    rating: 5,
  },
  {
    quote:
      "One of the best salons in Johar Town hygienic, calm atmosphere, and genuinely friendly staff.",
    author: "Nimra Ali",
    label: "Regular Client",
    avatar: "/Mask-group-3.png",
    rating: 5,
  },
  {
    quote:
      "Everything was clean and well maintained, and the results exceeded what I expected.",
    author: "Sara",
    label: "Bridal Makeup",
    avatar: "/Mask group.png",
    rating: 5,
  },
];
