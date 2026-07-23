import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  text?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function WhatsAppButton({
  text = "Book on WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-600 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2";
  const variantClasses =
    variant === "primary"
      ? "bg-whatsapp text-white hover:bg-whatsapp-dark"
      : "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white";

  return (
    <a
      href="https://wa.me/923080815888"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </a>
  );
}
