import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import WorkSection from "@/components/AiAgency/WorkSection";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/Animation/SmoothScroll";

// all data 

export const metadata: Metadata = {
  title: "Our Work | Sysconex - Software & Web Design Portfolio",
  description: "Discover our successful case studies and creative portfolio. See how Sysconex transforms businesses with cutting-edge software and digital designs.",
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
    "Software Portfolio",
    "Web Design Case Studies",
    "Sysconex Projects",
    "Digital Transformation"
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
            subTitle="Portfolio"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkSection all={true} type="v2"/>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
