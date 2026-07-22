export interface AboutData {
  subtitle: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  aboutLink: string;
  buttonText: string;
}
const aboutData = {
  subtitle: "ABOUT SYSCONEX",
  title: "Shaping Your Digital Future with Custom Software Solutions",
  paragraphs: [
    "We are passionate about harnessing the power of cutting-edge technology to create smart, innovative digital solutions that drive business growth and transformation.",
    "Our team of expert software engineers, UX/UI designers, and creative technologists work collaboratively to build custom web applications, mobile apps, and enterprise systems that solve complex challenges and enhance user experiences.",
  ],
  image: "/assets/imgs/shape/shape-23.webp",
  imageAlt: "About Sysconex",
  aboutLink: "/about",
  buttonText: "About Agency",
};

export default aboutData;
