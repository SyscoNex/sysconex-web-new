
export interface IFeature {
    id:number;
    img:string;
    title:string;
    text:string;
}

export interface IChooseUs {
    subtitle:string;
    title:string;
    image:string;
    features: IFeature[];
}

const chooseUsData:IChooseUs = {
  subtitle: "Why Choose Sysconex",
  title: "We architect your digital success",
  image: "/assets/imgs/gallery/sysconex_choose_us.png",
  features: [
    {
      id: 1,
      img: "/assets/imgs/shape/shape-37.webp",
      title: "Cutting-Edge Technology",
      text: "We leverage the latest advancements in AI and modern frameworks to build robust, highly scalable platforms."
    },
    {
      id: 2,
      img: "/assets/imgs/shape/shape-38.webp",
      title: "Strategic Innovation",
      text: "We partner with you to uncover new digital opportunities, optimize workflows, and drive true business value."
    },
    {
      id: 3,
      img: "/assets/imgs/shape/shape-39.webp",
      title: "Premium Design",
      text: "Our award-winning UI/UX team creates breathtaking digital experiences that captivate users and elevate your brand."
    }
  ]
};

export default chooseUsData;