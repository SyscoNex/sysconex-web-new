import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/AiAgency/Header";
import AboutSection from "@/components/AiAgency/AboutSection";
import AboutTwoSection from "@/components/AiAgency/AboutTwoSection";
import BlogSection from "@/components/AiAgency/BlogSection";
import Footer from "@/components/AiAgency/Footer";
import HeroSection from "@/components/AiAgency/HeroSection";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import ServiceSection from "@/components/AiAgency/ServiceSection";
import TeamSection from "@/components/AiAgency/TeamSection";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import TextSliderSection from "@/components/AiAgency/TextSliderSection";
import WorkSection from "@/components/AiAgency/WorkSection";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

export const metadata: Metadata = {
  title: "Sysconex | Premier Software Development & Digital Agency in Sri Lanka",
  description: "Sysconex is a top-tier software development and digital agency based in Sri Lanka, specializing in web design, mobile apps, and custom IT solutions in Colombo, Negombo, and globally.",
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
    "Best Software Agency in Sri Lanka",
    "IT Solutions Colombo",
    "Creative Digital Agency"
],
  creator: "sysconex",
  openGraph: {
    images: ['/assets/images/logo.png']
  },
  other: {
    developer: "sysconex",
  },
};

// all data 
import heroData from "@/constant/AiAgency/hero";
import textSliderData from "@/constant/AiAgency/text-slider";
import aboutTwoData from "@/constant/AiAgency/about2";
import aboutData from "@/constant/AiAgency/about";
import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";
import blogData from "@/constant/AiAgency/blog";



const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-ai-agency">
      <Header />
      <SmoothScroll>
        <main>
          <HeroSection data={heroData}/>
          <TextSliderSection data={textSliderData}/>
          <AboutTwoSection data={aboutTwoData}/>
          <AboutSection data={aboutData}/>
          <ServiceSection />
          <WorkSection />
          <TeamSection />
          <ProcessSection data={processData}/>
          <TestimonialSlider data={testimonialData}/>
          <BlogSection data={blogData}/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
