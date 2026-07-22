import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ServiceSection from "@/components/AiAgency/ServiceDetails/ServiceSection";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import ServiceDetailsSection from "@/components/AiAgency/ServiceDetails/ServiceDetailsSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import FaqSection from "@/components/AiAgency/Faq/FaqSection";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

import { notFound } from "next/navigation";

// all data
import processData from "@/constant/AiAgency/process";
import { servicesData } from "@/constant/AiAgency/service";
import textSliderData from "@/constant/AiAgency/text-slider";

type Props = {
  params: Promise<{ slug: string }>;
};

const ServiceDetailsPage = async ({ params }: Props) => {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const mappedServiceData = {
    subtitle: "Our Services",
    title: service.overviewTitle,
    description: service.overviewDescription,
    buttons: [
      {
        href: "/ai-agency/contact",
        style: "t-btn t-btn-circle",
        icon: "fa-solid fa-arrow-right",
      },
      {
        href: "/ai-agency/contact",
        style: "t-btn t-btn-primary",
        label: "Get Started",
      },
      {
        href: "/ai-agency/contact",
        style: "t-btn t-btn-circle",
        icon: "fa-solid fa-arrow-right",
      },
    ],
    services: service.serviceFeatures,
    gallery: service.gallery,
  };

  const mappedServiceDetailsData = {
    sectionHeader: {
      subtitle: service.solutionSubtitle,
      title: service.solutionTitle,
    },
    video: {
      src: service.videoUrl,
      type: "video/mp4",
    },
    content: {
      title: service.contentTitle,
      paragraphs: service.paragraphs,
    },
  };

  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="Sysconex"
            subTitle={service.title}
            pageName="AGENCY SERVICES"
          />
          <ServiceSection data={mappedServiceData} />
          <ProcessSection type="v2" data={processData} />
          <ServiceDetailsSection data={mappedServiceDetailsData} />
          <TextSliderSection data={textSliderData} />
          <FaqSection type={2} data={service.faqs} imageSrc={service.faqImage} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default ServiceDetailsPage;
