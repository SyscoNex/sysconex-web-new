import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FaqSection from "@/components/AiAgency/Faq/FaqSection";
import ContactSection from "@/components/AiAgency/Contact/ContactSection";
import Footer from "@/components/AiAgency/Footer";
import Header from "@/components/AiAgency/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data
import contactData from "@/constant/AiAgency/Contact/contact";
import faqData from "@/constant/AiAgency/faq/faq-data";

export const metadata: Metadata = {
  title: "FAQ | Sysconex Software Development & IT Services",
  description: "Find answers to frequently asked questions about our software development lifecycle, web design processes, and digital agency services at Sysconex.",
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
    "Sysconex FAQ",
    "Software Development Questions",
    "Hiring IT Agency"
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
          <Breadcrumb title="Sysconex" subTitle="FAQ's" pageName="AGENCY FAQ's" />
          <FaqSection data={faqData} imageSrc="/assets/imgs/gallery/faq_ai_research.png" />
          <ContactSection data={contactData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
