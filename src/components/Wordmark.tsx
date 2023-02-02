import { cn } from '@/lib/utils';

export function Wordmark({ className = '', ...props }) {
  return (
    <div
      className={cn(
        'inline-block shrink-0 font-display text-2xl tracking-[0.025em] text-black dark:text-gray-200',
        className
      )}
      {...props}
    >
      Eduardo Ambriz
    </div>
  );
}
