'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useIntl } from '@/contexts/IntlContext';

export default function LanguageSwitcher({ variant = 'desktop' }) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useIntl();

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
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
              className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all ${
                locale === lang.code ? 'text-[#B1A27A]' : 'text-white/50 hover:text-white'
              }`}
            >
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
            className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all ${
              locale === lang.code ? 'text-[#B1A27A]' : 'text-white/50 hover:text-white'
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && <span className="text-[11px] text-white/15">|</span>}
        </span>
      ))}
    </div>
  );
}