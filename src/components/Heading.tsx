import { cn } from '@/lib/utils';
import { forwardRef, HTMLProps, Ref } from 'react';

interface HeadingProps
  extends HTMLProps<HTMLHeadingElement>,
    Required<{
      level: 1 | 2 | 3 | 4;
    }> {}

export const Heading = forwardRef(
  (props: HeadingProps, ref: Ref<HTMLHeadingElement>) => {
    const Component: any = `h${props.level}`;

    return (
      <Component
        ref={ref}
        id={props.id}
        className={cn('whitespace-pre-wrap', props.className)}
        {...props}
      >
        {props.children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';
