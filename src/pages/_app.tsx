import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { inter, calSans } from '@/lib/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={`${inter.className} ${calSans.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
