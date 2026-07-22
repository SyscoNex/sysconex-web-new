import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import WorkTwoSection from "@/components/AiAgency/WorkTwoSection";
import Footer from "@/components/AiAgency/Footer";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data 
import workTwoData from "@/constant/AiAgency/workTwo";
import testimonialData from "@/constant/AiAgency/testimonial";

export const metadata: Metadata = {
  title: "Our Work Showcase | Sysconex Portfolio",
  description: "Browse our interactive portfolio showcase. Discover how Sysconex delivers top-tier software development and web design projects in Sri Lanka.",
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
    "Interactive Portfolio",
    "Tech Showcase",
    "Digital Agency Projects"
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
            subTitle="Portfolio Slider"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkTwoSection type={3} pageInnerSlider={true} data={workTwoData}/>
          <TestimonialSlider type="v2" data={testimonialData}/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
