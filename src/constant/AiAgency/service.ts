export interface ServiceSectionData {
  subtitle: string;
  title: string;
  exploreLink: string;
}

export interface Service {
  id: string;
  title: string;
  projectsAvailable: number;
  projectsDone: number;
  image: string;
  description: string;
  detailLink: string;
}

export const serviceSectionData: ServiceSectionData = {
  subtitle: "Our Services",
  title: "Our Best Software Solutions",
  exploreLink: "/ai-agency/services",
};

export const servicesData: Service[] = [
  {
    id: "web-development",
    title: "Custom Website Development",
    projectsAvailable: 120,
    projectsDone: 85,
    image: "/assets/images/service/service_web_dev.png",
    description:
      "We build robust, scalable, and beautifully designed custom websites and web applications tailored exactly to your business goals and user needs.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "mobile-development",
    title: "Custom Mobile Application Development",
    projectsAvailable: 95,
    projectsDone: 64,
    image: "/assets/images/service/service_mobile_dev.png",
    description:
      "Our team engineers high-performance native and cross-platform mobile applications that provide seamless, engaging experiences on both iOS and Android devices.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "social-marketing",
    title: "Social Marketing & Digital Marketing",
    projectsAvailable: 150,
    projectsDone: 110,
    image: "/assets/images/service/service_social_marketing.png",
    description:
      "We design data-driven social media marketing campaigns that elevate your brand presence, engage your target audience, and drive measurable conversions.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "ai-research",
    title: "AI base Research Application development",
    projectsAvailable: 45,
    projectsDone: 28,
    image: "/assets/images/service/service_ai_research.png",
    description:
      "We develop cutting-edge, AI-driven research applications that leverage machine learning and advanced data modeling to solve complex analytical challenges.",
    detailLink: "/ai-agency/service-details",
  },
];
