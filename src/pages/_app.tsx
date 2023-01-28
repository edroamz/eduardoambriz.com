import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { fontSans, fontDisplay } from '@/lib/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={`${fontSans.className} ${fontDisplay.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
