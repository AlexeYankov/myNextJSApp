'use client';

import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import en from '../../../locales/en.json';
import ru from '../../../locales/ru.json';
import { ReactNode, useEffect, useRef } from 'react';
import React from 'react';
import { AppStore, makeStore } from '@/features/store';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';

function Providers({ children, lang }: { readonly children: ReactNode; lang: string }) {
  i18n.use(initReactI18next).init({
    detection: {
      order: ['cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    lng: lang,
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
  });
  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={storeRef.current}>{children}</Provider>
    </I18nextProvider>
  );
}

export default Providers;
