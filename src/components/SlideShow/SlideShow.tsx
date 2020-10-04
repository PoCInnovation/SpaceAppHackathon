import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.css';
import styled from 'styled-components';
import MySlide from '../Slide';
import slidesJson from './slides.json';

const Title = styled.h3`
  margin-top: 4em;
  margin-bottom: -2.5em;
  font-size: 2em;
  color: white;
  width: 70%;
`;

const SlideShow = (): JSX.Element => (
  <div style={{ marginLeft: '10%', marginRight: '10%' }}>
    <Title>
      What types of modules can Caelus propose?
    </Title>
    <Slide easing="ease" autoplay={false} duration={0}>
      {
          slidesJson.map((item) => (
            <div className="each-slide">
              <MySlide
                title={item.title}
                paragraph={item.paragraph}
                preview={item.preview}
              />
            </div>
          ))
        }
    </Slide>
  </div>
);

export default SlideShow;
