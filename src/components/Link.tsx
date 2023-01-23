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
          'text-blue-600 dark:text-blue-300 decoration-transparent underline underline-offset-4 hover:decoration-inherit',
        secondary:
          'font-semibold text-slate-900 dark:text-slate-200 decoration-transparent underline underline-offset-4 hover:decoration-inherit',
        tertiary:
          'text-gray-600/80 hover:text-black dark:text-gray-400 dark:hover:text-gray-100',
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

export function Link({ intent, className, ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants({ intent }), className)} {...props}>
      {props.children}
    </NextLink>
  );
}
