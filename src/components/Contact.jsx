'use client';

import { useTranslations } from '@/contexts/IntlContext';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations();
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('idle');

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
        {t('contact.title')}
      </h1>

      <div className="w-full max-w-[1303px] bg-violet-700 rounded-[30px] p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-start">
        
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-[28px] md:text-[32px] font-black uppercase text-white leading-tight">
            {t('contact.heading')}
          </h2>
          <p className="text-white text-[16px] font-medium leading-relaxed">
            {t('contact.body1')}<br /><br />
            {t('contact.body2')}<br /><br />
            {t('contact.body3')}<br /><br />
            {t('contact.body4')}<br /><br />
            {t('contact.body5')}<br /><br />
            {t('contact.body6')}<br /><br />
            {t('contact.body7')}
          </p>
          <p className="text-white text-[16px] font-black uppercase">
            {t('contact.emailLabel')}
          </p>
        </div>

        <div className="lg:w-1/2 w-full bg-zinc-300 rounded-[37px] p-8 flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-[14px] font-black uppercase">{t('contact.nameLabel')}</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                className="w-full h-10 rounded-[10px] bg-white px-4 text-[14px] text-zinc-500 font-light outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-[14px] font-black uppercase">{t('contact.emailFieldLabel')}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                className="w-full h-10 rounded-[10px] bg-white px-4 text-[14px] text-zinc-500 font-light outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black text-[14px] font-black uppercase">{t('contact.messageLabel')}</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              rows={6}
              className="w-full rounded-[10px] bg-white px-4 py-3 text-[14px] text-zinc-500 font-light outline-none resize-y transition-all duration-300 ease-out focus:border-[#6d28d9] focus:ring-2 focus:ring-[#6d28d9]/20 hover:border-zinc-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full md:w-64 h-14 bg-slate-900 rounded-xl text-white text-[16px] font-medium uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 ease-out hover:scale-105 active:scale-95 md:self-end disabled:opacity-50"
          >
            {status === 'loading' ? t('contact.sending') : t('contact.send')}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-[14px] font-bold text-center">
              ✅ {t('contact.success')}
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-[14px] font-bold text-center">
              ❌ {t('contact.error')}
            </p>
          )}

          <div className="relative w-full h-[200px] mt-4">
            <Image src="/demo-character.webp" alt="Produtor Agya" fill className="object-contain" quality={80} />
          </div>
        </div>
      </div>
    </section>
  );
}