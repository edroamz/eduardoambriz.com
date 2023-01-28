import { Inter as FontSans } from '@next/font/google';
import localFont from '@next/font/local';

export const fontSans = FontSans({
  variable: '--font-inter',
  subsets: ['latin']
});

export const fontDisplay = localFont({
  variable: '--font-cal',
  src: './../fonts/CalSans-SemiBold.woff2',
  display: 'optional'
});
