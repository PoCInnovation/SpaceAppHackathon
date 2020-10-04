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
        <div className="each-slide" style={{ height, backgroundColor: 'yellow' }}>
          <div style={{ height: '100%', color: 'white'}}>
            <p>TEs 1</p>
          </div>
        </div>
        <div className="each-slide" style={{ height, backgroundColor: 'red' }}>
          <div style={{ height: '100%' }}>
            <p>Test 2</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
