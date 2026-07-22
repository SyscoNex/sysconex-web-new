import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import ServiceSection from "@/components/AiAgency/ServiceSection";
import ChooseUsSection from "@/components/AiAgency/common/ChooseUsSection";
import TestimonialSection from "@/components/AiAgency/TestimonialSection";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";
import chooseUsData from "@/constant/AiAgency/common/choose-us";

export const metadata: Metadata = {
  title: "Our Services | Custom Software & Web Development - Sysconex",
  description: "Explore Sysconex's comprehensive digital services, including UI/UX design, custom web and mobile app development, and enterprise IT consulting in Sri Lanka.",
  keywords: [
    "Sysconex",
    "Software Development in Sri Lanka",
    "Digital Agency Sri Lanka",
    "Software Company Colombo",
    "Web Development Negombo",
    "Web Design Sri Lanka",
    "Mobile App Development",
    "IT Consulting",
    "Custom Software Solutions",
    "Tech Agency",
    "Web Development Services",
    "App Development Colombo",
    "UI/UX Design Sri Lanka",
    "Enterprise IT Services"
],
  creator: "sysconex",
  openGraph: {
    images: ['/assets/imgs/logo/logo-dark.webp']
  },
  other: {
    developer: "sysconex",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="Sysconex"
            subTitle="Services"
            pageName="AGENCY SERVICES"
          />
          <ServiceSection />
          <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
          <ProcessSection data={processData}/>
          <TestimonialSection type="v2" data={testimonialData}/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
