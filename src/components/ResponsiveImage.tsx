import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image, { ImageProps } from 'next/image';

import { cn } from '@/lib/utils';

export function ResponsiveImage({
  ratio = 16 / 9,
  className,
  alt,
  width,
  height,
  priority = false,
  ...props
}: ImageProps & { ratio?: number }) {
  return (
    <div
      style={{ width: width }}
      className="max-w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/80"
    >
      <AspectRatio ratio={ratio}>
        <Image
          alt={alt}
          fill
          className={cn('object-cover', className)}
          priority={priority}
          {...props}
        />
      </AspectRatio>
    </div>
  );
}
