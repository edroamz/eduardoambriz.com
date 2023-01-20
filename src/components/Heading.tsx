import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

type HeadingType = {
  level: 1 | 2 | 3 | 4;
};

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

interface HeadingProps
  extends HTMLProps<HTMLHeadingElement>,
    WithRequired<HeadingType, 'level'> {}

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
