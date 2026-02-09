'use client';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Section = styled.section`
  background-color: #000;
  padding: 100px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 20px;
  }
`;

const ContentSide = styled.div`
  max-width: 530px;
`;

const Title = styled.h2`
  width: 100%;
  color: white;
  font-size: 36px; // 4xl
  font-family: 'Gotham', sans-serif;
  font-weight: 900; // Black
  margin-bottom: 24px;
`;

const Description = styled.p`
  width: 100%;
  color: white;
  font-size: 24px; // 2xl
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const Button = styled.a`
  display: inline-flex;
  width: 224px; // w-56
  height: 56px; // h-14
  background-color: #6d28d9; // violet-700
  border-radius: 12px; // rounded-xl
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px; // aprox 3xl do figma em escala real
  font-family: 'Gotham', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: #7c3aed;
  }
`;

const SliderSide = styled.div`
  width: 626px;
  height: 417px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ArtistImage = styled.img`
  width: 626px;
  height: 417px;
  border-radius: 38px;
  object-fit: cover;
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
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <ArtistImage src="/ABSYCHO LIVE.jpg" alt="ABSYCHO LIVE" />
            <p className="text-white mt-4 text-center font-bold">ABSYCHO LIVE</p>
          </SwiperSlide>
          
          {/* Slide 2 (Exemplo para quando você tiver mais fotos) */}
          <SwiperSlide>
            <ArtistImage src="https://placehold.co/626x417/111/fff?text=EM+BREVE" alt="Artist 2" />
          </SwiperSlide>
        </Swiper>
      </SliderSide>
    </Section>
  );
}
