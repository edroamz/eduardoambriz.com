import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

type LinkVariantProps = VariantProps<typeof linkVariants>;
const linkVariants = cva(
  'hover:transition-colors hover:duration-75 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-50 rounded-sm',
  {
    variants: {
      intent: {
        primary:
          'text-gray-600/80 hover:text-black dark:text-gray-400 dark:hover:text-gray-100',
        secondary:
          'font-medium underline underline-offset-4 decoration-transparent hover:decoration-inherit',
        highlight: 'font-medium text-black dark:text-white',
        'non-text': 'block w-full'
      }
    },
    defaultVariants: { intent: 'primary' }
  }
);

interface AnchorLinkProps
  extends LinkVariantProps,
    HTMLProps<HTMLAnchorElement> {}

interface LinkProps
  extends NextLinkProps,
    Omit<AnchorLinkProps, 'href' | 'as' | 'ref'> {}

export function Link({ intent, className, ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants({ intent }), className)} {...props}>
      {props.children}
    </NextLink>
  );
}
