import { LinkHTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export type LinkVariantProps = VariantProps<typeof linkVariants>;
export const linkVariants = cva(
  'hover:transition-colors hover:duration-75 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-50 rounded-sm',
  {
    variants: {
      variant: {
        default:
          'relative z-10 font-semibold underline hover:decoration-2 underline-offset-4 decoration-inherit',
        primary:
          'text-primary dark:text-primary-dark decoration-transparent underline underline-offset-4 hover:decoration-inherit',
        secondary:
          'text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-slate-100',
        'non-text': 'block',
        'non-style': ''
      }
    },
    defaultVariants: { variant: 'default' }
  }
);

interface LinkProps
  extends NextLinkProps,
    Omit<AnchorLinkProps, 'href' | 'as'> {}

export function Link({ variant, className = '', ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants({ variant }), className)} {...props}>
      {props.children}
    </NextLink>
  );
}

export interface AnchorLinkProps
  extends LinkVariantProps,
    LinkHTMLAttributes<HTMLAnchorElement> {}

export function AnchorLink({
  variant,
  className = '',
  ...props
}: AnchorLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkVariants({ variant }), className)}
      {...props}
    />
  );
}
