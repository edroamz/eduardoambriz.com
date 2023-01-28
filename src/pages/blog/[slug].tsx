import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { Layout } from '@/components/Layout';
import { Mdx } from '@/components/Mdx';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slugAsParams }
  }));

  return {
    paths,
    fallback: false
  };
}

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post: Post | undefined = allPosts.find(
    (post) => post.slugAsParams === params?.slug
  );

  return {
    props: {
      post
    }
  };
}

interface PostLayoutProps {
  post: Post;
}

const PostLayout = ({ post }: PostLayoutProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-8xl px-6 py-4">
          <Link
            href="/blog"
            intent="tertiary"
            className="mt-4 inline-flex items-center font-semibold"
          >
            <svg
              viewBox="0 -9 3 24"
              className="mr-3 inline h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
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
            <span>Back to Blog</span>
          </Link>
        </div>
        <article className="mx-auto mt-8 flex max-w-3xl flex-col items-center px-6 lg:px-0">
          <div className="mb-12 w-full text-left">
            <time dateTime={post.date} className="mb-1 text-sm tracking-wide">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <Heading
              level={1}
              className="mt-4 text-4xl leading-tight tracking-[0.01em]"
            >
              {post.title}
            </Heading>
          </div>
          <Mdx code={post.body.code} />
        </article>
      </Layout>
    </>
  );
};

export default PostLayout;
