import { CSSProperties, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Balancer from 'react-wrap-balancer';
import { cn } from '@/lib/utils';

export type TextVariantProps = VariantProps<typeof textVariants>;
export const textVariants = cva('text-black dark:text-slate-100', {
  variants: {
    size: {
      10: 'text-[10px]',
      12: 'text-[12px]',
      13: 'text-[13px]',
      14: 'text-[14px]',
      16: 'text-[16px] tracking-[-0.025em]',
      20: 'text-[20px] tracking-[-0.020625rem]',
      24: 'text-[24px]',
      32: 'text-[32px] tracking-[-0.05em]',
      40: 'text-[40px] tracking-[-0.05em]',
      48: 'text-[48px] tracking-[-0.05em]'
    },
    color: {
      inherit: 'text-inherit',
      'accents-1': 'text-slate-900 dark:text-slate-200',
      'accents-2': 'text-slate-600 dark:text-slate-400'
    },
    lineHeight: {
      12: 'leading-[12px]',
      14: 'leading-[14px]',
      16: 'leading-[16px]',
      20: 'leading-[20px]',
      24: 'leading-[24px]',
      28: 'leading-[28px]',
      32: 'leading-[32px]',
      40: 'leading-[40px]',
      48: 'leading-[48px]',
      56: 'leading-[56px]'
    },
    fontWeight: {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
      800: 'font-extrabold',
      900: 'font-black'
    },
    transform: {
      capitalize: 'capitalize',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      initial: 'normal-case'
    },
    monospace: {
      true: 'font-mono'
    }
  },
  defaultVariants: { size: 16 }
});

enum TextEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  div = 'div',
  blockquote = 'blockquote',
  dt = 'dt',
  legend = 'legend',
  p = 'p',
  q = 'q',
  small = 'small',
  span = 'span',
  strong = 'strong',
  label = 'label'
}

interface TextProps extends TextVariantProps {
  children: ReactNode;
  as?: keyof typeof TextEnum;
  className?: string;
  style?: CSSProperties;
  title?: string;
  wrap?: boolean;
  monospace?: boolean;
  id?: string;
  htmlFor?: string;
}

export function Text({
  children,
  as = TextEnum.p,
  color,
  size,
  lineHeight,
  fontWeight,
  transform,
  className,
  style,
  title,
  wrap = false,
  monospace = false,
  id,
  htmlFor
}: TextProps) {
  const TextComponent: keyof typeof TextEnum = as;

  const classNames = cn(
    textVariants({
      color,
      size,
      lineHeight,
      fontWeight,
      transform,
      monospace
    }),
    className
  );

  if (as === TextEnum.label) {
    return (
      <TextComponent
        id={id}
        className={classNames}
        style={style}
        title={title}
        htmlFor={htmlFor}
      >
        {wrap ? <Balancer>{children}</Balancer> : children}
      </TextComponent>
    );
  }

  return (
    <TextComponent id={id} className={classNames} style={style} title={title}>
      {wrap ? <Balancer>{children}</Balancer> : children}
    </TextComponent>
  );
}
