import type { AppProps } from 'next/app';
import {
  Inter as FontSans,
  Noto_Sans_Mono as FontMono
} from '@next/font/google';
import localFont from '@next/font/local';
import { ThemeProvider } from 'next-themes';

import '@/styles/main.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

const fontDisplay = localFont({
  variable: '--font-cal',
  src: './../assets/fonts/CalSans-SemiBold.woff2'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
          --font-display: ${fontDisplay.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
				}
			}`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className={`${fontSans.className} ${fontDisplay.variable}`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
