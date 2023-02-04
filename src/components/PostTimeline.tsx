import { Post } from 'contentlayer/generated';
import { Link } from '@/components/Link';
import { Icons } from '@/components/Icons';
import Balancer from 'react-wrap-balancer';

import { format, parseISO } from 'date-fns';

function Post(post: Post) {
  return (
    <article className="group relative text-left">
      <div className="absolute -inset-y-2.5 -inset-x-4 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/40 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6"></div>
      <Icons.circle
        strokeWidth={4}
        className="absolute right-full top-[6px] mr-[22.5px] hidden h-[calc(0.7rem+1px)] w-[calc(0.7rem+1px)] overflow-visible fill-white text-slate-300 dark:fill-black dark:text-slate-700  sm:block md:mr-[2.9rem]"
      />
      <div className="relative">
        <h3 className="w-full pt-9 text-xl font-semibold tracking-[-0.04em] lg:pt-0 lg:text-[22px] lg:tracking-[-0.05em]">
          <Balancer>{post.title}</Balancer>
        </h3>
        <p className="mt-2 mb-4 leading-7 tracking-[-0.02em] text-slate-600 line-clamp-2 dark:text-slate-400">
          {post?.description}
        </p>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          <dt className="sr-only">Date</dt>
          <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
            <time dateTime="2022-12-15T15:00:00.000Z">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </dd>
        </dl>
      </div>
      <Link
        variant="primary"
        className="flex items-center text-sm font-medium"
        href={post.slug}
      >
        <span className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6"></span>
        <span className="relative">
          Read more
          <span className="sr-only">, {post.title}</span>
        </span>
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
