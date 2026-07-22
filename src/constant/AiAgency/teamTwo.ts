export interface ISocials {
  instagram: string;
  twitter: string;
  facebook: string;
  linkedin: string;
}

export interface ITeam {
  id: number;
  name: string;
  position: string;
  image: string;
  socials: ISocials;
}

export interface TeamData {
  section: {
    subtitle: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
  };
  members: ITeam[];
}

const teamData: TeamData = {
  section: {
    subtitle: "Our Team Members",
    title: "Meet the Sysconex Team",
    buttonText: "All Members",
    buttonUrl: "/team",
  },
  members: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
  ],
};

export default teamData;
