export interface WorkSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface IMeta {
  title: string;
  text: string;
}

export interface IOverview {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface IProblem {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface ISolution {
  title: string;
  paragraphs: string[];
}

export interface PortfolioItem {
  id?: number;
  slug: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
  meta: IMeta[];
  overview: IOverview;
  problems: IProblem;
  solutions: ISolution;
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
    id: 1,
    slug: "mrn-life",
    title: "MRN Life",
    tags: ["Corporate Identity"],
    image: "/assets/images/case-studies/mrnlife.webp",
    link: "https://mrnlife.com",
    meta: [
      { title: "Client", text: "MRN Life" },
      { title: "Category", text: "Corporate Identity" },
      { title: "Platform", text: "Web Application" },
      { title: "Location", text: "Global" },
    ],
    overview: {
      title: "Overview",
      paragraphs: [
        "MRN Life required a comprehensive digital overhaul to establish a strong corporate identity. The goal was to create an intuitive platform that not only communicates their brand values but also provides a seamless experience for their users.",
        "Our team focused on building a modern, responsive interface that prioritized user engagement and accessibility, laying a solid foundation for their future digital growth.",
      ],
      images: [
        "/assets/images/case-studies/mrnlife.webp",
        // "/assets/imgs/gallery/image-27.webp",
        // "/assets/imgs/gallery/image-28.webp",
        // "/assets/imgs/gallery/image-29.webp",
      ],
    },
    problems: {
      title: "The Challenge",
      paragraphs: [
        "The client was previously operating with a fragmented digital presence, leading to low user retention and a lack of brand cohesiveness. Their legacy platform was difficult to navigate and didn't reflect their premium market positioning.",
      ],
      images: [
        //"/assets/imgs/gallery/image-30.webp",
        // "/assets/imgs/gallery/image-31.webp",
      ],
    },
    solutions: {
      title: "Our Solution",
      paragraphs: [
        "We executed a complete redesign from the ground up, implementing a unified design system and migrating their core services to a highly scalable architecture. This resulted in a 40% increase in user engagement within the first month of launch.",
      ],
    },
  },
  {
    id: 2,
    slug: "lixr",
    title: "Lixr",
    tags: ["Custom Web App", "Tech Innovation"],
    image: "/assets/images/case-studies/lixr.webp",
    link: "https://lixrinnovation.com",
    meta: [
      { title: "Client", text: "Lixr Innovation" },
      { title: "Category", text: "Custom Web App" },
      { title: "Technology", text: "React / Node.js" },
      { title: "Scope", text: "Full Stack Development" },
    ],
    overview: {
      title: "Overview",
      paragraphs: [
        "Lixr sought to build an innovation portal that could serve as a central hub for tech pioneers and industry leaders. The platform needed to support complex data visualizations and real-time collaboration tools.",
        "We collaborated closely with their stakeholders to design a high-performance web application capable of handling heavy data loads while maintaining a sleek, futuristic aesthetic.",
      ],
      images: [
        "/assets/images/case-studies/lixr.webp",
        //"/assets/imgs/gallery/image-27.webp",
        //"/assets/imgs/gallery/image-28.webp",
        //"/assets/imgs/gallery/image-29.webp",
      ],
    },
    problems: {
      title: "The Challenge",
      paragraphs: [
        "Building a platform that fosters real-time collaboration across global teams required overcoming significant latency and data synchronization hurdles. The existing market solutions were too rigid and failed to offer the necessary customization.",
      ],
      images: [
        //"/assets/imgs/gallery/image-30.webp",
        //"/assets/imgs/gallery/image-31.webp",
      ],
    },
    solutions: {
      title: "Our Solution",
      paragraphs: [
        "We engineered a custom web socket-driven backend paired with a dynamic React frontend. This bespoke architecture allows users to interact in real-time with zero perceived latency, completely transforming how their teams collaborate on innovation projects.",
      ],
    },
  },
  {
    id: 3,
    slug: "ocean-tech",
    title: "Ocean Tech",
    tags: ["Software Development", "B2B"],
    image: "/assets/images/case-studies/oceantech.webp",
    link: "https://oceantech.lk",
    meta: [
      { title: "Client", text: "Ocean Tech Negombo"},
      { title: "Sector", text: "B2B Software" },
      { title: "Role", text: "E-commerce" },
      { title: "Deliverables", text: "Web Platform & CMS" },
    ],
    overview: {
      title: "Overview",
      paragraphs: [
        "Ocean Tech required a B2B solutions hub to streamline their service offerings and client onboarding process. As a leading tech firm in Sri Lanka, their digital presence needed to reflect their authority and expertise.",
        "We designed a comprehensive digital ecosystem that integrates their various software solutions into one accessible, easy-to-manage platform for enterprise clients.",
      ],
      images: [
        "/assets/images/case-studies/oceantech.webp",
        //"/assets/imgs/gallery/image-27.webp",
        //"/assets/imgs/gallery/image-28.webp",
        //"/assets/imgs/gallery/image-29.webp",
      ],
    },
    problems: {
      title: "The Challenge",
      paragraphs: [
        "Ocean Tech's vast array of B2B services made it difficult for potential clients to quickly find the solutions they needed. The onboarding process was entirely manual, causing delays and lost conversion opportunities.",
      ],
      images: [
        //"/assets/imgs/gallery/image-30.webp",
        //"/assets/imgs/gallery/image-31.webp",
      ],
    },
    solutions: {
      title: "Our Solution",
      paragraphs: [
        "We developed a sophisticated, automated solutions hub with intelligent search functionality and self-serve onboarding pipelines. The new platform acts as a 24/7 digital salesperson, drastically reducing the time-to-close for enterprise contracts.",
      ],
    },
  },
  {
    id: 4,
    slug: "accessara",
    title: "Accessara",
    tags: ["Web Design", "Digital Branding"],
    image: "/assets/images/case-studies/accessara.webp",
    link: "https://accessara.com",
    meta: [
      { title: "Client", text: "Accessara" },
      { title: "Service", text: "Digital Branding" },
      { title: "Framework", text: "Next.js" },
      { title: "Launch", text: "2024" },
    ],
    overview: {
      title: "Overview",
      paragraphs: [
        "Accessara approached us for a complete digital rebranding. They needed a corporate website that stood out in a saturated market, highlighting their unique value proposition through striking visuals and clear messaging.",
        "Our approach was to combine bold typography with micro-animations to create an immersive browsing experience that keeps visitors engaged from the moment they land on the page.",
      ],
      images: [
        "/assets/images/case-studies/accessara.webp",
        //"/assets/imgs/gallery/image-27.webp",
        //"/assets/imgs/gallery/image-28.webp",
        //"/assets/imgs/gallery/image-29.webp",
      ],
    },
    problems: {
      title: "The Challenge",
      paragraphs: [
        "The brand suffered from a high bounce rate due to an outdated, text-heavy website that failed to communicate their core services effectively on mobile devices.",
      ],
      images: [
        //"/assets/imgs/gallery/image-30.webp",
        //"/assets/imgs/gallery/image-31.webp",
      ],
    },
    solutions: {
      title: "Our Solution",
      paragraphs: [
        "We crafted a mobile-first digital experience, prioritizing visual storytelling over dense copy. The resulting Next.js application is blazingly fast, SEO-optimized, and has reduced the bounce rate by over 60%.",
      ],
    },
  },
  {
    id: 5,
    slug: "crownstar",
    title: "Crownstar",
    tags: ["Enterprise Application"],
    image: "/assets/images/case-studies/crownstar.webp",
    link: "https://crownstar.com.au",
    meta: [
      { title: "Client", text: "Crownstar Australia" },
      { title: "Industry", text: "Enterprise Solutions" },
      { title: "Framework", text: "Next.js" },
      { title: "Focus", text: "UI/UX Design" },
    ],
    overview: {
      title: "Overview",
      paragraphs: [
        "Crownstar Business Suite is an enterprise-grade SaaS platform tailored for Australian businesses. They needed a highly functional, intuitive interface capable of handling complex administrative tasks without overwhelming the user.",
        "We partnered with their internal engineering team to redesign the entire user experience, simplifying complex workflows and introducing an elegant design system.",
      ],
      images: [
        "/assets/images/case-studies/crownstar.webp",
        //"/assets/imgs/gallery/image-27.webp",
        //"/assets/imgs/gallery/image-28.webp",
        //"/assets/imgs/gallery/image-29.webp",
      ],
    },
    problems: {
      title: "The Challenge",
      paragraphs: [
        "Enterprise software is notorious for being clunky and difficult to learn. Crownstar's original suite suffered from deep, confusing navigation menus and a steep learning curve that hindered user adoption.",
      ],
      images: [
        //"/assets/imgs/gallery/image-30.webp",
        //"/assets/imgs/gallery/image-31.webp",
      ],
    },
    solutions: {
      title: "Our Solution",
      paragraphs: [
        "We conducted extensive user research to map out the most critical workflows. By implementing a modular dashboard and contextual navigation, we transformed a complex enterprise tool into an intuitive suite that users actually enjoy working with.",
      ],
    },
  },
];