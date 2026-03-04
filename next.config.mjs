/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Isso aqui faz a mágica: converte seus JPEGs pesados em AVIF (super leve) automaticamente
    formats: ['image/avif', 'image/webp'],
    
    // Isso limita o tamanho das fotos para não baixar arquivos gigantes em telas pequenas
    deviceSizes: [640, 750, 828, 1080, 1200],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;