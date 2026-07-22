import { ReactElement } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import Header from "@/components/AiAgency/Header";
import Footer from "@/components/AiAgency/Footer";
import PortfolioDetails from "@/components/AiAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/AiAgency/PortfolioDetails/PortfolioSliderSection";
import { portfolioItems } from "@/constant/AiAgency/work";

export const metadata: Metadata = {
  title: "Portfolio Details || Sysconex",
  description: "Dive into detailed case studies and project insights with Sysconex.",
};

type Props = {
  params: Promise<{ slug: string }>;
};

const PortfolioDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const projectData = portfolioItems.find((item) => item.slug === slug);
  const otherProjects = portfolioItems.filter((item) => item.slug !== slug);

  if (!projectData) {
    notFound();
  }

  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="Sysconex"
            subTitle={projectData.title}
            pageName="PORTFOLIO DETAILS"
          />
          <PortfolioDetails data={projectData} />
          <PortfolioSliderSection data={otherProjects} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default PortfolioDetailsPage;
