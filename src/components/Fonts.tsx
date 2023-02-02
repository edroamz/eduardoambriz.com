import {
  Inter as FontSans,
  Noto_Sans_Mono as FontMono
} from '@next/font/google';
import localFont from '@next/font/local';

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
  variable: '--font-display',
  src: './../assets/fonts/CalSans-SemiBold.woff2'
});

export function Fonts() {
  return (
    <>
      <style jsx global>{`
				:root {
          --font-display: ${fontDisplay.style.fontFamily};
					--font-sans: ${fontSans.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
				}
			}`}</style>
    </>
  );
}
