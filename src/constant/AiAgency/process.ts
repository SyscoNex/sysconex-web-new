export interface ProcessStep {
  title: string;
  description: string;
  active: boolean;
}

export interface ProcessData {
  subtitle: string;
  title: string;
  videoUrl: string;
  steps: ProcessStep[];
}

const processData: ProcessData = {
  subtitle: "WORK PROCESS",
  title: "How Sysconex Innovates",
  videoUrl:"/videos/how_we_work.mp4",
  steps: [
    {
      title: "Discovery & Consultation",
      description:
        "We start by understanding your business needs, challenges, and goals. Our team collaborates with you to identify technical opportunities where custom software or digital marketing can drive the most impact, gathering all necessary requirements.",
      active: true,
    },
    {
      title: "Architecture & UI/UX Design",
      description:
        "Our experts craft a comprehensive technical architecture and design seamless, intuitive user experiences. We present wireframes and mockups to ensure the final product perfectly aligns with your brand vision and business objectives.",
      active: false,
    },
    {
      title: "Development & Integration",
      description:
        "We engineer and deploy robust, high-performance web and mobile applications using the latest technologies. Our team provides continuous support, ensuring smooth integration into your existing business ecosystem.",
      active: false,
    },
  ],
};

export default processData;