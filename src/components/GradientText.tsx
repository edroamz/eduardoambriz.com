import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type GradientTextVariantProps = VariantProps<typeof gradientTextVariants>;
export const gradientTextVariants = cva(
  'inline m-0 bg-clip-text font-bold [&_p]:text-[length:inherit] [&_p]:leading-[1.2]',
  {
    variants: {
      variant: {
        winter:
          'from-[#5237f9] to-[#00b8b9] dark:from-[#6369ff] dark:to-[#87ffff]',
        summer:
          'from-[#e36b52] to-[#632cda]  dark:from-[#fca493] dark:to-[#9f75f9] '
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
      direction: 'right'
    }
  }
);

interface GradientTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    Omit<GradientTextVariantProps, 'variant'>,
    Required<Pick<GradientTextVariantProps, 'variant'>> {}

export function GradientText({
  variant,
  direction,
  className = '',
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(gradientTextVariants({ variant, direction }), className)}
      style={{ WebkitTextFillColor: 'transparent' }}
      {...props}
    >
      {props.children}
    </span>
  );
}
