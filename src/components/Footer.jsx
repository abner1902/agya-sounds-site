'use client';

export default function Footer() {
  return (
    <footer id="contato" className="bg-white pb-10 pt-10">
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
              <li><a href="#" className="hover:opacity-50 transition-opacity">Início</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">Sobre</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">Artistas</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">DJs</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">Live Acts</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">Lançamentos</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">Tutoriais</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">Contato</a></li>
            </ul>
          </div>

          {/* Contato e Links */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-black">Conecte-se com a Agya Sounds</h4>
              <div className="space-y-4">
                <a href="mailto:contato@agyasounds.com" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                   <span className="text-xl">📧</span> E-mail
                </a>
                <a href="#" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                   <span className="text-xl">📋</span> Bookings
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-black">Links</h4>
              <a href="#" className="flex items-center gap-3 font-bold text-sm text-black hover:opacity-60 transition-opacity">
                 <span className="text-2xl">🎧</span> Oficial Playlist
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Direitos */}
      <div className="w-full bg-black py-8 px-6">
        <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-white uppercase tracking-[0.2em] gap-4">
          <span>@agya sounds all rights reserved 2026</span>
          <span>Web Design by: Abner Simão Design (instagram)</span>
        </div>
      </div>
    </footer>
  );
}