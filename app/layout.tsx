import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import PageLoader from "@/components/layout/PageLoader";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Ark Engine Technologies (ArkEngine) — Intelligent Digital Products",
    template: "%s | Ark Engine Technologies",
  },
  description:
    "Ark Engine (ArkEngine) Technologies is an India-based startup crafting high-quality custom software, end-to-end SaaS products, AI/ML solutions, and premium web experiences. We build intelligent digital products that transform how businesses operate at scale.",
  keywords: [
    "AI solutions",
    "machine learning",
    "custom software development",
    "SaaS development",
    "web development",
    "cloud solutions",
    "AI automation",
    "generative AI",
    "LLM applications",
    "ArkEngine Technologies",
    "Ark Engine",
    "Ark Engine Technologies",
    "Arkengine",
  ],
  authors: [{ name: "Ark Engine Technologies" }],
  creator: "Ark Engine Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arkengine.com",
    siteName: "Ark Engine Technologies",
    title: "Ark Engine Technologies (ArkEngine) — Intelligent Digital Products",
    description:
      "An India-based startup crafting high-quality custom software, SaaS products, and AI solutions. We build intelligent digital products that transform how businesses operate at scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ark Engine Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ark Engine Technologies (ArkEngine) — Intelligent Digital Products",
    description:
      "An India-based startup crafting high-quality custom software, SaaS products, and AI solutions.",
    images: ["/og-image.png"],
    creator: "@arkengine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://arkengine.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ark Engine Technologies (ArkEngine)",
              alternateName: ["ArkEngine", "Ark Engine", "Arkengine Technologies"],
              url: "https://arkengine.com",
              logo: "https://arkengine.com/logo.png",
              description:
                "Ark Engine Technologies is an India-based startup crafting high-quality custom software, end-to-end SaaS products, AI/ML solutions, and premium web experiences.",
              sameAs: [
                "https://x.com/Arkenginetechno",
                "https://www.linkedin.com/in/arkengine/",
                "https://github.com/arkengine-technologies",
                "https://www.instagram.com/arkenginetechnologies?igsh=djZ0aTdwZmFhcnk2",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-ARKENGINE",
                contactType: "customer service",
                email: "arkenginetechnologies@gmail.com",
              },
            }),
          }}
        />
      </head>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            <PageLoader />
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
