export interface TeamSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  socials: {
    instagram: string;
    twitter: string;
    facebook: string;
    linkedin: string;
  };
}

export const teamSectionContent: TeamSectionContent = {
  subtitle: "TEAM MEMBERS",
  title: "Where Creativity Meets Technology: Our Talents for solutions",
  completedProjects: "50+",
  projectsText: "Completed Projects",
  exploreLink: "/ai-agency/team",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Sachintha Niyangoda",
    position: "Founder & CEO",
    image: "/assets/images/team/sachintha.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Kavishi Sirisena",
    position: "Marketing Manager",
    image: "/assets/images/team/kavishi.jpg",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sahan Thilakarathna",
    position: "Software Engineer",
    image: "/assets/images/team/sahan.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Akash Induwara",
    position: "Senior Software Engineer",
    image: "/assets/images/team/aksh.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];
