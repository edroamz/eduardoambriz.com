import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { AnchorLinkProps } from '@/components/AnchorLink';

export type LinkVariantProps = VariantProps<typeof linkVariants>;
export const linkVariants = cva(
  'hover:transition-colors hover:duration-75 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-50 rounded-sm',
  {
    variants: {
      intent: {
        primary:
          'text-primary dark:text-primary-dark decoration-transparent underline underline-offset-4 hover:decoration-inherit',
        secondary:
          'relative z-10 font-semibold text-slate-900 dark:text-slate-200 underline hover:decoration-2 underline-offset-4 decoration-inherit ',
        tertiary:
          'text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-slate-100',
        highlight: 'font-medium text-black dark:text-white',
        'non-text': 'block',
        'non-style': ''
      }
    },
    defaultVariants: { intent: 'secondary' }
  }
);

interface LinkProps
  extends NextLinkProps,
    Omit<AnchorLinkProps, 'href' | 'as' | 'ref'> {}

export function Link({ intent, className = '', ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants({ intent }), className)} {...props}>
      {props.children}
    </NextLink>
  );
}
