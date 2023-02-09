import { Inter as FontSans, Roboto_Mono as FontMono } from '@next/font/google';

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

export function Fonts() {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
				}
			}`}</style>
    </>
  );
}
