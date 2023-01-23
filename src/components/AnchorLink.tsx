import { HTMLProps } from 'react';
import { linkVariants, LinkVariantProps } from '@/components/Link';
import { cn, WithRequired } from '@/lib/utils';

export interface AnchorLinkProps
  extends LinkVariantProps,
    WithRequired<HTMLProps<HTMLAnchorElement>, 'href'> {}

export function AnchorLink({
  intent,
  href,
  className,
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
