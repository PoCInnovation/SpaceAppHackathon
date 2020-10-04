import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

import MySlide from '../Slide';
import slidesJson from './slides.json';

const SlideShow = () : JSX.Element => {
  const height = window.innerHeight;

  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <Slide easing="ease" autoplay={false} duration={0}>
        {
          slidesJson.map((item) => (
            <div className="each-slide" style={{ height }}>
              <MySlide
                title={item.title}
                paragraph={item.paragraph}
              />
            </div>
          ))
        }
    </Slide>
  </div>
);

export default SlideShow;
