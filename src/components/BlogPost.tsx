import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Text } from '@/components/Text';
import { Post } from 'contentlayer/generated';
import { Link } from '@/components/Link';

import { format, parseISO } from 'date-fns';

interface BlogPostProps {
  post: Post;
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function BlogPost({ post, heading = 'h2' }: BlogPostProps) {
  return (
    <article className="relative flex h-full w-full flex-col items-start justify-start rounded-md">
      {post.image?.src && post.image?.alt && (
        <div className="h-auto w-full">
          <ResponsiveImage src={post.image.src} alt={post.image.alt} />
        </div>
      )}
      <div className="pb-1">
        <Text as={heading} size={20} fontWeight={700} className="mt-6" balanced>
          {post.title}
        </Text>
        {post.description && (
          <Text lineHeight={28} className="mt-3">
            {post.description}.
          </Text>
        )}
        <time dateTime={post.date}>
          <Text
            size={13}
            className="mt-6 text-sm text-slate-600 dark:text-slate-400"
          >
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </Text>
        </time>
      </div>
      <Link href={post.slug} className="absolute inset-0 h-full w-full" />
    </article>
  );
}
