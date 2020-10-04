import React, { useState } from 'react';
import styled from 'styled-components';

import CamModel from '../Model/IRCam';
import HudModel from '../Model/Hud';
import ArmModel from '../Model/Arm';
import ArmLidarModel from '../Model/ArmLidar';

const MyStyleSlide = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;

  margin: 5%;
  width:40%;
  color: white;
  margin-bottom: 15%;
`;
const TitleText = styled.a`
  font-size: 3em;
`;
const ParaText = styled.p`
  font-size: 1.5em;
`;
const ModelContainer = styled.div`
  display: flex;
  margin: 5%;
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

type SlideProps = {
  title: string;
  paragraph: string;
  preview: String
};

const MySlide = ({ title, paragraph, preview }: SlideProps): JSX.Element => {
  const [canvaVisible, setCanvaVisible] = useState<boolean>(false);
  const GetModel = (): JSX.Element => {
    switch (title) {
      case 'IR/UV Camera':
      default:
        return <CamModel />;
      case 'Laser':
        return <CamModel />;
      case 'Robotic Arm':
        return <ArmModel />;
      case 'Arm Lidar':
        return <ArmLidarModel />;
      case 'Interface':
        return <ArmLidarModel />;
      case 'Virtual assistant':
        return <ArmLidarModel />;
      case 'HUD':
        return <HudModel />;
    }
  };

  return (
    <MyStyleSlide>
      <TextContainer>
        <TitleText onClick={(): void => setCanvaVisible(!canvaVisible)}>{title}</TitleText>
        <ParaText>{paragraph}</ParaText>
      </TextContainer>
      <ModelContainer>
        { canvaVisible
          ? (<GetModel />)
          : (
            <img src="/ircam.png" alt="preview" style={{ width: '100%', height: '100%' }} />
          )}
      </ModelContainer>
    </MyStyleSlide>
  );
};

export default MySlide;
