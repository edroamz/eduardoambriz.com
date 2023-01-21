import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

export const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin']
});

export const calSans = localFont({
  variable: '--font-cal-sans',
  src: './../fonts/CalSans-SemiBold.woff2',
  display: 'optional'
});
