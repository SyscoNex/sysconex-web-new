export interface WorkSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface PortfolioItem {
  title: string;
  tags: string[];
  image: string;
  link: string;
}

export const workSectionContent: WorkSectionContent = {
  subtitle: "OUR PORTFOLIO",
  title: "Portfolio of Digital Excellence",
  completedProjects: "50+",
  projectsText: "Completed Projects",
  exploreLink: "/portfolio",
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "MRN Life Digital Platform",
    tags: ["Corporate Identity"],
    image: "/assets/images/case-studies/mrnlife.webp",
    link: "https://mrnlife.com",
  },
  {
    title: "Lixr Innovation Portal",
    tags: ["Custom Web App", "Tech Innovation"],
    image: "/assets/images/case-studies/lixr.webp",
    link: "https://lixrinnovation.com",
  },
  {
    title: "Ocean Tech Solutions Hub",
    tags: ["Software Development", "B2B"],
    image: "/assets/images/case-studies/oceantech.webp",
    link: "https://oceantech.lk",
  },
  {
    title: "Accessara Corporate Website",
    tags: ["Web Design", "Digital Branding"],
    image: "/assets/images/case-studies/accessara.webp",
    link: "https://accessara.com",
  },
  {
    title: "Crownstar Business Suite",
    tags: ["Enterprise Application"],
    image: "/assets/images/case-studies/crownstar.webp",
    link: "https://crownstar.com.au",
  },
];