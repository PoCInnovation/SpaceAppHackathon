import React from 'react';
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
const TitleText = styled.p`
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
};

const MySlide = ({ title, paragraph }: SlideProps): JSX.Element => {
  const GetModel = (): JSX.Element => {
    switch (title) {
      case 'Camera':
      default:
        return <CamModel />;
      case 'HUD':
        return <HudModel />;
      case 'Arm':
        return <ArmModel />;
      case 'Arm Lidar':
        return <ArmLidarModel />;
    }
  };

  return (
    <MyStyleSlide>
      <TextContainer>
        <TitleText>{title}</TitleText>
        <ParaText>{paragraph}</ParaText>
      </TextContainer>
      <ModelContainer>
        <GetModel />
      </ModelContainer>
    </MyStyleSlide>
  );
};

export default MySlide;
