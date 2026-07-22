export interface TestimonialItem {
  text: string;
  name: string;
  post: string;
  avatar: string;
}

export interface TestimonialData {
  subtitle: string;
  title: string;
  reviewCount: string;
  ratingText: string;
  testimonials: TestimonialItem[];
}

const testimonialData: TestimonialData = {
  subtitle: "OUR TESTIMONIALS",
  title: "The Impact of Our Software Solutions",
  reviewCount: "50+",
  ratingText: "(5.0 rating based reviews)",
  testimonials: [
    {
      text: `“Partnering with Sysconex for the Lixr Innovation Portal was an absolute game-changer. They didn't just build a custom web app; they architected a robust, scalable digital ecosystem that completely transformed how we manage innovation. Their attention to detail, modern UI/UX approach, and seamless execution exceeded every expectation we had.”`,
      name: "Oshan",
      post: "Founder, Lixr",
      avatar: "https://ui-avatars.com/api/?name=Oshan&background=random&color=fff&size=90",
    },
    {
      text: `“The team at Sysconex delivered a highly sophisticated B2B platform for OceanTech that solved our most complex operational bottlenecks. Their software development expertise is unmatched in the industry. They took the time to understand our deep technical requirements and delivered a product that is both incredibly powerful and surprisingly easy for our team to use on a daily basis.”`,
      name: "Wijerathna",
      post: "Director, OceanTech",
      avatar: "https://ui-avatars.com/api/?name=Wijerathna&background=random&color=fff&size=90",
    },
    {
      text: `“Developing the Crownstar Business Suite required a partner who understood enterprise-grade security and scalable architecture. Sysconex delivered flawlessly. The custom enterprise application they engineered for us is incredibly fast, secure, and has significantly streamlined our corporate workflows across multiple departments.”`,
      name: "Hiran",
      post: "CEO, Crownstar",
      avatar: "https://ui-avatars.com/api/?name=Hiran&background=random&color=fff&size=90",
    },
    {
      text: `“Sysconex brought the MRN Life digital platform to reality with exceptional creativity and technical precision. From the initial corporate identity design to the final deployment of our web platform, their dedication to quality was apparent at every step. We’ve seen a massive increase in user engagement since the launch, all thanks to their brilliant work.”`,
      name: "Rushdi",
      post: "Director, MRN",
      avatar: "https://ui-avatars.com/api/?name=Rushdi&background=random&color=fff&size=90",
    },
    {
      text: `“Working with Sysconex on the Accessara corporate branding and digital presence was a phenomenal experience. They perfectly balanced beautiful web design with robust functionality. The new platform they built has elevated our brand identity to a premium level, resulting in incredible feedback from our clients and partners worldwide.”`,
      name: "Janith",
      post: "Founder, Accessara",
      avatar: "https://ui-avatars.com/api/?name=Janith&background=random&color=fff&size=90",
    },
  ],
};

export default testimonialData;
