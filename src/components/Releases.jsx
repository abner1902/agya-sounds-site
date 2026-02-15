'use client';
import styled from 'styled-components';

const ReleasesSection = styled.section`
  background-color: #000;
  padding: 100px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 1100px) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 40px;
  font-family: 'Gotham', sans-serif;
  font-weight: 900;
  margin-bottom: 24px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 22px;
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 60px;
  opacity: 0.9;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 25px 20px 30px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;
  background: #111;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-family: 'Gotham', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardArtist = styled.p`
  color: #aaa;
  font-family: 'Gotham', sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  color: #ddd;
  font-family: 'Gotham', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const Button = styled.a`
  display: inline-block;
  width: 100%;
  background-color: #6d28d9;
  color: white;
  font-family: 'Gotham', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  padding: 14px 0;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #7c3aed;
    transform: scale(1.03);
    box-shadow: 0 0 25px rgba(109, 40, 217, 0.6);
  }
`;

export default function Releases() {
  const releases = [
    {
      id: 1,
      title: "Seeds of a Sunlit Mind EP",
      artist: "Koothan",
      description: "Novo EP da Agya Sounds por Koothan, apresenta uma jornada sonora profunda e orgânica, com texturas densas, ritmos hipnóticos e energia de pista. Download gratuito para a comunidade.",
      image: "/images/releases/seeds-of-a-sunlit-mind.jpg",
      bandcampUrl: "https://agyasounds.bandcamp.com/album/seeds-of-a-sunlit-mind-ep",
      isFree: true
    },
    {
      id: 2,
      title: "Pineal Vision EP",
      artist: "ABSYCHO",
      description: "Absycho mergulha em paisagens mentais onde frequências pulsantes atuam como chaves — abrindo portais e despertando a luz silenciosa da glândula pineal.",
      image: "/images/releases/pineal-vision.jpg",
      bandcampUrl: "https://agyasounds.bandcamp.com/album/pineal-vision-ep",
      isFree: false
    },
    {
      id: 3,
      title: "V/A - Fungus Slug",
      artist: "Compiled by Ovni Messenger",
      description: "Compilação forest/darkpsy que une mentes frescas e frequências distorcidas do underground. Artistas do Brasil, Chile, Índia e Japão em mutação psicodélica.",
      image: "/images/releases/fungus-slug.jpg",
      bandcampUrl: "https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger",
      isFree: false
    },
    {
      id: 4,
      title: "Ego Death EP",
      artist: "Naga Baba",
      description: "Três movimentos que mesclam dark progressivo e ecos ancestrais, criando batidas sombrias com cânticos antigos. Uma oferenda ao ciclo de morte e renascimento.",
      image: "/images/releases/ego-death.jpg",
      bandcampUrl: "https://agyasounds.bandcamp.com/album/ego-death-ep",
      isFree: false
    }
  ];

  return (
    <ReleasesSection id="lancamentos">
      <Container>
        <Title>ÚLTIMOS LANÇAMENTOS</Title>
        <Description>
          Explore as novas fronteiras da psicodelia experimental. De EPs conceituais 
          a álbuns imersivos, aqui você encontra a vanguarda do Darkpsy voltada 
          para a elevação da consciência e exploração do terceiro olho.
        </Description>
        <Grid>
          {releases.map((release) => (
            <Card key={release.id}>
              <ImageWrapper>
                <img 
                  src={release.image} 
                  alt={release.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.background = '#222';
                    console.log(`Erro ao carregar imagem: ${release.image}`);
                  }}
                />
              </ImageWrapper>
              <CardTitle>{release.title}</CardTitle>
              <CardArtist>{release.artist}</CardArtist>
              <CardDescription>{release.description}</CardDescription>
              <Button href={release.bandcampUrl} target="_blank" rel="noopener noreferrer">
                {release.isFree ? "FREE DOWNLOAD" : "DOWNLOAD"}
              </Button>
            </Card>
          ))}
        </Grid>
      </Container>
    </ReleasesSection>
  );
}
