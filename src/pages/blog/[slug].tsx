import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { Layout } from '@/components/Layout';
import { Mdx } from '@/components/Mdx';
import { Link } from '@/components/Link';
import { AnchorLink } from '@/components/Link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Icons } from '@/components/Icons';

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
      <Layout>
        <div className="mx-auto mt-7 flex w-full max-w-8xl flex-col items-baseline justify-between gap-x-6 gap-y-7 px-6 xl:flex-row">
          <div className="w-full xl:w-auto xl:flex-1">
            <Link
              href="/blog"
              variant="secondary"
              className="inline-flex items-center font-medium"
            >
              <Icons.chevronLeft className="mr-1.5 inline h-4 w-4" />
              <p>See all posts</p>
            </Link>
          </div>
          <article className="mx-auto flex w-full max-w-3xl flex-col items-center">
            <div className="w-full text-left">
              <time
                dateTime={post.date}
                className="text-sm text-slate-700 dark:text-slate-300"
              >
                Published on {format(parseISO(post.date), 'LLLL d, yyyy')}
              </time>
              <h1 className="mt-4 max-w-5xl text-[2rem] font-extrabold leading-snug tracking-tight md:text-[2.5rem] md:leading-tight">
                {post.title}
              </h1>
              <div className="mt-5">
                <AnchorLink
                  variant="non-style"
                  className="inline-flex flex-row items-center gap-x-3"
                  href="https://twitter.com/edroamz"
                >
                  <Avatar>
                    <AvatarImage src="https://github.com/edroamz.png" />
                    <AvatarFallback>EA</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start justify-center text-sm font-medium">
                    <span className="font-semibold">Eduardo Ambriz</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      @edroamz
                    </span>
                  </div>
                </AnchorLink>
              </div>
            </div>
            <hr className="mt-6 w-full" />
            <div className="mt-6 w-full md:mt-8">
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
              <hr />
              <div className="my-20 flex items-center justify-center">
                <Link
                  href="/blog"
                  variant="secondary"
                  className="mt-2 inline-flex items-center font-medium"
                >
                  <Icons.chevronLeft className="mr-1.5 inline h-4 w-4" />
                  <p>See all posts</p>
                </Link>
              </div>
            </div>
          </article>
          <div className="hidden w-full border border-green-500 xl:invisible xl:block xl:w-auto xl:flex-1"></div>
        </div>
      </Layout>
    </>
  );
};

export default PostLayout;
