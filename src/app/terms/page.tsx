import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/AiAgency/Header";
import Footer from "@/components/CreativeAgency/Footer";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms and Conditions || Sysconex",
  description: "Terms and Conditions of Sysconex",
};

const TermsPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="Sysconex"
            subTitle="Terms & Conditions"
            pageName="TERMS AND CONDITIONS"
          />
          <section className="container" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
            <div className="row">
              <div className="col-12">
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Welcome to Sysconex. These terms and conditions outline the rules and regulations for the use of Sysconex's Website and our software development and digital agency services.
                </p>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  By accessing this website and utilizing our services, we assume you accept these terms and conditions in full. Do not continue to use Sysconex's services if you do not accept all of the terms and conditions stated on this page.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>1. Scope of Services</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Sysconex is a full-service software development and digital agency. We provide a range of services including, but not limited to, custom software development, mobile application development, web design, digital marketing, SEO, and IT consulting. The specific deliverables, timelines, and costs for any project will be outlined in a separate Statement of Work (SOW) or project agreement.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>2. User Responsibilities</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Clients are expected to provide timely feedback, necessary access credentials, and clear requirements to ensure the successful delivery of projects. Delays in providing required information may result in adjustments to project timelines.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>3. Intellectual Property</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Upon full payment for our services, the intellectual property rights of the custom software or digital assets created specifically for the client will be transferred to the client, unless otherwise agreed upon in writing. Sysconex retains the right to use non-confidential project details and visuals in our portfolio and marketing materials. We also retain ownership of any pre-existing code libraries or proprietary tools used during development.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>4. Payment Terms</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Invoices are to be paid in accordance with the schedule defined in the project agreement. We typically require an upfront deposit before commencing work. Late payments may result in the suspension of ongoing services until the account is settled.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>5. Confidentiality</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Both parties agree to maintain the confidentiality of any proprietary information shared during the course of a project. We take data protection seriously and implement industry-standard practices to secure your sensitive information.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>6. Limitation of Liability</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Sysconex strives to deliver high-quality, bug-free software and effective digital campaigns. However, we cannot guarantee that our solutions will be completely error-free or uninterrupted. Sysconex shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our deliverables.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>7. Termination</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Either party may terminate a project with written notice if the other party breaches any material term of this agreement and fails to cure such breach within a reasonable timeframe. Upon termination, the client is responsible for paying for all work completed up to the date of termination.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>8. Changes to Terms</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Sysconex reserves the right to revise these terms and conditions at any time. By continuing to use our website and services, you agree to be bound by the current version of these terms and conditions.
                </p>

                <h4 className="mt-5 mb-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>9. Contact Information</h4>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  If you have any queries regarding our Terms and Conditions, please contact us at info@sysconex.com.
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
export default TermsPage;
