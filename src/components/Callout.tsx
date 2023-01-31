import { cn } from '@/lib/utils';

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export function Callout({
  children,
  icon,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn('my-6 flex items-start rounded-md border border-b-4 p-4', {
        'border-slate-900 bg-slate-50 dark:border-slate-600 dark:bg-slate-700/70 dark:[&_*]:text-slate-200':
          type === 'default',
        'border-red-900 bg-red-50 dark:border-red-700 dark:bg-red-900 dark:[&_*]:text-red-100':
          type === 'danger',
        'border-yellow-900 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-800 dark:[&_*]:text-yellow-50':
          type === 'warning'
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
