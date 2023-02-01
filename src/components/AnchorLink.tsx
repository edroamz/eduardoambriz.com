import { HTMLProps } from 'react';
import { linkVariants, LinkVariantProps } from '@/components/Link';
import { cn } from '@/lib/utils';

export interface AnchorLinkProps
  extends LinkVariantProps,
    HTMLProps<HTMLAnchorElement> {}

export function AnchorLink({
  intent,
  className = '',
  ...props
}: AnchorLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkVariants({ intent }), className)}
      {...props}
    />
  );
}
