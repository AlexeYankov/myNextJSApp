import type { Metadata } from 'next';
import { fonts } from '@/shared/styles/fonts';
import Providers from '../shared/providers/Providers';

export const metadata: Metadata = {
  title: 'Welcome to Next App',
  description: 'sign in page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = 'en';
  return (
    <html lang={lang} className={fonts.rubik.variable}>
      <body>
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
