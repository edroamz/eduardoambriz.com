import { AnchorLink } from '@/components/AnchorLink';
import { Link } from '@/components/Link';

interface PostTimelineProps {
  posts: { key: string }[];
}

export function PostTimeline({ posts }: PostTimelineProps) {
  return (
    <div className="mx-auto mt-16 max-w-[52rem] px-0 sm:px-6 lg:max-w-6xl">
      <div className="relative sm:ml-[calc(2rem+1px)] sm:pb-12 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
        <div className="absolute top-3 bottom-0 right-full mr-7 hidden w-px bg-slate-200 dark:bg-slate-800/80 sm:block md:mr-[3.25rem]"></div>
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.key} className="group relative text-left">
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
                <h3 className="pt-8 font-display text-xl tracking-wide text-black dark:text-gray-200 lg:pt-0">
                  Protocol: A beautiful starting point for your next API
                  documentation site
                </h3>
                <div className="mt-2 mb-4 line-clamp-2">
                  <p className="leading-7">
                    It’s been months in the making but I’m excited to finally
                    release our next website template —{' '}
                    <AnchorLink
                      href="https://tailwindui.com/templates/protocol"
                      intent="secondary"
                      className="relative z-10"
                    >
                      Protocol
                    </AnchorLink>
                    , a beautiful starter kit for building amazing API reference
                    websites.
                  </p>
                </div>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6 tracking-wide dark:text-slate-400">
                    <time dateTime="2022-12-15T15:00:00.000Z">
                      December 15, 2022
                    </time>
                  </dd>
                </dl>
              </div>
              <Link
                intent="primary"
                className="flex items-center text-sm font-medium tracking-wide"
                href="/blog/2022-12-15-protocol-api-documentation-template"
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
          ))}
        </div>
      </div>
    </div>
  );
}
