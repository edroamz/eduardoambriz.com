import { LinkHTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export type LinkVariantProps = VariantProps<typeof linkVariants>;
export const linkVariants = cva(
  'hover:transition-colors hover:duration-75 group px-1 py-[2px]',
  {
    variants: {
      variant: {
        default:
          'underline hover:decoration-2 underline-offset-4 decoration-inherit',
        primary:
          'font-semibold text-primary dark:text-primary-on-dark hover:text-black dark:hover:text-slate-100',
        secondary:
          'text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-slate-100',
        'non-style': 'p-0'
      }
    },
    defaultVariants: { variant: 'default' }
  }
);

export interface LinkProps
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
