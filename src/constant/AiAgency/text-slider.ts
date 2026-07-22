export interface ITextSlide {
  id: number;
  text: string;
  suffix: string;
}

export interface TextSliderData {
  items: ITextSlide[];
}
const textSliderData: TextSliderData = {
  items: [
    {
      id: 1,
      text: `Where Cutting-Edge Tech Meets Bold Creativity`,
      suffix: `Empowering Brands Through Software Development`,
    },
    {
      id: 2,
      text: `Innovating the Future with Custom Digital Solutions`,
      suffix: `Redefining User Experiences`,
    },
    {
      id: 3,
      text: `Technology. Impact. Innovation.`,
      suffix: `We Build the Next Big Thing`,
    },
    {
      id: 4,
      text: `Smarter Design Through Digital Transformation`,
      suffix: `Fueling Brand Growth`,
    },
    {
      id: 5,
      text: `Where Cutting-Edge Tech Meets Bold Creativity`,
      suffix: `Empowering Brands Through Software Development`,
    },
    {
      id: 6,
      text: `Innovating the Future with Custom Digital Solutions`,
      suffix: `Redefining User Experiences`,
    },
    {
      id: 7,
      text: `Technology. Impact. Innovation.`,
      suffix: `We Build the Next Big Thing`,
    },
    {
      id: 8,
      text: `Smarter Design Through Digital Transformation`,
      suffix: `Fueling Brand Growth`,
    },
  ],
};

export default textSliderData;
