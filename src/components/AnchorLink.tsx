import { HTMLProps } from 'react';
import { linkVariants, LinkVariantProps } from '@/components/Link';
import { cn } from '@/lib/utils';

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface AnchorLinkProps
  extends LinkVariantProps,
    WithRequired<HTMLProps<HTMLAnchorElement>, 'href'> {}

export function AnchorLink({
  intent,
  href,
  className = '',
  ...props
}: AnchorLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkVariants({ intent }), className)}
      {...props}
    />
  );
}
