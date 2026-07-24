import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  workSectionContent,
  portfolioItems,
  PortfolioItem,
} from "@/constant/AiAgency/work";

interface IWorkProps {
  type?: string;
  all?: boolean;
}
const WorkSection: React.FC<IWorkProps> = ({ all, type }) => {
  const totalPortfolio = all ? portfolioItems : portfolioItems?.slice(0, 5);

  return (
    <section className="work-area-4">
      <div className="container">
        <div
          className={`work-area-4-inner ${
            type === "v2" ? "section-spacing" : "section-spacing-top"
          }`}
        >
          {!all && (
            <div className="section-header-wrapper">
              <div className="section-header">
                <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">
                      {workSectionContent?.subtitle}
                    </span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title">
                      {workSectionContent?.title}
                    </h2>
                  </div>
                </div>

                <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                  <div className="t-btn-group">
                    <Link
                      className="t-btn t-btn-circle"
                      href={workSectionContent?.exploreLink || "#"}
                      aria-label="Explore More Portfolio"
                    >
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                    <Link
                      className="t-btn t-btn-primary"
                      href={workSectionContent?.exploreLink || "#"}
                    >
                      Explore More
                    </Link>
                    <Link
                      className="t-btn t-btn-circle"
                      href={workSectionContent?.exploreLink || "#"}
                      aria-label="Explore More Portfolio"
                    >
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="completed-projects move-anim" suppressHydrationWarning={true}>
                <span className="number">
                  {workSectionContent?.completedProjects}
                </span>
                <p className="text">{workSectionContent?.projectsText}</p>
              </div>
            </div>
          )}

          <div className={`works-wrapper-box fade-anim ${all && "mt-0"}`} suppressHydrationWarning={true}>
            <div className="works-wrapper">
              {totalPortfolio?.map((item: PortfolioItem, index: number) => (
                <div className="work-box-4 work-panel" key={index}>
                  <div className="thumb">
                    <div className="meta">
                      {item?.tags?.map((tag: string, idx: number) => (
                        <span className="tag" key={idx}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Image
                      src={item?.image}
                      alt={item?.title || "Portfolio Image"}
                      width={1230}
                      height={380}
                      loading="lazy"
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>

                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text">Project Name:</p>
                      <h3 className="title">{item?.title}</h3>
                    </div>

                    <div className="t-btn-group">
                      <Link
                        className="t-btn t-btn-circle"
                        href={`/portfolio/${item?.slug}`}
                        aria-label={`View full project: ${item?.title}`}
                      >
                        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      <Link
                        className="t-btn t-btn-primary"
                        href={`/portfolio/${item?.slug}`}
                      >
                        Full Project
                      </Link>
                      <Link
                        className="t-btn t-btn-circle"
                        href={`/portfolio/${item?.slug}`}
                        aria-label={`View full project: ${item?.title}`}
                      >
                        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
