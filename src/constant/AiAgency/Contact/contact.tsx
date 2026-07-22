export interface IContact {
  subtitle: string;
  title: string;
  description: string;
  contactInfo: {
    icon: string;
    label: string;
    link: string;
  }[];
  socialLinks: {
    icon: string;
    link: string;
  }[];
  formFields: {
    icon: string;
    label: string;
    name: string;
    placeholder: string;
    type: string;
  }[];
  buttonText: string;
}

const contactData: IContact = {
  subtitle: "Let’s connect",
  title: "Let’s work together",
  description:
    "Ready to accelerate your business with cutting-edge AI solutions? Reach out to our team of experts today and let's start building the future together.",
  contactInfo: [
    {
      icon: "/assets/imgs/icon/icon-17.webp",
      label: "info@sysconex.com",
      link: "mailto:info@sysconex.com",
    },
    {
      icon: "/assets/imgs/icon/icon-18.webp",
      label: "+94 76 117 6061",
      link: "tel:+94761176061",
    },
  ],
  socialLinks: [
    { icon: "fa-facebook-f", link: "https://www.facebook.com/people/SyscoNex-Solutions/61578193958732/" },
    { icon: "fa-linkedin-in", link: "https://lk.linkedin.com/company/sysconex-solutions" },
  ],
  formFields: [
    {
      icon: "/assets/imgs/icon/icon-19.webp",
      label: "What’s your name?",
      name: "Name",
      placeholder: "Full name here",
      type: "text",
    },
    {
      icon: "/assets/imgs/icon/icon-20.webp",
      label: "What’s your e-mail?",
      name: "Email",
      placeholder: "Enter your mail here",
      type: "email",
    },
    {
      icon: "/assets/imgs/icon/icon-21.webp",
      label: "Have any message?",
      name: "Messages",
      placeholder: "Write your message here",
      type: "text",
    },
  ],
  buttonText: "Contact Us",
};

export default contactData;
