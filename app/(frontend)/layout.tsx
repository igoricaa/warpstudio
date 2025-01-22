import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Lenis from '@/components/lenis';

const exo2 = Exo_2({
  variable: '--font-exo2',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Warp Studio',
  description:
    'Warp Studio is a dynamic creative studio specializing in video, photo and animation production.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${exo2.variable} antialiased`}>
        <Lenis>
          <Header />
          {children}
          <Footer />
        </Lenis>
      </body>
    </html>
  );
}
