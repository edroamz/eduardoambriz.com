import { useMDXComponent } from 'next-contentlayer/hooks';

import Image, { ImageProps } from 'next/image';
import { AnchorLink } from '@/components/Link';
import { Callout } from '@/components/Callout';
import { Card } from '@/components/Card';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

const components = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight first:mt-0 dark:border-b-slate-700',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: AnchorLink,
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'leading-7 dark:text-slate-300 [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong className={cn('dark:text-slate-200', className)} {...props} />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li className={cn('mt-2 dark:text-slate-300', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-700 dark:text-slate-200 [&>*]:text-slate-600 dark:[&>*]:text-slate-400',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn('rounded-md border border-slate-200', className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: HTMLAttributes<HTMLHRElement>) => (
    <hr
      className="my-4 border-slate-200 dark:border-slate-800 md:my-8"
      {...props}
    />
  ),
  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full tabular-nums', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        'm-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-800 dark:even:bg-slate-800/40',
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-800/80 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border border-slate-200 px-4 py-2 text-left dark:border-slate-800/80 dark:text-slate-300 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mt-6 mb-4 overflow-x-auto rounded-lg border border-slate-900 bg-slate-900 py-4 px-2 dark:border-slate-700/80 dark:bg-slate-900/80',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded border border-slate-300 bg-slate-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300',
        className
      )}
      {...props}
    />
  ),
  Image: ({ className, alt, ...props }: ImageProps) => (
    <Image
      className={cn(
        'mt-6 mb-4 rounded-md border border-slate-200 dark:border-slate-800',
        className
      )}
      alt={alt}
      {...props}
    />
  ),
  Callout,
  Card
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <>
      <Component components={components} />
    </>
  );
}
