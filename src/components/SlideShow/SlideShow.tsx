import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

import MySlide from '../Slide';

const SlideShow = () : JSX.Element => {
  const height = window.innerHeight;

  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <Slide easing="ease" autoplay={false} duration={0}>
        <div className="each-slide" style={{ height, backgroundColor: 'transparent' }}>
          <MySlide
            title="IR/UV Camera"
            paragraph="A camera that attaches on the helmet. It allows the astronaut to see in low visibility environment."
            modelPath="da,s ton cul"
          />
        </div>
        <div className="each-slide" style={{ height }}>
          <MySlide
            title="Laser"
            paragraph="A laser that allows the astronaut to precisely estimate distances."
            modelPath="da,s ton cul"
          />
        </div>
        <div className="each-slide" style={{ height }}>
          <MySlide
            title="Robotic Arm"
            paragraph="The robotic arm will allow any module attached to stay stable, for example a Lidar or solar panel."
            modelPath="da,s ton cul"
          />
        </div>
        <div className="each-slide" style={{ height }}>
          <MySlide
            title="Interface"
            paragraph="The interface allow your astronaut to easily attach modules on the suit."
            modelPath="da,s ton cul"
          />
        </div>
        <div className="each-slide" style={{ height }}>
          <MySlide
            title="Virtual assistant"
            paragraph="Here is how Caelus will be integrated on your astronaut's suit. "
            modelPath="da,s ton cul"
          />
        </div>
        {/* <div className="each-slide" style={{ height, backgroundColor: 'transparent' }}>
          <MySlide
            title="HUD"
            paragraph="Information on the visor helmet will be displayed on an HUD."
            modelPath="da,s ton cul"
          />
        </div> */}
      </Slide>
    </div>
  );
};

export default SlideShow;
