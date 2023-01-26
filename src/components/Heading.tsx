import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

interface HeadingProps
  extends HTMLProps<HTMLHeadingElement>,
    Required<{
      level: 1 | 2 | 3 | 4;
    }> {}

export function Heading({
  level = 1,
  id,
  className = '',
  children,
  ...props
}: HeadingProps) {
  const Component: any = `h${level}`;

  return (
    <Component
      id={id}
      className={cn('whitespace-pre-wrap', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
