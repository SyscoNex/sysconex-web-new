import { PortfolioItem, portfolioItems } from "./work";

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: PortfolioItem[];
}

const workData: WorkData = {
  sectionSubtitle: "Our Portfolio",
  sectionTitle: "Selected works",
  viewAllText: "See All Works",
  viewAllLink: "/ai-agency/portfolio",
  projects: portfolioItems,
};

export default workData;