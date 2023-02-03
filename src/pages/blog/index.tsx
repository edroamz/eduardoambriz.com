import Head from 'next/head';
import { SiteLayout } from '@/components/SiteLayout';
import { PostTimeline } from '@/components/PostTimeline';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      posts
    }
  };
};

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz - Blog</title>
      </Head>
      <SiteLayout>
        <section className="mb-24 flex max-w-5xl flex-col items-center justify-center py-8 px-6 sm:mx-auto md:py-10">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">All Posts</h1>
          <PostTimeline posts={posts} />
        </section>
      </SiteLayout>
    </>
  );
}
