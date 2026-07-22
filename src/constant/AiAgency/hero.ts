export interface IBrand {
  image: string;
}

export interface HeroData {
  bgImage: string;
  shape1: string;
  shape2: string;
  titleSpanOne: string;
  titleText: string;
  titleSpanTwo: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  brandTitle: string;
  brands: IBrand[];
}

const heroData: HeroData = {
    bgImage: "/assets/imgs/shape/shape-22.webp",
    shape1: "/assets/imgs/shape/shape-20.webp",
    shape2: "/assets/imgs/shape/shape-21.webp",
    titleSpanOne: "Building",
    titleText: "the Digital Future with",
    titleSpanTwo: "Sysconex",
    subtitle: "Empowering businesses through cutting-edge software development and digital innovation",
    primaryBtnText: "Get Started",
    primaryBtnLink: "/ai-agency/contact",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/ai-agency/contact",
    brandTitle: "100+ Trusted Clients Over Worldwide",
    brands: [
      { image: "/assets/images/client_brands/accessara.webp" },
      { image: "/assets/images/client_brands/crownstar.webp" },
      { image: "/assets/images/client_brands/logo-lixr.webp" },
      { image: "/assets/images/client_brands/mrnholdings.webp" },
      { image: "/assets/images/client_brands/mudukatuwa.webp" },
      { image: "/assets/images/client_brands/oceantech.webp" },
      { image: "/assets/images/client_brands/pristinecode_logo.webp" },
      { image: "/assets/images/client_brands/smtholidayplanners.webp" },
      { image: "/assets/images/client_brands/zennaglobal_logo.webp" },
      { image: "/assets/images/client_brands/accessara.webp" },
      { image: "/assets/images/client_brands/crownstar.webp" },
      { image: "/assets/images/client_brands/logo-lixr.webp" },
      { image: "/assets/images/client_brands/mrnholdings.webp" },
      { image: "/assets/images/client_brands/mudukatuwa.webp" },
      { image: "/assets/images/client_brands/oceantech.webp" },
      { image: "/assets/images/client_brands/pristinecode_logo.webp" },
      { image: "/assets/images/client_brands/smtholidayplanners.webp" },
      { image: "/assets/images/client_brands/zennaglobal_logo.webp" },
      { image: "/assets/images/client_brands/accessara.webp" },
      { image: "/assets/images/client_brands/crownstar.webp" },
      { image: "/assets/images/client_brands/logo-lixr.webp" },
      { image: "/assets/images/client_brands/mrnholdings.webp" },
      { image: "/assets/images/client_brands/mudukatuwa.webp" },
      { image: "/assets/images/client_brands/oceantech.webp" },
      { image: "/assets/images/client_brands/pristinecode_logo.webp" },
      { image: "/assets/images/client_brands/smtholidayplanners.webp" },
      { image: "/assets/images/client_brands/zennaglobal_logo.webp" },
    ],
  };  
  
  export default heroData;