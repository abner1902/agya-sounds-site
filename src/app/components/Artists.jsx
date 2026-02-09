'use client';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section = styled.section`
  background-color: #000;
  padding: 80px 60px;
  display: flex;
  align-items: center;
  justify-content: center; /* Centralizado para diminuir o espaçamento */
  gap: 80px;
  min-height: 80vh;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
  }
`;

const ContentSide = styled.div`
  max-width: 530px;
`;

const Title = styled.h2`
  color: white;
  font-size: 36px;
  font-family: 'Gotham', sans-serif;
  font-weight: 900;
  margin-bottom: 24px;
`;

const Description = styled.p`
  color: white;
  font-size: 24px;
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const Button = styled.a`
  display: inline-flex;
  width: 224px;
  height: 56px;
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
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: #7c3aed;
    box-shadow: 0 0 20px rgba(109, 40, 217, 0.5);
  }
`;

const SliderSide = styled.div`
  width: 626px;
  height: 417px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  .swiper {
    border-radius: 38px;
    overflow: hidden;
  }
`;

const ArtistImage = styled.img`
  width: 626px;
  height: 417px;
  object-fit: cover;
  display: block;
`;

const ArtistNameOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: white;
  font-family: 'Gotham', sans-serif;
  font-weight: 900;
  font-size: 24px;
  z-index: 10;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
`;

export default function Artists() {
  // Array repetindo a mesma imagem para o slideshow funcionar
  const slides = [
    { id: 1, name: "ABSYCHO LIVE", img: "/ABSYCHO_LIVE.jpg" },
    { id: 2, name: "ABSYCHO LIVE", img: "/ABSYCHO_LIVE.jpg" },
    { id: 3, name: "ABSYCHO LIVE", img: "/ABSYCHO_LIVE.jpg" }
  ];

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
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <ArtistImage src={slide.img} alt={slide.name} />
              <ArtistNameOverlay>{slide.name}</ArtistNameOverlay>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderSide>
    </Section>
  );
}
