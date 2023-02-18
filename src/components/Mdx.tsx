import { useMDXComponent } from 'next-contentlayer/hooks';

import { AnchorLink, Link } from '@/components/Link';
import { Callout } from '@/components/Callout';
import { Card } from '@/components/Card';
import { cn } from '@/lib/utils';
import { HTMLAttributes, LinkHTMLAttributes } from 'react';
import {
  ResponsiveImage,
  ResponsiveImageProps
} from '@/components/ResponsiveImage';

const components = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn('mt-2 scroll-m-20 text-4xl font-bold', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-12 scroll-m-20 text-3xl font-bold first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn('mt-8 scroll-m-20 text-2xl font-bold', className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn('mt-8 scroll-m-20 text-xl font-bold', className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn('mt-8 scroll-m-20 text-lg font-bold', className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn('mt-8 scroll-m-20 text-base font-bold', className)}
      {...props}
    />
  ),
  a: ({ href = '', ...props }: LinkHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    if (isInternal) {
      return <Link href={href} variant="underline" {...props}></Link>;
    }

    return <AnchorLink href={href} variant="underline" {...props}></AnchorLink>;
  },
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'font-serif text-16 dark:text-slate-100 laptop:text-18 [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-none', className)} {...props} />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal pl-4', className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn(
        'mt-[10px] font-serif text-16 dark:text-slate-100 laptop:text-18',
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-700/80 dark:text-slate-200 [&>*]:text-slate-600 dark:[&>*]:text-slate-300',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    src = '',
    alt = '',
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn(
        'my-10 rounded-md border border-slate-200 dark:border-slate-700/80',
        className
      )}
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
    <div className="my-10 w-full overflow-y-auto font-serif">
      <table className={cn('w-full tabular-nums', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        'm-0 border-t border-slate-300 p-0 dark:border-slate-800 ',
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-800 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border border-slate-200 px-4 py-2 text-left dark:border-slate-800 dark:text-slate-300 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'my-10 overflow-x-auto rounded-lg border border-slate-900 bg-slate-900 py-4 px-2 dark:border-slate-700/80 dark:bg-black',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded border border-slate-300 bg-slate-200 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm not-italic text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300',
        className
      )}
      {...props}
    />
  ),
  ResponsiveImage: ({
    ratio,
    className,
    alt,
    width,
    height,
    rounded,
    priority,
    ...props
  }: ResponsiveImageProps) => (
    <div className="my-6 laptop:my-12">
      <ResponsiveImage
        ratio={ratio}
        className={className}
        alt={alt}
        width={width}
        rounded={rounded}
        priority={priority}
        {...props}
      />
    </div>
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
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
