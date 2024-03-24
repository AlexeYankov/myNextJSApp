'use client';

import i18n from 'i18next';
import en from '../../../locales/en.json';
import ru from '../../../locales/ru.json';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { ReactNode } from 'react';
import { ChakraBaseProvider, theme as chakraTheme } from '@chakra-ui/react';
import { theme } from './themeConfig';

function Providers({
  children,
  lang,
}: {
  readonly children: ReactNode;
  lang: string;
}) {
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

  return (
    <ChakraBaseProvider theme={theme}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ChakraBaseProvider>
  );
}

export default Providers;
