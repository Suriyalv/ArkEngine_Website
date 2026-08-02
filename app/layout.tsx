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
    default: "ArkEngine Technologies — Intelligent Digital Products",
    template: "%s | ArkEngine Technologies",
  },
  description:
    "ArkEngine Technologies builds cutting-edge SaaS products, custom software, AI/ML solutions, and cloud applications for forward-thinking businesses. Transform your ideas into intelligent digital products.",
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
  ],
  authors: [{ name: "ArkEngine Technologies" }],
  creator: "ArkEngine Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arkengine.com",
    siteName: "ArkEngine Technologies",
    title: "ArkEngine Technologies — Intelligent Digital Products",
    description:
      "Building intelligent digital products for tomorrow. SaaS, AI, ML, and custom software solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ArkEngine Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArkEngine Technologies — Intelligent Digital Products",
    description:
      "Building intelligent digital products for tomorrow.",
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
              name: "ArkEngine Technologies",
              url: "https://arkengine.com",
              logo: "https://arkengine.com/logo.png",
              description:
                "ArkEngine Technologies builds cutting-edge SaaS products, custom software, AI/ML solutions, and cloud applications.",
              sameAs: [
                "https://twitter.com/arkengine",
                "https://linkedin.com/company/arkengine",
                "https://github.com/arkengine",
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
