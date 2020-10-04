import React from 'react';

import ModelRender from '../ModelRender';
import './index.css';

type SlideProps = {
  title: string;
  paragraph: string;
  modelPath: string;
};

function Slide(props: SlideProps): JSX.Element {
  const { title, paragraph, modelPath } = props;

  return (
    <div className="slide">
      <div className="text">
        <p className="title">{title}</p>
        <p className="paragraph">{paragraph}</p>
      </div>
      <div className="modelPart">
        <ModelRender />
      </div>
    </div>
  );
}

export default Slide;
