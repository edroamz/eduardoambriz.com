import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
