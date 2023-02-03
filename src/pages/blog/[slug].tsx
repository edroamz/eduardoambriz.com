import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { SiteLayout } from '@/components/SiteLayout';
import { Mdx } from '@/components/Mdx';
import { Link } from '@/components/Link';
import { AnchorLink } from '@/components/Link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Icons } from '@/components/Icons';
import Balancer from 'react-wrap-balancer';

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slugAsParams }
  }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<{ post?: Post }> = async ({
  params
}) => {
  const post = allPosts.find((post) => post.slugAsParams === params?.slug);

  return {
    props: {
      post
    }
  };
};

const PostLayout = ({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`Eduardo Ambriz - ${post.title}`}</title>
      </Head>
      <SiteLayout>
        <div className="mx-auto mt-5 max-w-7xl">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              variant="secondary"
              className="inline-flex items-center px-6"
            >
              <Icons.chevronLeft className="mr-1.5 inline h-4 w-4" />
              <p className="text-sm tracking-tight md+:text-base">
                See all posts
              </p>
            </Link>
            <div className="mt-12 w-full px-6 text-left md:mt-16">
              <time
                dateTime={post.date}
                className="text-sm text-slate-600 dark:text-slate-400"
              >
                <p>
                  Published on {format(parseISO(post.date), 'LLLL d, yyyy')}
                </p>
              </time>
              <h1 className="mt-6 max-w-5xl text-3xl font-bold leading-snug tracking-tight md+:text-5xl md+:leading-tight md+:tracking-tighter">
                <Balancer>{post.title}</Balancer>
              </h1>
              {post?.description && (
                <p className="mt-4 tracking-tight text-slate-600 dark:text-slate-400 md+:mt-6 md+:text-2xl">
                  {post.description}.
                </p>
              )}
              <div className="mt-10 md+:hidden">
                <div className="inline-flex flex-row items-center gap-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/edroamz.png" />
                    <AvatarFallback>EA</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-sm font-semibold">Eduardo Ambriz</p>
                    <AnchorLink
                      variant="non-style"
                      href="https://twitter.com/edroamz"
                    >
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        @edroamz
                      </p>
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-4 block w-full md+:hidden" />
        </div>
        {/* grid */}
        <div className="mx-auto mt-6 grid w-full max-w-7xl grid-cols-1 items-baseline justify-between gap-x-3 md+:mt-8 md+:grid-cols-[minmax(0,1fr)_340px]">
          {/* article */}
          <article className="mx-auto flex w-full flex-col items-start md+:pr-8 lg:pr-24">
            <div className="w-full px-6 ">
              <Mdx code={post.body.code} />
              <div className="mt-4 flex flex-col justify-between gap-x-7 gap-y-10 py-8 sm:flex-row md:mt-8">
                <AnchorLink
                  variant="secondary"
                  className="text-left text-sm"
                  href={`https://github.com/edroamz/portfolio/edit/main/src/content/blog/${post.slugAsParams}.mdx`}
                >
                  Edit this page on GitHub
                </AnchorLink>
              </div>
            </div>
          </article>
          {/* sidebar */}
          <div className="hidden h-full w-full px-6 md+:block">
            <div className="flex flex-col items-start justify-center gap-16">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Author
                </p>
                <div className="mt-5 inline-flex flex-row items-center gap-x-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/edroamz.png" />
                    <AvatarFallback>EA</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-sm font-semibold">Eduardo Ambriz</p>
                    <AnchorLink
                      variant="non-style"
                      href="https://twitter.com/edroamz"
                    >
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        @edroamz
                      </p>
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <hr />
          <div className="my-20 flex items-center justify-center">
            <Link
              href="/blog"
              variant="secondary"
              className="mt-2 inline-flex items-center"
            >
              <Icons.chevronLeft className="mr-1.5 inline h-4 w-4" />
              <p>See all posts</p>
            </Link>
          </div>
        </div>
      </SiteLayout>
    </>
  );
};

export default PostLayout;
