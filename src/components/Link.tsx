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
          'relative z-10 font-semibold text-slate-900 dark:text-slate-200 underline hover:decoration-2 underline-offset-4 decoration-inherit',
        primary:
          'text-primary dark:text-primary-dark decoration-transparent underline underline-offset-4 hover:decoration-inherit',
        secondary:
          'text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-slate-100',
        highlight: 'font-medium text-black dark:text-white',
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

export function Link({ variant, href, className = '', ...props }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(linkVariants({ variant }), className)}
      {...props}
    >
      {props.children}
    </NextLink>
  );
}

export interface AnchorLinkProps
  extends LinkVariantProps,
    LinkHTMLAttributes<HTMLAnchorElement> {}

export function AnchorLink({
  variant,
  href,
  className = '',
  ...props
}: AnchorLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkVariants({ variant }), className)}
      {...props}
    />
  );
}
