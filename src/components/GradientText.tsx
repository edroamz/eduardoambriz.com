import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type GradientTextVariantProps = VariantProps<typeof gradientTextVariants>;
export const gradientTextVariants = cva(
  'bg-clip-text bg-origin-padding box-decoration-clone selection:bg-inherit/[0.6] selection:bg-highlight/30',
  {
    variants: {
      variant: {
        winter:
          'bg-[#5237f9] dark:bg-[#6369ff] from-[#5237f9] to-[#00b8b9] dark:from-[#6369ff] dark:to-[#87ffff]',
        summer:
          'bg-[#e36b52] dark:bg-[#fca493] from-[#e36b52] to-[#632cda]  dark:from-[#fca493] dark:to-[#9f75f9] '
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
      style={{
        WebkitTextFillColor: 'transparent',
        color: 'unset'
      }}
      {...props}
    >
      {props.children}
    </span>
  );
}
