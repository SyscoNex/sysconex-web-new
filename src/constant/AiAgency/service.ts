export interface ServiceSectionData {
  subtitle: string;
  title: string;
  exploreLink: string;
}

export interface Service {
  slug: string;
  title: string;
  projectsAvailable: number;
  projectsDone: number;
  image: string;
  description: string;
  detailLink: string;

  // New Details Section Data
  overviewTitle: string;
  overviewDescription: string;
  serviceFeatures: string[];
  gallery: { src: string; alt: string }[];

  solutionSubtitle: string;
  solutionTitle: string;
  videoUrl: string;
  contentTitle: string;
  paragraphs: string[];
  
  faqs: { question: string; answer: string }[];
  faqImage: string;
}

export const serviceSectionData: ServiceSectionData = {
  subtitle: "Our Services",
  title: "Our Best Software Solutions",
  exploreLink: "/services",
};

export const servicesData: Service[] = [
  {
    slug: "web-development",
    title: "Custom Website Development",
    projectsAvailable: 120,
    projectsDone: 85,
    image: "/assets/images/service/service_web_dev_new.png",
    description:
      "We build robust, scalable, and beautifully designed custom websites and web applications tailored exactly to your business goals and user needs.",
    detailLink: "/services",
    overviewTitle: "Scalable Web Architectures",
    overviewDescription: "Sysconex engineers high-performance web platforms that combine stunning design with robust backend infrastructure, ensuring seamless user experiences and maximum conversion rates.",
    serviceFeatures: [
      "Custom Web Applications",
      "E-Commerce Solutions",
      "Progressive Web Apps (PWA)",
      "CMS Development",
      "API Development & Integration",
      "UI/UX Prototyping",
      "Responsive Design",
      "Performance Optimization",
      "Security Audits",
    ],
    gallery: [
      { src: "/assets/imgs/gallery/web_dev_gallery_1.png", alt: "Web Development 1" },
      { src: "/assets/imgs/gallery/web_dev_gallery_2.png", alt: "Web Development 2" },
    ],
    solutionSubtitle: "Solution Approach",
    solutionTitle: "Engineering your digital presence",
    videoUrl: "/videos/Business_People.mp4",
    contentTitle: "From Concept to Code",
    paragraphs: [
      "Our web development approach goes far beyond writing code. We start with a deep dive into your business model, identifying the critical user journeys that drive revenue and retention. We map out complex data flows and create interactive prototypes to ensure complete alignment before a single line of code is written.",
      "By utilizing modern frameworks like Next.js and React, we deliver blazingly fast, SEO-optimized web experiences that scale effortlessly as your business grows.",
    ],
    faqs: [
      {
        question: "How long does a custom web development project take?",
        answer: "Timelines vary depending on complexity. A standard corporate website might take 4-6 weeks, while a complex custom web application can take 3-6 months. We provide a detailed timeline during the discovery phase.",
      },
      {
        question: "Do you build SEO-friendly websites?",
        answer: "Absolutely. We utilize modern server-side rendering technologies like Next.js to ensure lightning-fast load times and perfect indexability, giving you a strong technical SEO foundation right out of the box.",
      },
      {
        question: "Will I be able to manage the website content myself?",
        answer: "Yes, we integrate user-friendly headless Content Management Systems (CMS) tailored to your needs, allowing you to easily update text, images, and add new pages without needing to write any code.",
      },
    ],
    faqImage: "/assets/imgs/gallery/faq_web_dev.png",
  },
  {
    slug: "mobile-development",
    title: "Custom Mobile Application Development",
    projectsAvailable: 95,
    projectsDone: 64,
    image: "/assets/images/service/service_mobile_dev.png",
    description:
      "Our team engineers high-performance native and cross-platform mobile applications that provide seamless, engaging experiences on both iOS and Android devices.",
    detailLink: "/services",
    overviewTitle: "Next-Gen Mobile Experiences",
    overviewDescription: "We build intuitive, fluid, and powerful mobile applications that put your business directly in your customers' hands, leveraging native technologies for uncompromised performance.",
    serviceFeatures: [
      "iOS App Development",
      "Android App Development",
      "React Native Apps",
      "Flutter Cross-Platform",
      "App Store Optimization",
      "Mobile Backend as a Service",
      "Wearable App Integration",
      "Enterprise Mobility",
      "UI/UX App Design",
    ],
    gallery: [
      { src: "/assets/imgs/gallery/mobile_dev_gallery_1.png", alt: "Mobile Development 1" },
      { src: "/assets/imgs/gallery/mobile_dev_gallery_2.png", alt: "Mobile Development 2" },
    ],
    solutionSubtitle: "Solution Approach",
    solutionTitle: "Captivating users on every device",
    videoUrl: "/videos/Business_People.mp4",
    contentTitle: "Seamless Mobile Architectures",
    paragraphs: [
      "Mobile development requires a rigorous focus on performance and usability. Our process ensures that your application feels native, fast, and responsive regardless of the device it's running on. We implement robust state management and efficient data caching to provide exceptional offline experiences.",
      "From rigorous beta testing to final app store deployment and marketing, we stand by you through the entire lifecycle of your mobile product.",
    ],
    faqs: [
      {
        question: "Do you develop for both iOS and Android?",
        answer: "Yes, we offer both native development (Swift for iOS, Kotlin for Android) and cross-platform development (using React Native or Flutter) to ensure your app reaches the widest possible audience.",
      },
      {
        question: "Do you handle the App Store submission process?",
        answer: "Yes, we manage the entire deployment process, including Apple App Store and Google Play Store submissions, ensuring all guidelines are met for a smooth approval.",
      },
      {
        question: "Can my app integrate with my existing backend systems?",
        answer: "Absolutely. We specialize in building secure APIs to seamlessly connect your new mobile application with your existing databases, CRM, or enterprise software.",
      },
    ],
    faqImage: "/assets/imgs/gallery/faq_mobile_dev.png",
  },
  {
    slug: "social-marketing",
    title: "Social Marketing & Digital Marketing",
    projectsAvailable: 150,
    projectsDone: 110,
    image: "/assets/images/service/service_social_marketing.png",
    description:
      "We design data-driven social media marketing campaigns that elevate your brand presence, engage your target audience, and drive measurable conversions.",
    detailLink: "/services",
    overviewTitle: "Data-Driven Brand Growth",
    overviewDescription: "We don't just run ads; we engineer growth. Our digital marketing strategies combine creative storytelling with rigorous data analytics to maximize your return on investment.",
    serviceFeatures: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Management",
      "Content Strategy & Creation",
      "Conversion Rate Optimization",
      "Email Marketing Automations",
      "Influencer Partnerships",
      "Brand Identity Design",
      "Marketing Analytics",
    ],
    gallery: [
      { src: "/assets/imgs/gallery/social_marketing_gallery_1.png", alt: "Digital Marketing 1" },
      { src: "/assets/imgs/gallery/social_marketing_gallery_2.png", alt: "Digital Marketing 2" },
    ],
    solutionSubtitle: "Solution Approach",
    solutionTitle: "Turning clicks into clients",
    videoUrl: "/videos/Business_People.mp4",
    contentTitle: "Strategic Digital Domination",
    paragraphs: [
      "In a crowded digital landscape, standing out requires a strategic approach. We conduct comprehensive market research and competitive analysis to identify untapped opportunities for your brand. By utilizing A/B testing and algorithmic targeting, we ensure your message reaches the right people at the right time.",
      "Our transparent reporting ensures you always know exactly how your campaigns are performing and how we are actively optimizing them for better results.",
    ],
    faqs: [
      {
        question: "How long does it take to see results from digital marketing?",
        answer: "While PPC campaigns can generate traffic immediately, organic strategies like SEO and content marketing typically take 3 to 6 months to show significant, compounding results.",
      },
      {
        question: "Which social media platforms should my business be on?",
        answer: "This depends entirely on your target audience and industry. During our initial strategy phase, we analyze where your ideal customers spend their time and focus your budget on the highest-yielding platforms.",
      },
      {
        question: "How do you measure the success of a campaign?",
        answer: "We track Key Performance Indicators (KPIs) tailored to your goals, such as Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and overall conversion rates, providing you with transparent monthly reports.",
      },
    ],
    faqImage: "/assets/imgs/gallery/faq_social_marketing.png",
  },
  {
    slug: "ai-research",
    title: "AI base Research Application development",
    projectsAvailable: 45,
    projectsDone: 28,
    image: "/assets/images/service/service_ai_research.png",
    description:
      "We develop cutting-edge, AI-driven research applications that leverage machine learning and advanced data modeling to solve complex analytical challenges.",
    detailLink: "/services",
    overviewTitle: "Advanced Machine Learning Models",
    overviewDescription: "Unlock the power of your data. We build custom AI applications that automate complex research, generate deep predictive insights, and revolutionize how you make critical business decisions.",
    serviceFeatures: [
      "Machine Learning Algorithms",
      "Natural Language Processing (NLP)",
      "Predictive Data Analytics",
      "Computer Vision Systems",
      "Generative AI Integration",
      "Custom LLM Fine-Tuning",
      "Automated Research Bots",
      "Data Pipeline Engineering",
      "AI Strategy Consulting",
    ],
    gallery: [
      { src: "/assets/imgs/gallery/ai_research_gallery_1.png", alt: "AI Research 1" },
      { src: "/assets/imgs/gallery/image-31.webp", alt: "AI Research 2" },
    ],
    solutionSubtitle: "Solution Approach",
    solutionTitle: "Intelligence built into software",
    videoUrl: "/videos/Business_People.mp4",
    contentTitle: "Solving the Unsolvable",
    paragraphs: [
      "Artificial intelligence is only as valuable as the business problems it solves. Our AI research team specializes in transforming vast, unstructured datasets into actionable intelligence. We build custom neural networks and integrate cutting-edge LLMs directly into your operational software.",
      "We prioritize ethical AI development, ensuring our models are transparent, unbiased, and compliant with all relevant data privacy regulations while delivering unprecedented analytical power.",
    ],
    faqs: [
      {
        question: "What kind of data do I need to start an AI project?",
        answer: "AI models require structured or unstructured data relevant to your business problem. If you don't have enough clean data, our first step will involve data engineering and building automated pipelines to gather what the model needs.",
      },
      {
        question: "Can you fine-tune existing models like GPT-4 for my business?",
        answer: "Yes, we specialize in Retrieval-Augmented Generation (RAG) and fine-tuning Large Language Models on your proprietary company data, allowing the AI to answer questions specific to your internal operations securely.",
      },
      {
        question: "How do you ensure data privacy and security?",
        answer: "We employ strict data governance protocols. If you deal with sensitive information, we can deploy open-source AI models directly onto your private cloud infrastructure so your data never leaves your control.",
      },
    ],
    faqImage: "/assets/imgs/gallery/faq_ai_research.png",
  },
];
