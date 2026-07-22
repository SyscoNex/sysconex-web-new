import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import AboutSection from "@/components/AiAgency/AboutSection";
import VideoSection from "@/components/AiAgency/About/VideoSection";
import BrandSection from "@/components/AiAgency/BrandSection";
import TeamsSection from "@/components/AiAgency/TeamSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import BlogSection from "@/components/AiAgency/BlogSection";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// component data
import aboutData from "@/constant/AiAgency/about";
import videoData from "@/constant/AiAgency/About/video";
import brandData from "@/constant/AiAgency/brand";
import textSliderData from "@/constant/AiAgency/text-slider";
import blogData from "@/constant/AiAgency/blog";

export const metadata: Metadata = {
  title: "About Us | Sysconex - Leading Tech & Digital Agency",
  description: "Learn about Sysconex, our mission, and our expert team. We are dedicated to delivering innovative software and digital solutions across Sri Lanka and globally.",
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
    "About Sysconex",
    "Our Team",
    "Tech Experts Sri Lanka",
    "Best Web Developers"
],
  creator: "sysconex",
  openGraph: {
    images: ['/assets/imgs/logo/logo-dark.webp']
  },
  other: {
    developer: "sysconex",
  },
};

const AboutPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb title="ABOUT" subTitle="Sysconex" pageName="ABOUT AGENCY" />
          <AboutSection data={aboutData} />
          <VideoSection data={videoData} />
          <BrandSection data={brandData} brandSix={true} />
          <TeamsSection />
          <TextSliderSection data={textSliderData} />
          <BlogSection data={blogData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default AboutPage;
