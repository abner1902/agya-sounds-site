'use client';
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, #000000 0%, #080808 100%);
  padding: 120px 20px;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 900px;
  text-align: center;
  z-index: 3;
`;

const SectionLabel = styled.h2`
  color: #B1A27A; 
  font-family: 'Gotham', sans-serif;
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-bottom: 25px;
  animation: ${fadeIn} 1s ease-out both;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Title = styled.h3`
  color: #fff;
  font-family: 'Gotham', sans-serif;
  font-weight: 900;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 40px;
  line-height: 1.1;
  animation: ${fadeIn} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: #a0a0a0;
  font-family: 'Gotham', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.8;
  max-width: 750px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export default function About() {
  return (
    <AboutSection id="sobre">
      <Container>
        <SectionLabel>Sobre a Gravadora</SectionLabel>
        <Title>Agya Sounds: Frequências do Terceiro Olho</Title>
        <Description>
          Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana. 
          Através de vertentes do Darkpsy, criamos experiências sonoras que funcionam como portais para 
          estados elevados de consciência. Entre, ouça e conecte-se com o seu eu superior.
        </Description>
      </Container>
    </AboutSection>
  );
}
