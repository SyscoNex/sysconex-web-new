import Link from "next/link";
import Image from "next/image";
import { teamSectionContent, teamMembers, TeamMember } from "@/constant/AiAgency/team";
import React from "react";

const TeamSection: React.FC = () => {
  return (
    <section className="team-area-4">
      <div className="container">
        <div className="team-area-4-inner section-spacing">
          <div className="section-content move-anim" suppressHydrationWarning={true}>
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {teamSectionContent?.subtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{teamSectionContent?.title}</h2>
              </div>
            </div>
            <div className="team-members">
              <span className="number">
                {teamSectionContent?.completedProjects}
              </span>
              <p className="text">{teamSectionContent?.projectsText}</p>
            </div>
            <div className="btn-wrapper">
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={teamSectionContent?.exploreLink || "#"}
                  aria-label="Explore More Team Members"
                >
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={teamSectionContent?.exploreLink || "#"}
                >
                  Explore More
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={teamSectionContent?.exploreLink || "#"}
                  aria-label="Explore More Team Members"
                >
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="team-wrapper-box">
            <div className="team-wrapper">
              {teamMembers?.map((member:TeamMember, index:number) => (
                <div
                  className="team-box-4 fade-anim"
                  key={index}
                  data-direction="right"
                  data-delay={index % 2 === 0 ? "0.30" : "0.45"}
                  suppressHydrationWarning={true}
                >
                  <div className="thumb">
                    <Image
                      src={member?.image}
                      alt={member?.name || "Team Member"}
                      width={400}
                      height={400}
                      loading="lazy"
                      style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="content">
                    <h3 className="name">{member?.name}</h3>
                    <span className="post">({member?.position})</span>
                  </div>
                  <div className="social-links-wrapper">
                    <div className="links-holder">
                      <i className="fa-solid fa-share-nodes" aria-hidden="true"></i>
                      <div className="social-links">
                        <a href={member?.socials?.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member?.name} on Instagram`}>
                          <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href={member?.socials?.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member?.name} on Twitter`}>
                          <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href={member?.socials?.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${member?.name} on Facebook`}>
                          <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href={member?.socials?.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member?.name} on LinkedIn`}>
                          <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                      </div>
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

export default TeamSection;
