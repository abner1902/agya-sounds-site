'use client';
import Link from 'next/link';
import { FaSpotify, FaDeezer, FaAmazon, FaFacebook, FaInstagram } from 'react-icons/fa6';
import { SiTidal } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FaHeadphones } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contato" className="bg-white pt-10">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-gray-100 pt-16 pb-20">
          
          {/* Bio da Label */}
          <div className="md:col-span-6">
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider text-black">AGYA SOUNDS</h4>
            <div className="space-y-5 text-[15px] font-bold text-black leading-relaxed max-w-[500px]">
              <p>Criada em 2018, em São Paulo, Brasil, a Agya Sounds representa os sons do Terceiro Olho.</p>
              <p>Em meio a uma sociedade caótica, nossa música serve como um farol, guiando o ouvinte a um estado superior de consciência e conexão espiritual.</p>
              <p>Nossa curadoria foca em variações de Darkpsy e psicodelia intensa, projetada não apenas para ser ouvida, mas para ser sentida.</p>
              <p>Acreditamos no poder da música para transcender o tempo e o espaço. Com a Agya, você não apenas escuta, você desperta.</p>
              <p className="pt-2 font-black">Label Manager: ABSYCHO</p>
            </div>
          </div>

          {/* Menu Rápido */}
          <div className="md:col-span-2">
            <ul className="space-y-3 font-black text-sm uppercase tracking-widest text-black">
              <li><Link href="/" className="hover:opacity-50 transition-opacity">Início</Link></li>
              <li><Link href="/#sobre" className="hover:opacity-50 transition-opacity">Sobre</Link></li>
              <li><Link href="/artists" className="hover:opacity-50 transition-opacity">Artistas</Link></li>
              <li><Link href="/#lancamentos" className="hover:opacity-50 transition-opacity">Lançamentos</Link></li>
              <li><a href="https://www.psychedeliclab.com.br/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Tutoriais</a></li>
              <li><Link href="/contact" className="hover:opacity-50 transition-opacity">Contato</Link></li>
            </ul>
          </div>

          {/* Contato e Links */}
          <div className="md:col-span-4 space-y-12">
            
            {/* Conecte-se */}
            <div>
              <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-black">Conecte-se com a Agya Sounds</h4>
              <div className="space-y-4">
                <a href="mailto:agyasounds@gmail.com" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                  <MdEmail size={20} /> E-mail
                </a>
                <a href="https://www.instagram.com/agyasounds/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                  <FaInstagram size={20} className="text-[#E1306C]" /> Instagram
                </a>
                <a href="https://www.facebook.com/Agyasounds/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                  <FaFacebook size={20} className="text-[#1877F2]" /> Facebook
                </a>
                
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-black">Links</h4>
              <div className="space-y-4">
                <a href="https://open.spotify.com/playlist/5r9KrwsHepDB0EHVcsttif?si=aaebba30f7a64251" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                  <FaSpotify size={20} className="text-[#1DB954]" /> Oficial Playlist
                </a>
                <a href="https://www.deezer.com/br/album/719802971" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                  <FaDeezer size={20} className="text-[#EF5466]" /> Agya Effect V.A. — Deezer
                </a>
                <a href="https://music.amazon.co.uk/albums/B0DYQN3RS3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                  <FaAmazon size={20} className="text-[#FF9900]" /> Agya Effect V.A. — Amazon Music
                </a>
                <a href="https://stage.tidal.com/album/420773827" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                  <SiTidal size={20} className="text-[#000000]" /> Agya Effect V.A. — Tidal
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Barra de Direitos */}
      <div className="w-full bg-black py-8 px-6">
        <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-white uppercase tracking-[0.2em] gap-4">
          <span>@agya sounds all rights reserved 2026</span>
          <Link href="https://www.instagram.com/abnersimao.design/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
            Web Design by: Abner Simão Design
          </Link>
        </div>
      </div>
    </footer>
  );
}