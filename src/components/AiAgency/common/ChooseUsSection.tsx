import React from 'react';
import Image from 'next/image';
import {IChooseUs,IFeature} from '@/constant/AiAgency/common/choose-us';

interface ChooseUsProps {
    chooseUSTwo?: boolean;
    data:IChooseUs;
}
const ChooseUsSection:React.FC<ChooseUsProps> = ({chooseUSTwo,data:chooseUsData}) => {
  const { subtitle, title, image, features } = chooseUsData;

  return (
    <section className={chooseUSTwo ? 'choose-area-2': 'choose-area'}>
      <div className="container">
        <div className={chooseUSTwo ? 'choose-area-2-inner section-spacing' : 'choose-area-inner section-spacing-top'}>
          <div className="section-content-wrapper">
            <div className="choose-thumb fade-anim" data-direction="left">
              <Image src={image} alt="image" width={600} height={600} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="section-content fade-anim" data-direction="right">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{title}</h2>
                </div>
              </div>
              <div className="features-wrapper-box">
                <div className="features-wrapper">
                  {features.map((feature:IFeature) => (
                    <div className="feature-box" key={feature?.id}>
                      <div className="thumb">
                        <Image src={feature?.img} alt="feature" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
                      </div>
                      <div className="content">
                        <h3 className="title">{feature?.title}</h3>
                        <p className="text">{feature?.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
