import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { Layout } from '@/components/Layout';
import { Mdx } from '@/components/Mdx';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { AnchorLink } from '@/components/AnchorLink';
import { Avatar } from '@/components/Avatar';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

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
        <title>Eduardo Ambriz - {post.title}</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-8xl px-6 py-4">
          <Link
            href="/blog"
            intent="tertiary"
            className="mt-2 inline-flex items-center text-sm font-medium"
          >
            <svg
              viewBox="0 -9 3 24"
              className="mr-3 inline h-6 w-auto overflow-visible text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"
            >
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>See all posts</span>
          </Link>
        </div>
        <article className="mx-auto mt-6 flex max-w-3xl flex-col items-center px-6">
          <div className="mb-12 w-full text-left">
            <time dateTime={post.date} className="text-sm dark:text-slate-300">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <Heading
              level={1}
              className="mt-4 text-4xl leading-tight tracking-[0.01em]"
            >
              {post.title}
            </Heading>
            <div className="mt-4 flex flex-row items-center gap-x-2">
              <Avatar />
              <div className="flex flex-col items-start justify-center text-sm font-medium">
                <span>Eduardo Ambriz</span>
                <AnchorLink intent="primary" href="https://twitter.com/edroamz">
                  <span>@edroamz</span>
                </AnchorLink>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Mdx code={post.body.code} />
            <div className="mt-4 flex flex-col justify-between gap-x-7 gap-y-10 py-8 sm:flex-row md:mt-8">
              <AnchorLink
                intent="tertiary"
                className="text-left text-sm"
                href={`https://github.com/edroamz/portfolio/edit/main/src/content/blog/${post.slugAsParams}.mdx`}
              >
                Edit this page on GitHub
              </AnchorLink>
            </div>
            <hr />
            <div className="my-16 flex items-center justify-center">
              <Link
                href="/blog"
                intent="tertiary"
                className="mt-2 inline-flex items-center text-sm font-medium"
              >
                <svg
                  viewBox="0 -9 3 24"
                  className="mr-3 inline h-6 w-auto overflow-visible text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"
                >
                  <path
                    d="M3 0L0 3L3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>See all posts</span>
              </Link>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default PostLayout;
