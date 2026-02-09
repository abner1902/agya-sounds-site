'use client';
import styled from "styled-components";

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #000;
  overflow: hidden;
  padding: 80px 40px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('/fundo_op_art_2.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.2;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 900px;
  text-align: center;
  position: relative;
  z-index: 3;
`;

const SectionLabel = styled.h2`
  color: #fff;
  font-family: 'Gotham', sans-serif;
  font-weight: 900;
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 60px;
`;

const Title = styled.h3`
  color: #fff;
  font-family: 'Gotham', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: #fff;
  font-family: 'Gotham', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 750px;
  margin: 0 auto;
`;

export default function About() {
  return (
    <AboutSection id="sobre">
      <Container>
        <SectionLabel>SOBRE A GRAVADORA</SectionLabel>
        <Title>Agya Sounds: Frequências do Terceiro Olho</Title>
        <Description>
          Somos uma gravadora de música psicodélica experimental dedicada a expandir a percepção humana. 
          Através de vertentes do Darkpsy, criamos experiências sonoras que funcionam como portais 
          para estados elevados de consciência. Entre, ouça e conecte-se com o seu eu superior.
        </Description>
      </Container>
    </AboutSection>
  );
}
