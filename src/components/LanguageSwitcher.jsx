'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useIntl } from '@/contexts/IntlContext';

export default function LanguageSwitcher({ variant = 'desktop' }) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useIntl();

  const languages = [
    { code: 'pt', label: 'PT', name: 'Português', flag: '/images/flags/brazil.svg' },
    { code: 'en', label: 'EN', name: 'English', flag: '/images/flags/united-kingdom.svg' },
    { code: 'es', label: 'ES', name: 'Español', flag: '/images/flags/spain.svg' },
  ];

  const handleLanguageChange = (langCode) => {
    if (langCode === locale) return;
    const y = window.scrollY;
    sessionStorage.setItem('restoreScroll', String(y));

    const segments = (pathname || '/').split('/').filter(Boolean);
    if (['pt', 'en', 'es'].includes(segments[0])) {
      segments[0] = langCode;
    } else {
      segments.unshift(langCode);
    }
    router.push('/' + segments.join('/'), { scroll: false });
  };

  if (variant === 'mobile') {
    return (
      <div className="flex items-center justify-end gap-3">
        {languages.map((lang, i) => (
          <span key={lang.code} className="flex items-center gap-3">
            <button
              onClick={() => handleLanguageChange(lang.code)}
              aria-label={lang.name}
              className={`flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] transition-all ${
                locale === lang.code ? 'text-[#B1A27A]' : 'text-white/50 hover:text-white'
              }`}
            >
              <Image src={lang.flag} alt="" width={20} height={20} className="h-5 w-5 rounded-full" />
              {lang.label}
            </button>
            {i < languages.length - 1 && <span className="text-white/20">|</span>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-3">
          <button
            onClick={() => handleLanguageChange(lang.code)}
            aria-label={lang.name}
            className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all ${
              locale === lang.code ? 'text-[#B1A27A]' : 'text-white/50 hover:text-white'
            }`}
          >
            <Image src={lang.flag} alt="" width={16} height={16} className="h-4 w-4 rounded-full" />
            {lang.label}
          </button>
          {i < languages.length - 1 && <span className="text-[11px] text-white/15">|</span>}
        </span>
      ))}
    </div>
  );
}