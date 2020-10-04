import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

import MySlide from '../Slide';

const SlideShow = () : JSX.Element => {
  const height = window.innerHeight - 111;

  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide" style={{ height, backgroundColor: 'transparent' }}>
          <MySlide
            title="tite"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            modelPath="da,s ton cul"
          />
        </div>
        <div className="each-slide" style={{ height, backgroundColor: 'transparent' }}>
          <MySlide
            title="tite"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            modelPath="da,s ton cul"
          />
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
