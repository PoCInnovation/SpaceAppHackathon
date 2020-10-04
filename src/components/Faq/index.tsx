import React from 'react';
import styled from 'styled-components';

const Question = styled.p`
  margin: 1em;
  font-size: 1.5em;
  font-weight: bold;
  color: black;
  text-align: justify;
`;

const Answer = styled.p`
  margin: 1em;
  font-size: 18px;
  color: black;
  text-align: justify;
`;

const FaqView = styled.div`
  display: flex;
  padding-top: 30px;
  text-align: justify;
  align-items: center;
  flex-direction: column;
`;

const QAView = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-items: start;
  justify-content: center;
`;

const TransitionText = styled.h3`
  margin-top: 2.5em;
  font-size: 2.5em;
  color: white;
  width: 70%;
  text-align: center;
`;

const Card = styled.div`
  background-color: white;
  margin: 30px;
  border-radius: 5px;
  width: ${(window.innerWidth * 0.6) / 2}px;
`;

interface FaqProps {
  questions: string[],
  responses: string[]
}

const Faq = ({ questions, responses }: FaqProps): JSX.Element => (
  <FaqView>
    <QAView>
      {questions.map((item, index) => (
        <Card>
          <Question key={index.toString()}>{item}</Question>
          <Answer style={{ whiteSpace: 'pre-wrap' }} key={index.toString()}>{responses[index]}</Answer>
        </Card>
      ))}
    </QAView>
    <TransitionText>
      With our modular solution, you can adapt the suit
      to your needs, reducing the costs and optimizing your,
      and the astronaut's time.
    </TransitionText>
  </FaqView>
);

export default Faq;
