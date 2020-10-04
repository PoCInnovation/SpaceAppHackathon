import React, { useState } from 'react';
import styled from 'styled-components';

// import ArmModel from '../Model/Arm';
import CamModel from '../Model/IRCam';
import HudModel from '../Model/Hud';
import ArmLidarModel from '../Model/ArmLidar';
import LaserModel from '../Model/Laser';
import VirtualAssistantModel from '../Model/VirtualAssistant';

const MyStyleSlide = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  position: relative;
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

interface SlideProps {
  title: string;
  paragraph: string;
  preview: string;
}

const MySlide = ({ title, paragraph, preview }: SlideProps): JSX.Element => {
  const [canvaVisible, setCanvaVisible] = useState<boolean>(true);
  const GetModel = (): JSX.Element => {
    switch (title) {
      case 'IR/UV Camera':
      default:
        return <CamModel />;
      case 'Laser':
        return <LaserModel />;
      case 'Robotic Arm':
        return <ArmLidarModel />;
      case 'Virtual assistant':
        return <VirtualAssistantModel />;
      case 'Helmet HUD':
        return <HudModel />;
    }
  };

  return (
    <MyStyleSlide>
      <TextContainer>
        <TitleText>{title}</TitleText>
        <ParaText>{paragraph}</ParaText>
      </TextContainer>
      <ModelContainer>
        { canvaVisible
          ? (<GetModel />)
          : (
            <img src={preview} alt="preview" style={{ width: '100%', height: '100%' }} />
          )}
      </ModelContainer>
      <img
        style={{ display: 'flex', position: 'absolute', right: 1, top: 1, marginTop: '5%', marginRight: '5%' }}
        src="/swap.svg"
        alt="Swap"
        width="50"
        height="50"
        onClick={(): void => setCanvaVisible(!canvaVisible)}
      />
    </MyStyleSlide>
  );
};

export default MySlide;
