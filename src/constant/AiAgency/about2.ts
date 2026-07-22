export interface AboutTwoData {
  thumb1: {
    shape1: string;
    image: string;
    alt1: string;
    alt2: string;
  };
  thumb2: {
    logo: string;
    logoAlt: string;
    icon: string;
    iconAlt: string;
    text: string;
    videoLink: string;
  };
  thumb3: {
    brandText: string;
    image: string;
    alt: string;
  };
}

const aboutTwoContent: AboutTwoData = {
  thumb1: {
    shape1: "/assets/imgs/shape/shape-50.webp",
    image: "/assets/images/about/team_collaboration.png",
    alt1: "Decorative shape",
    alt2: "Sysconex Development Team",
  },
  thumb2: {
    logo: "",
    logoAlt: "Sysconex Logo",
    icon: "/assets/imgs/icon/icon-27.webp",
    iconAlt: "Play icon",
    text: "Play intro video",
    videoLink: "/assets/video/SYSCONEX_INTRO.mp4",
  },
  thumb3: {
    brandText: "SYSCONEX",
    image: "/assets/images/about/tech_abstract.png",
    alt: "Digital Development Abstract",
  },
};
export default aboutTwoContent;
