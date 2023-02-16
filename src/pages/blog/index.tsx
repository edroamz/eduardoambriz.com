import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import { allPosts, Post } from 'contentlayer/generated';

import { SiteLayout } from '@/components/SiteLayout';
import { Text } from '@/components/Text';
import { BlogPost } from '@/components/BlogPost';

import { compareDesc } from 'date-fns';

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
        <section className="mb-24 flex max-w-5xl flex-col items-center justify-center py-8 sm:mx-auto md:py-10">
          <Text as="h1" fontWeight={600} size={32} className="sm:text-40">
            All Posts
          </Text>
          <div className="mx-auto mt-12 w-full px-6 lg:mt-16 lg:max-w-6xl">
            <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
              {posts.map((post) => (
                <BlogPost key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
