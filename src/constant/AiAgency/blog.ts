export interface Blog {
  image: string;
  tag: string;
  date: string;
  title: string;
  link: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  button: {
    text: string;
    iconClass: string;
    href: string;
  };
  blogs: Blog[];
}

const blogData: BlogData = {
  subtitle: "BLOGS & NEWS",
  title: "Insights & Stories",
  button: {
    text: "Explore More",
    iconClass: "fa-solid fa-arrow-right",
    href: "/blog",
  },
  blogs: [
    {
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=410&h=250&auto=format&fit=crop",
      tag: "ARTIFICIAL INTELLIGENCE",
      date: "July 22, 2026",
      title: "The Future of AI in Software Engineering",
      link: "/blog/future-of-ai-in-software",
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=410&h=250&auto=format&fit=crop",
      tag: "CLOUD COMPUTING",
      date: "July 18, 2026",
      title: "Architecting Scalable Cloud Microservices",
      link: "/blog/architecting-scalable-cloud",
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=410&h=250&auto=format&fit=crop",
      tag: "BLOCKCHAIN",
      date: "July 12, 2026",
      title: "Demystifying Web3: Blockchain for Enterprise",
      link: "/blog/demystifying-web3",
    },
  ],
};

export default blogData;
