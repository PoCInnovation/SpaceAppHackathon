import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';

const SlideShow = () : JSX.Element => {
  const height = window.innerHeight * 1.9 / 2;

  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide" style={{ height }}>
          <div style={{ backgroundColor: 'red', height: '100%' }}>
            <span>Some text</span>
          </div>
        </div>
        <div className="each-slide" style={{ height }}>
          <div style={{ backgroundColor: 'yellow', height: '100%' }}>
            <span>Some text 2</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
