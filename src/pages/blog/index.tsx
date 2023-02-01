import Head from 'next/head';
import { Layout } from '@/components/Layout';
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
      <Layout>
        <section className="mb-24 flex max-w-5xl flex-col justify-center py-8 px-6 sm:mx-auto sm:items-center sm:text-center md:py-10">
          <h1 className="mt-2 max-w-4xl text-4xl leading-snug md:text-5xl md:leading-tight">
            Mastering Programming through Knowledge Sharing
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 sm:px-6">
            A Blog Dedicated to the Craft of Coding.
          </p>
          <PostTimeline posts={posts} />
        </section>
      </Layout>
    </>
  );
}
