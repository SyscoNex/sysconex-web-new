import Link from "next/link";
import React from "react";

const ContactMetaSection:React.FC = () => {
  return (
    <div className="contact-meta-area">
      <div className="container">
        <div className="contact-meta-area-inner section-spacing">
          <div className="meta-wrapper-box move-anim">
            <div className="meta-wrapper">
              <div className="contact-meta-box">
                <div className="thumb">
                  <img src="/assets/imgs/icon/icon-22.webp" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">Email Us</h3>
                  <div className="meta-list">
                    <ul>
                      <li>
                        <Link href="mailto:info@sysconex.com">info@sysconex.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contact-meta-box active">
                <div className="thumb">
                  <img src="/assets/imgs/icon/icon-23.webp" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">Phone Us</h3>
                  <div className="meta-list">
                    <ul>
                      <li>
                        <Link href="tel:+94761176061">+94 76 117 6061</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contact-meta-box">
                <div className="thumb">
                  <img src="/assets/imgs/icon/icon-24.webp" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">Meet Us</h3>
                  <div className="meta-list">
                    <ul>
                      <li>
                        <Link href="https://cal.com/sysconex/30min" target="_blank" rel="noopener noreferrer">
                          Schedule a Meeting
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMetaSection;
