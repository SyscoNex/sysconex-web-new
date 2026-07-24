// Globals css
import "./globals.css";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// FontAwesome Icons css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../lib/fontawesome";

// yet-another-react-lightbox css
import "yet-another-react-lightbox/styles.css";

// swiper slider css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Nice-select2 css
import "nice-select2/dist/css/nice-select2.css";

// Template SCSS
import "@/scss/style.scss";
import ScrollTopWrapper from "@/components/ScrollTopWrapper";
import AnimationProvider from "@/providers/AnimationProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sysconex.com'),
  title: {
    template: "%s | Sysconex",
    default: "Sysconex | Premier Software Development & Digital Agency in Sri Lanka",
  },
  description:
    "Sysconex is a leading software development and digital agency in Sri Lanka, providing custom digital solutions, web design, mobile apps, and enterprise IT consulting in Colombo and Negombo.",
  keywords: [
    "Sysconex",
    "Software Development in Sri Lanka",
    "Digital Agency Sri Lanka",
    "Software Company Colombo",
    "Web Development Negombo",
    "Web Design Sri Lanka",
    "Mobile App Development",
    "IT Consulting",
    "Custom Software Solutions",
    "Tech Agency"
  ],
  creator: "sysconex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sysconex",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Sysconex Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/logo.png"],
  },
  other: {
    developer: "sysconex",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@300..700&family=Poppins:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&display=swap"
        />
        <link
          rel="preload"
          href="/_next/static/media/fa-solid-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/fa-brands-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/fa-regular-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: "Font Awesome 6 Free";
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url("/_next/static/media/fa-solid-900.woff2") format("woff2");
          }
          @font-face {
            font-family: "Font Awesome 6 Free";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("/_next/static/media/fa-regular-400.woff2") format("woff2");
          }
          @font-face {
            font-family: "Font Awesome 6 Brands";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("/_next/static/media/fa-brands-400.woff2") format("woff2");
          }
        `}} />
      </head>
      <body suppressHydrationWarning={true}>
        <AnimationProvider>{children}</AnimationProvider>
        <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
