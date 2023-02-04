import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image, { ImageProps } from 'next/image';

import { cn } from '@/lib/utils';

export interface ResponsiveImageProps extends ImageProps {
  ratio?: number;
  rounded?: boolean;
}

export function ResponsiveImage({
  ratio = 16 / 9,
  className,
  alt,
  width,
  height,
  rounded = true,
  priority = false,
  ...props
}: ResponsiveImageProps) {
  return (
    <div
      style={{ width: width }}
      className={cn(
        'max-w-full overflow-hidden border border-slate-200 dark:border-slate-700/80',
        rounded && 'rounded-xl'
      )}
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
