'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ nome: '', email: '', mensagem: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-950 to-stone-800 px-6 py-20 flex flex-col items-center">
      
      <h1 className="text-[40px] font-black text-white uppercase tracking-tighter mb-16 text-center">
        CONTATO
      </h1>

      <div className="w-full max-w-[1303px] bg-violet-700 rounded-[30px] p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Lado esquerdo — texto */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-[28px] md:text-[32px] font-black uppercase text-white leading-tight">
            Quer lançar sua música<br />
            ou entrar em contato<br />
            com a Agya Sounds?
          </h2>
          <p className="text-white text-[16px] font-medium leading-relaxed">
            Estamos sempre abertos a descobrir novos artistas e novas sonoridades dentro do universo do Darkpsy!<br /><br />
            Do progressivo ao high bpm (130 a 200 BPM).<br /><br />
            Valorizamos autenticidade, qualidade, identidade sonora e evolução artística.<br /><br />
            Se você deseja enviar material, compartilhe seu link do SoundCloud ou Google Drive (em WAV, 44.1kHz, 24-bit), com a mixagem em -6dB.<br /><br />
            Queremos ouvir sua essência e acompanhar sua jornada sonora.<br /><br />
            Também ficamos felizes em conversar caso você queira organizar uma Agya Sounds Night, propor uma colaboração ou simplesmente tirar alguma dúvida.<br /><br />
            Preencha o formulário ao lado com seu nome, e-mail e mensagem.<br />
            — Responderemos o mais breve possível.
          </p>
          <p className="text-white text-[16px] font-black uppercase">
            NOSSO E-MAIL: AGYASOUNDS@GMAIL.COM
          </p>
        </div>

        {/* Lado direito — formulário + imagem */}
        <div className="lg:w-1/2 w-full bg-zinc-300 rounded-[37px] p-8 flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-[14px] font-black uppercase">Nome:</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className="w-full h-10 rounded-[10px] bg-white px-4 text-[14px] text-zinc-500 font-light outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-[14px] font-black uppercase">E-mail:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                className="w-full h-10 rounded-[10px] bg-white px-4 text-[14px] text-zinc-500 font-light outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black text-[14px] font-black uppercase">Mensagem:</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              rows={6}
              className="w-full rounded-[10px] bg-white px-4 py-3 text-[14px] text-zinc-500 font-light outline-none resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-64 h-14 bg-slate-900 rounded-xl text-white text-[16px] font-medium uppercase tracking-widest hover:bg-slate-800 transition-all self-end disabled:opacity-50"
          >
            {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-[14px] font-bold text-center">
              ✅ Mensagem enviada com sucesso!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-[14px] font-bold text-center">
              ❌ Erro ao enviar. Tente novamente.
            </p>
          )}

          <div className="relative w-full h-[200px]">
            <Image
              src="/demo-character.png"
              alt="Produtor Agya"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}