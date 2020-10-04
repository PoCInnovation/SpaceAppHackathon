import React from 'react';
import styled from 'styled-components';

const Question = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const Answer = styled.p`
  font-size: 18px;
`;

const FaqView = styled.div`
  padding-top: 30px;
  text-align: justify;
  flex-direction: column;
  color: white;
`;

const QAView = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-items: start;
  justify-content: space-between;
`;

const TransitionText = styled.h3`
  font-size: 1.5em;
`;

interface FaqProps {
  questions: string[],
  responses: string[]
};

function Faq({ questions, responses }: FaqProps): JSX.Element {
  const height = window.innerHeight * 0.95;

  return (
    <FaqView style={{ height }}>
      <QAView>
      {
          questions.map((e, index) => (
              <div>
                <Question key={index}>{e}</Question>
                <Answer style={{whiteSpace: "pre-wrap"}} key={index}>{responses[index]}</Answer>
              </div>
          ))
      }
      </QAView>
      <TransitionText>With our modular solution, you can adapt the suit to your needs, reducing the costs and optimizing your, and the astronaut's time. </TransitionText>
    </FaqView>
  );
}

export default Faq;
