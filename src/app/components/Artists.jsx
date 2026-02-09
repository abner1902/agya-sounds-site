'use client';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Section = styled.section`
  background-color: #000;
  padding: 100px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  min-height: 80vh;
  @media (max-width: 1100px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 50px;
  }
`;

const ContentSide = styled.div`
  max-width: 530px;
`;

const Title = styled.h2`
  color: white;
  font-size: 40px;
  font-family: 'Gotham', sans-serif;
  font-weight: 900;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: white;
  font-size: 22px;
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 44px;
  opacity: 0.9;
`;

const Button = styled.a`
  display: inline-flex;
  padding: 16px 40px;
  background-color: #6d28d9;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-family: 'Gotham', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: #7c3aed;
    box-shadow: 0 0 25px rgba(109, 40, 217, 0.6);
  }
`;

const SliderSide = styled.div`
  width: 626px;
  height: 417px;
  border-radius: 38px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export default function Artists() {
  return (
    <Section id="artistas">
      <ContentSide>
        <Title>ARTISTAS</Title>
        <Description>
          Nossos artistas canalizam frequências do terceiro olho. Cada projeto sonoro é uma jornada espiritual, 
          conectando tecnologia, natureza e consciência expandida. Descubra quem está por trás das vibrações 
          que atravessam dimensões.
        </Description>
        <Button href="#contato">SAIBA MAIS</Button>
      </ContentSide>

      <SliderSide>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <ArtistImage src="/ABSYCHO_LIVE.png" alt="ABSYCHO LIVE" />
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: '100%', height: '417px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
              EM BREVE
            </div>
          </SwiperSlide>
        </Swiper>
      </SliderSide>
    </Section>
  );
}
