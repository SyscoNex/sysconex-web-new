
export interface IProject {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link: string;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: IProject[];
}

const workData:WorkData = {
    sectionSubtitle: "Our Portfolio",
    sectionTitle: "Selected works",
    viewAllText: "See All Works",
    viewAllLink: "/ai-agency/portfolio",
    projects: [
      {
        id: 1,
        title: "MRN Life Digital Platform",
        tags: ["Corporate Identity"],
        image: "/assets/images/case-studies/mrnlife.webp",
        link: "https://mrnlife.com",
      },
      {
        id: 2,
        title: "Lixr Innovation Portal",
        tags: ["Custom Web App", "Tech Innovation"],
        image: "/assets/images/case-studies/lixr.webp",
        link: "https://lixrinnovation.com",
      },
      {
        id: 3,
        title: "Ocean Tech Solutions Hub",
        tags: ["Software Development", "B2B"],
        image: "/assets/images/case-studies/oceantech.webp",
        link: "https://oceantech.lk",
      },
      {
        id: 4,
        title: "Accessara Corporate Website",
        tags: ["Web Design", "Digital Branding"],
        image: "/assets/images/case-studies/accessara.webp",
        link: "https://accessara.com",
      },
      {
        id: 5,
        title: "Crownstar Business Suite",
        tags: ["Enterprise Application"],
        image: "/assets/images/case-studies/crownstar.webp",
        link: "https://crownstar.com.au",
      },
    ],
  };
  
  export default workData;
  