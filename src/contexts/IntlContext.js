'use client';

import { createContext, useContext } from 'react';

const IntlContext = createContext();

export function IntlProvider({ locale, messages, children }) {
  return (
    <IntlContext.Provider value={{ locale, messages }}>
      {children}
    </IntlContext.Provider>
  );
}

export function useIntl() {
  const context = useContext(IntlContext);
  if (!context) {
    throw new Error('useIntl must be used within IntlProvider');
  }
  return context;
}

export function useTranslations() {
  const { messages } = useIntl();
  return (key) => {
    const keys = key.split('.');
    let value = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}
