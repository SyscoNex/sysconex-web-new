
import { Metadata } from "next";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import Header from "@/components/AiAgency/Header";
import Footer from "@/components/AiAgency/Footer";
import PortfolioDetails from "@/components/AiAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/AiAgency/PortfolioDetails/PortfolioSliderSection";
import { portfolioItems } from "@/constant/AiAgency/work";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || "";
  const formattedSlug = slug.replace(/-/g, ' ');
  const displayTitle = formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1);
  return {
    title: `${displayTitle} | Sysconex`,
    description: `Discover this featured project in our portfolio. See how Sysconex delivers custom software and web design solutions in Colombo and Negombo.`,
    keywords: [
      "Sysconex",
      "Software Development in Sri Lanka",
      "Digital Agency Sri Lanka",
      "Software Company Colombo",
      "Web Development Negombo",
      "IT Consulting",
      "Sysconex Portfolio Project",
      "Software Case Study Sri Lanka",
      formattedSlug
    ],
    creator: "sysconex",
    openGraph: {
      images: ['/assets/images/logo.png']
    },
    other: {
      developer: "sysconex",
    },
  };
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
