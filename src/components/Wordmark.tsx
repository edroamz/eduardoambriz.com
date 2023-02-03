import { cn } from '@/lib/utils';

export function Wordmark({ className = '', ...props }) {
  return (
    <span
      className={cn(
        'inline-block shrink-0 text-2xl font-bold tracking-tight text-black dark:text-slate-100',
        className
      )}
      {...props}
    >
      Eduardo Ambriz
    </span>
  );
}
