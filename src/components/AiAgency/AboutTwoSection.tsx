"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Image from "next/image";
import { AboutTwoData } from "@/constant/AiAgency/about2";

interface AboutTwoSectionProps {
  data: AboutTwoData;
}

const AboutTwoSection: React.FC<AboutTwoSectionProps> = ({
  data: aboutTwoData,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="about-area-6 position-relative">
        <div className="about-area-6-inner">
          <div className="section-content fade-anim" suppressHydrationWarning={true}>
            {/* Thumb 1 */}
            <div className="thumb thumb-1">
              <div className="shape-1">
                <Image
                  src={aboutTwoData?.thumb1?.shape1}
                  alt={aboutTwoData?.thumb1?.alt1 || "shape"}
                  width={300}
                  height={300}
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="image img_anim_reveal" suppressHydrationWarning={true}>
                <Image
                  src={aboutTwoData?.thumb1?.image}
                  alt={aboutTwoData?.thumb1?.alt2 || "main image"}
                  width={500}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 500px"
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>

            {/* Thumb 2 */}
            <div className="thumb thumb-2">
              {aboutTwoData?.thumb2?.logo && (
                <div className="shape-1">
                  <Image
                    src={aboutTwoData?.thumb2?.logo}
                    alt={aboutTwoData?.thumb2?.logoAlt || "logo"}
                    width={120}
                    height={60}
                    loading="lazy"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              )}

              {/* Video Button */}
              <div className="video-button">
                <button
                  className="video-popup"
                  onClick={() => setOpen(true)}
                  aria-label="Play Video"
                >
                  <Image
                    src={aboutTwoData?.thumb2?.icon}
                    alt={aboutTwoData?.thumb2?.iconAlt || "play icon"}
                    width={60}
                    height={60}
                    loading="lazy"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <span className="text">
                    {aboutTwoData?.thumb2?.text || "Play intro video"}
                  </span>
                </button>
              </div>

              {/* Video background (optional) */}
              <div className="video">
                <video loop muted preload="metadata" playsInline aria-label="Sysconex intro video">
                  <source
                    src={aboutTwoData?.thumb2?.videoLink}
                    type="video/mp4"
                  />
                  <track kind="captions" srcLang="en" label="English" />
                </video>
              </div>
            </div>

            {/* Thumb 3 */}
            <div className="thumb thumb-3">
              <span className="brand-text">
                {aboutTwoData?.thumb3?.brandText}
              </span>
              <div className="image img_anim_reveal" suppressHydrationWarning={true}>
                <Image
                  src={aboutTwoData?.thumb3?.image}
                  alt={aboutTwoData?.thumb3?.alt || "shape"}
                  width={500}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 500px"
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Video (YouTube example) */}
      {isMounted &&
        aboutTwoData &&
        createPortal(
          <Lightbox
            open={isOpen}
            close={() => setOpen(false)}
            plugins={[Video]}
            slides={[
              {
                type: "video",
                width: 100,
                height: 720,
                poster: aboutTwoData?.thumb3?.image,

                sources: [
                  {
                    src: aboutTwoData?.thumb2?.videoLink,
                    type: "video/mp4",
                  },
                ],
              },
            ]}
            animation={{ swipe: 0 }}
            carousel={{ finite: true }}
            video={{
              controls: false,
              playsInline: false,
              autoPlay: true,
              loop: true,
              muted: true,
              disablePictureInPicture: true,
              disableRemotePlayback: true,
              preload: "auto",
              crossOrigin: "anonymous",
            }}
          />,
          document.body
        )}
    </>
  );
};

export default AboutTwoSection;
