import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/AiAgency/common/ChooseUsSection";
import ContactMetaSection from "@/components/AiAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/AiAgency/Contact/ContactSection";
import Header from "@/components/AiAgency/Header";
import Footer from "@/components/AiAgency/Footer";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data
import contactData from "@/constant/AiAgency/Contact/contact";
import chooseUsData from "@/constant/AiAgency/common/choose-us";

export const metadata: Metadata = {
  title: "Contact Us | Sysconex - Software Development in Sri Lanka",
  description: "Get in touch with Sysconex for your next big project. We offer expert software development, web design, and IT consulting services in Colombo and Negombo.",
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
    "Contact Sysconex",
    "Hire Developers Sri Lanka",
    "Tech Agency Negombo",
    "Software Quote"
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
            subTitle="Contact"
            pageName="AGENCY CONTACT"
          />
          <ContactMetaSection />
          <ContactSection data={contactData} />
          <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default Home;
