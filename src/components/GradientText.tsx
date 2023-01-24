import { ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Slot, SlotProps } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

type GradientTextVariantProps = VariantProps<typeof gradientTextVariants>;
export const gradientTextVariants = cva(
  'inline-block m-0 bg-clip-text font-bold [&_p]:text-[length:inherit] [&_p]:leading-[1.2]',
  {
    variants: {
      intent: {
        gotham: 'from-black to-gray-800',
        winter:
          'from-[#5237f9] to-[#00b8b9] dark:from-[#6369ff] dark:to-[#87ffff]',
        summer:
          'from-[#e36b52] via-[#632cda] to-[#5237f9] dark:from-[#fca493] dark:via-[#9f75f9] dark:to-[#6369ff]'
      },
      direction: {
        top: 'bg-gradient-to-t',
        'top-right': 'bg-gradient-to-tr',
        right: 'bg-gradient-to-r',
        'bottom-right': 'bg-gradient-to-br',
        bottom: 'bg-gradient-to-b',
        'bottom-left': 'bg-gradient-to-bl',
        left: 'bg-gradient-to-l',
        'top-left': 'bg-gradient-to-tl'
      }
    },
    defaultVariants: {
      intent: 'winter',
      direction: 'right'
    }
  }
);

interface GradientTextProps
  extends GradientTextVariantProps,
    Omit<HTMLProps<HTMLElement>, 'ref'> {
  asChild?: boolean;
}

export function GradientText({
  intent,
  asChild,
  direction,
  className = '',
  ...props
}: GradientTextProps) {
  const Component:
    | ForwardRefExoticComponent<SlotProps & RefAttributes<HTMLElement>>
    | 'span' = asChild ? Slot : 'span';

  return (
    <Component
      className={cn(gradientTextVariants({ intent, direction }), className)}
      style={{ WebkitTextFillColor: 'transparent' }}
      {...props}
    >
      {props.children}
    </Component>
  );
}
