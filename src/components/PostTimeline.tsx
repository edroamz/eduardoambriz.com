import { Post } from 'contentlayer/generated';
import { Link } from '@/components/Link';
import { Icons } from '@/components/Icons';
import { Text } from '@/components/Text';

import { format, parseISO } from 'date-fns';

function Post(post: Post) {
  return (
    <article className="group relative text-left">
      <div className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6"></div>
      <Icons.circle
        strokeWidth={4}
        className="absolute right-full top-[6px] mr-[22.5px] hidden h-[calc(0.7rem+1px)] w-[calc(0.7rem+1px)] overflow-visible fill-white text-slate-300 dark:fill-black dark:text-slate-700 sm:block md:mr-[2.9rem]"
      />
      <div className="relative">
        <Text
          as="h3"
          size={20}
          fontWeight={600}
          className="pt-9 lg:pt-0"
          balanced
        >
          {post.title}
        </Text>
        <Text color="accents-2" lineHeight={28} className="my-3 line-clamp-2">
          {post?.description}
        </Text>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          <dt className="sr-only">Date</dt>
          <Text
            as="dd"
            size={14}
            lineHeight={24}
            color="accents-2"
            className="whitespace-nowrap"
          >
            <time dateTime="2022-12-15T15:00:00.000Z">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </Text>
        </dl>
      </div>
      <Link
        variant="primary"
        className="flex items-center text-sm font-medium"
        href={post.slug}
      >
        <span className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6"></span>
        <Text className="relative" size={14} color="inherit">
          Read more
          <span className="sr-only">, {post.title}</span>
        </Text>
        <Icons.chevronRight className="ml-1.5 inline h-4 w-4" />
      </Link>
    </article>
  );
}

interface PostTimelineProps {
  posts: Post[];
}

export function PostTimeline({ posts }: PostTimelineProps) {
  return (
    <div className="mx-auto mt-16 w-full max-w-[52rem] px-0 sm:px-6 lg:mt-[4.5rem] lg:max-w-6xl">
      <div className="relative sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="absolute top-3 bottom-0 right-full mr-7 hidden w-px border-l border-dashed border-slate-400 bg-transparent dark:border-slate-700 sm:block md:mr-[3.25rem]"></div>
        <div className="space-y-12 lg:space-y-14">
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
