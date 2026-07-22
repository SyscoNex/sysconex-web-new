export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
  icon?: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {
  logo: "/assets/images/logo_black.png",
  menus: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  closeIcon: "fas fa-times",
  title: "Hello There!",
  description:
    "We offer comprehensive range of services to help your business thrive.",
  cta: {
    text: "Let’s Connect",
    href: "/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [
    "/assets/imgs/gallery/image-48.webp",
    "/assets/imgs/gallery/image-49.webp",
    "/assets/imgs/gallery/image-50.webp",
    "/assets/imgs/gallery/image-51.webp",
  ],
  contact: {
    phone: { text: "+94 76 117 6061", href: "tel:+94761176061" },
    email: { text: "info@sysconex.com", href: "mailto:info@sysconex.com" },
    address: "Negombo, Sri Lanka",
  },
  social: [
    { label: "FB", href: "https://www.facebook.com/people/SyscoNex-Solutions/61578193958732/", icon: "fa-brands fa-facebook-f" },
    { label: "LN", href: "https://lk.linkedin.com/company/sysconex-solutions", icon: "fa-brands fa-linkedin-in" },
  ],
  footerLogo: "/assets/images/logo_black.png",
};

export default sidebar;
