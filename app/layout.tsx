import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const { branding, typography, seo, business } = siteConfig;

const fontVars: Record<string, string> = {
  "--c-primary": branding.primaryColor,
  "--c-secondary": branding.secondaryColor,
  "--c-accent": branding.accentColor,
  "--c-background": branding.backgroundColor,
  "--c-surface": branding.surfaceColor,
  "--c-text": branding.textColor,
  "--c-muted": branding.mutedColor,
  "--c-border": branding.borderColor,
  "--c-success": branding.successColor,
  "--c-error": branding.errorColor,
  "--font-heading-family": typography.headingFont,
  "--font-body-family": typography.bodyFont,
};

const headingFontQuery = typography.headingFont.replace(/ /g, "+");
const bodyFontQuery = typography.bodyFont.replace(/ /g, "+");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  icons: {
    icon: seo.favicon ?? "/favicon.ico",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: seo.openGraphImage ? [{ url: seo.openGraphImage }] : undefined,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={fontVars as React.CSSProperties}
    >
      <head>
        <link
          href={`https://fonts.googleapis.com/css2?family=${headingFontQuery}:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=${bodyFontQuery}:wght@400;500;600;700;800;900&display=swap`}
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
