import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import TeamSection from "@/components/AiAgency/TeamTwoSection";
import ProcessSection from "@/components/AiAgency/ProcessSection";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";


// all data 
import teamData from "@/constant/AiAgency/teamTwo";
import processData from "@/constant/AiAgency/process";
import testimonialData from "@/constant/AiAgency/testimonial";



export const metadata: Metadata = {
  title: "Our Team | The Experts Behind Sysconex",
  description: "Meet the brilliant minds at Sysconex. Our team of expert developers, designers, and strategists are driving digital transformation in Sri Lanka.",
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
    "Sysconex Team",
    "Software Engineers Sri Lanka",
    "Web Designers Colombo",
    "App Developers"
],
  creator: "sysconex",
  openGraph: {
    images: ['/assets/images/logo.png']
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
            subTitle="Members"
            pageName="AGENCY MEMBERS"
          />
          <TeamSection all={true} data={teamData}/>
          <ProcessSection data={processData}/>
          <TestimonialSlider type="v2" data={testimonialData}/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
