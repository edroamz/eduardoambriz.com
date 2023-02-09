import { extendTailwindMerge, twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    text: [
      {
        text: [
          '10',
          '12',
          '13',
          '14',
          '16',
          '18',
          '20',
          '24',
          '32',
          '40',
          '48',
          '64'
        ]
      }
    ],
    colors: [
      'background',
      'foreground',
      { accents: ['1', '2', '3', '4', '5', '6', '7', '8'] },
      { primary: ['', 'lighter', 'light', 'dark'] },
      'highlight'
    ]
  }
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
