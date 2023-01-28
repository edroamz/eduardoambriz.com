import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';
import { Callout } from '@/components/Callout';
import { AnchorLink } from '@/components/AnchorLink';
import { Link } from '@/components/Link';

interface Props {
  className?: string;
  [key: string]: any;
}

const components = {
  h1: ({ className, ...props }: Props) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl tracking-wide dark:text-slate-200',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: Props) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 text-3xl tracking-wide first:mt-0 dark:text-slate-200',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: Props) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl tracking-wide dark:text-slate-200',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: Props) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl tracking-wide dark:text-slate-200',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: Props) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg tracking-wide dark:text-slate-200',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: Props) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base tracking-wide dark:text-slate-200',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: Props) => {
    const href: string = props.href;
    const isInternalLink =
      href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
      return (
        <Link
          href={props.href}
          className={cn(props.className, className)}
          {...props}
        ></Link>
      );
    }

    return (
      <AnchorLink
        href={props.href}
        className={cn(props.className, className)}
        {...props}
      />
    );
  },
  p: ({ className, ...props }: Props) => (
    <p
      className={cn(
        'leading-7 dark:text-slate-300 [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: Props) => (
    <strong className={cn('dark:text-slate-200', className)} {...props} />
  ),
  ul: ({ className, ...props }: Props) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: Props) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: Props) => (
    <li className={cn('mt-2 dark:text-slate-300', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: Props) => (
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
  hr: ({ ...props }: Props) => (
    <hr
      className="my-4 border-slate-200 dark:border-slate-800 md:my-8"
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        'm-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-800 dark:even:bg-slate-800/40',
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: Props) => (
    <th
      className={cn(
        'border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-800/80 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: Props) => (
    <td
      className={cn(
        'border border-slate-200 px-4 py-2 text-left dark:border-slate-800/80 dark:text-slate-300 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: Props) => (
    <pre
      className={cn(
        'mt-6 mb-4 overflow-x-auto rounded-lg bg-slate-900 py-4',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: Props) => (
    <code
      className={cn(
        'relative rounded border bg-slate-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300',
        className
      )}
      {...props}
    />
  ),
  Callout
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="w-full">
      <Component components={components} />
    </div>
  );
}
