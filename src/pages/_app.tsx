import type { AppProps } from 'next/app';
import { Fonts } from '@/components/Fonts';
import { ThemeProvider } from 'next-themes';

import '@/styles/main.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
