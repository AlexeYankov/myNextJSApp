import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Providers lang={lang}>{children}</Providers>
      </body>
    </html>
  );
}
