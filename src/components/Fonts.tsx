import {
  Inter as FontSans,
  Roboto_Mono as FontMono,
  Source_Serif_4 as FontSerif
} from '@next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: 'variable',
  axes: ['slnt']
});

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: 'variable'
});

const fontSerif = FontSerif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: 'variable'
  // axes: ['opsz']
});

export function Fonts() {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
          --font-serif: ${fontSerif.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
				}
			}`}</style>
    </>
  );
}
