import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/AiAgency/Header";
import Footer from "@/components/CreativeAgency/Footer";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Sysconex",
  description: "Review the privacy policy of Sysconex. We prioritize the security and confidentiality of our clients in all our software and digital services.",
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
    "Privacy Policy",
    "Sysconex Privacy",
    "Data Security"
],
  creator: "sysconex",
  openGraph: {
    images: ['/assets/imgs/logo/logo-dark.webp']
  },
  other: {
    developer: "sysconex",
  },
};

const PrivacyPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="Sysconex"
            subTitle="Privacy Policy"
            pageName="PRIVACY POLICY"
          />
          <section className="container" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
            <div className="row">
              <div className="col-12">
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  At Sysconex, accessible from our website and through our digital services, one of our main priorities is the privacy of our clients and visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Sysconex and how we use it.
                </p>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at info@sysconex.com.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>1. Information We Collect</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  As a software development and digital agency, we collect information that helps us deliver tailored digital solutions. This includes:
                </p>
                <ul className="mb-4" style={{ listStyleType: "disc", marginLeft: "30px", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <li className="mb-2"><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details provided when you contact us or request a proposal.</li>
                  <li className="mb-2"><strong>Project Data:</strong> Technical specifications, business processes, credentials, and digital assets provided by you for the execution of a project.</li>
                  <li className="mb-2"><strong>Log Files & Analytics:</strong> Standard data such as IP addresses, browser types, Internet Service Provider (ISP), date/time stamps, and referring pages to analyze trends and administer the site.</li>
                </ul>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>2. How We Use Your Information</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  We use the information we collect in various ways, including to:
                </p>
                <ul className="mb-4" style={{ listStyleType: "disc", marginLeft: "30px", fontSize: "1.1rem", lineHeight: "1.7" }}>
                  <li className="mb-2">Provide, operate, and maintain our web development and digital marketing services.</li>
                  <li className="mb-2">Design, build, and deploy custom software applications tailored to your business needs.</li>
                  <li className="mb-2">Improve, personalize, and expand our website and service offerings.</li>
                  <li className="mb-2">Communicate with you regarding project updates, customer service, and promotional information.</li>
                  <li className="mb-2">Ensure the security and integrity of the applications and digital campaigns we manage.</li>
                </ul>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>3. Sharing of Information</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Sysconex does not sell, trade, or rent your personal information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners. We may also utilize trusted third-party service providers (such as hosting platforms, cloud infrastructure providers, or analytics services) to help us operate our business and administer activities on our behalf, provided that those parties agree to keep this information confidential.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>4. Data Security</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  We adopt appropriate data collection, storage, and processing practices, along with robust security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, user credentials, and project data stored on our systems.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>5. Third-Party Privacy Policies</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Sysconex's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>6. Your Data Protection Rights</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                  The right to access, rectify, erase, restrict processing, object to processing, and data portability. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>7. Changes to This Privacy Policy</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
};
export default PrivacyPage;
