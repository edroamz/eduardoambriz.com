import { CSSProperties, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Balancer from 'react-wrap-balancer';
import { cn } from '@/lib/utils';

export type TextVariantProps = VariantProps<typeof textVariants>;
export const textVariants = cva('text-black dark:text-slate-100', {
  variants: {
    size: {
      10: 'text-10',
      12: 'text-12',
      13: 'text-13',
      14: 'text-14',
      16: 'text-16',
      18: 'text-18',
      20: 'text-20',
      24: 'text-24',
      32: 'text-32',
      40: 'text-40',
      48: 'text-48',
      64: 'text-64'
    },
    color: {
      inherit: 'text-inherit dark:text-inherit',
      background: 'text-background',
      foreground: 'text-foreground',
      'accents-1': 'text-accents-1',
      'accents-2': 'text-accents-2',
      'accents-3': 'text-accents-3',
      'accents-4': 'text-accents-4',
      'accents-5': 'text-accents-5',
      'accents-6': 'text-accents-6',
      'accents-7': 'text-accents-7',
      'accents-8': 'text-accents-8',
      'primary-lighter': 'text-primary-lighter',
      'primary-light': 'text-primary-light',
      primary: 'text-primary',
      'primary-dark': 'text-primary-dark',
      highlight: 'text-highlight'
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
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    },
    transform: {
      capitalize: 'capitalize',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      initial: 'normal-case'
    },
    monospace: {
      true: 'font-mono'
    },
    wrap: {
      true: 'whitespace-normal',
      false: 'whitespace-nowrap'
    },
    balanced: {
      true: 'w-full'
    }
  },
  defaultVariants: { size: 16, wrap: true, monospace: false }
});

enum AsEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  div = 'div',
  blockquote = 'blockquote',
  dt = 'dt',
  dd = 'dd',
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
  as?: keyof typeof AsEnum;
  className?: string;
  style?: CSSProperties;
  title?: string;
  monospace?: boolean;
  id?: string;
  dangerouslySetInnerHTML?: { __html: string };
  htmlFor?: string;
}

export function Text({
  children,
  as = AsEnum.p,
  color,
  size,
  lineHeight,
  fontWeight,
  align,
  transform,
  className,
  style,
  title,
  monospace,
  wrap,
  balanced,
  id,
  dangerouslySetInnerHTML,
  htmlFor
}: TextProps) {
  const TextComponent: keyof typeof AsEnum = as;

  const classNames = cn(
    textVariants({
      color,
      size,
      lineHeight,
      align,
      fontWeight,
      transform,
      monospace,
      wrap,
      balanced
    }),
    className
  );

  if (as === AsEnum.label) {
    return (
      <TextComponent
        id={id}
        className={classNames}
        style={style}
        title={title}
        htmlFor={htmlFor}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      >
        {balanced ? <Balancer>{children}</Balancer> : children}
      </TextComponent>
    );
  }

  return (
    <TextComponent
      id={id}
      className={classNames}
      style={style}
      title={title}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {balanced ? <Balancer>{children}</Balancer> : children}
    </TextComponent>
  );
}
