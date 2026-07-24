export interface IButtons {
  href: string;
  style: string;
  icon?: string;
  label?: string;
}

export interface IGallery {
  src: string;
  alt: string;
}

export interface IServiceData {
  subtitle: string;
  title: string;
  description: string;
  buttons: IButtons[];
  services: string[];
  gallery: IGallery[];
}

const serviceData: IServiceData = {
  subtitle: "Our Services",
  title: "Overview of Web design and improvements",
  description:
    "Sysconex, a digital agency crafted by a dedicated team of creatives champions the essence of simplicity and elegance.",
  buttons: [
    {
      href: "/contact",
      style: "t-btn t-btn-circle",
      icon: "fa-solid fa-arrow-right",
    },
    {
      href: "/contact",
      style: "t-btn t-btn-primary",
      label: "Get Started",
    },
    {
      href: "/contact",
      style: "t-btn t-btn-circle",
      icon: "fa-solid fa-arrow-right",
    },
  ],
  services: [
    "UI/UX Design",
    "Branding",
    "Content Production",
    "User Interface Design",
    "Modern Animation",
    "Brand Identity",
    "User Interface",
    "User Experience",
    "Responsive Design",
  ],
  gallery: [
    {
      src: "/assets/imgs/gallery/service_gallery_1.png",
      alt: "Sysconex team collaborating on digital solutions",
    },
    {
      src: "/assets/imgs/gallery/service_gallery_2.png",
      alt: "Modern web design and development showcase",
    },
  ],
};

export default serviceData;
