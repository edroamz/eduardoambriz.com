import { Link } from '@/components/Link';
import { BlogProps } from '@/pages/blog';
import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { Mdx } from '@/components/Mdx';

function Post(post: Post) {
  return (
    <article className="group relative text-left">
      <div className="absolute -inset-y-2.5 -inset-x-4 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/40 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6"></div>
      <svg
        viewBox="0 0 9 9"
        className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block md:mr-12"
      >
        <circle
          cx="4.5"
          cy="4.5"
          r="4.5"
          stroke="currentColor"
          className="fill-white dark:fill-slate-900"
          strokeWidth="2"
        ></circle>
      </svg>
      <div className="relative">
        <h3 className="pt-8 font-sans text-lg font-semibold lg:pt-0">
          {post.title}
        </h3>
        <div className="mt-2 mb-4 line-clamp-2">
          {post?.description?.code && <Mdx code={post.description.code} />}
        </div>
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
        intent="primary"
        className="flex items-center text-sm font-medium"
        href={post.slug}
      >
        <span className="absolute -inset-y-2.5 -inset-x-4 sm:rounded-2xl md:-inset-y-4 md:-inset-x-6"></span>
        <span className="relative">
          Read more
          <span className="sr-only">
            , Protocol: A beautiful starting point for your next API
            documentation site
          </span>
        </span>
        <svg
          className="relative mt-px ml-2.5 overflow-visible text-sky-300 dark:text-sky-700"
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
      </Link>
    </article>
  );
}

export function PostTimeline({ posts }: BlogProps) {
  return (
    <div className="mx-auto mt-16 w-full max-w-[52rem] px-0 sm:px-6 lg:max-w-6xl">
      <div className="relative sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="absolute top-3 bottom-0 right-full mr-7 hidden w-px bg-slate-200 dark:bg-slate-800/80 sm:block md:mr-[3.25rem]"></div>
        <div className="space-y-16">
          {posts.map((post, idx) => (
            <Post key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
