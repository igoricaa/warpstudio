import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Lenis from '@/components/lenis';
import { ThemeProvider } from '@/components/theme-provider';

const exo2 = Exo_2({
  variable: '--font-exo2',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://warpstudio.rs'),

  title: {
    default: 'Warp Studio',
    template: '%s | Warp Studio',
  },
  description:
    'Warp Studio is a dynamic creative studio specializing in video, photo and animation production.',
  openGraph: {
    title: 'Warp Studio',
    description:
      'Warp Studio is a dynamic creative studio specializing in video, photo and animation production.',
    url: 'https://warpstudio.rs',
    siteName: 'Warp Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Warp Studio',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${exo2.variable} antialiased`}>
        <ThemeProvider
          defaultTheme='dark'
          attribute='class'
          disableTransitionOnChange
        >
          <Lenis>
            <Header />
            {children}
            <Footer />
          </Lenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
