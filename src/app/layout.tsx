import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/styles/globals.scss";
import { ToastContainer } from 'react-toastify';
import Providers from "../shared/providers/Providers";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = 'en';
  return (
    <html lang={lang}>
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
        <Providers lang={lang}>
          <div className={clsx(inter.className)}>{children}</div>
        </Providers>
        <div id="portal" />
      </body>
    </html>
  );
}
