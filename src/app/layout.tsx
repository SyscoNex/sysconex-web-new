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
        url: "/assets/imgs/logo/logo-dark.webp",
        width: 1200,
        height: 630,
        alt: "Sysconex Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/imgs/logo/logo-dark.webp"],
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
      <body suppressHydrationWarning={true}>
        <AnimationProvider>{children}</AnimationProvider>
        <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
