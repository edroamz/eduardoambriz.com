import Head from 'next/head';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Layout } from '@/components/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnchorLink } from '@/components/AnchorLink';
import { GradientText } from '@/components/GradientText';
import { PostTimeline } from '@/components/PostTimeline';
import { Icons } from '@/components/Icons';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  let posts = allPosts
    .filter((post) => post.featured)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return {
    props: {
      posts
    }
  };
};

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz</title>
      </Head>
      <Layout>
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-[4.5rem] text-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/edroamz.png" />
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <h1 className="mt-6 max-w-5xl text-5xl leading-tight lg:mt-8 lg:text-6xl">
            Front-End Web Developer.
          </h1>
          <p className="mt-5 max-w-4xl text-xl leading-9 sm:px-7">
            Hi! I&apos;m Eduardo, Software Engineer and Front-End JavaScript
            Developer focused on creating dynamic, user-friendly websites with
            clean, efficient code.
          </p>
        </section>
        <section className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center px-6 text-center">
          <GradientText asChild>
            <h2 className="m-0 font-sans text-3xl leading-normal tracking-tight lg:text-[2rem]">
              Curated Work
            </h2>
          </GradientText>
          <h3 className="mt-5 max-w-5xl text-4xl leading-snug lg:mt-7 lg:text-5xl lg:leading-tight">
            Explore my portfolio of completed projects
          </h3>
          <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 items-center gap-y-14 md:mt-16">
            <div>
              <AnchorLink
                href="https://edroamz.github.io/car-rental-react/"
                intent="non-text"
              >
                <div className="w-full max-w-6xl overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src="/images/car-rental-react.png"
                      alt="car rental website"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              </AnchorLink>
              <div className="text-left">
                <h3 className="mt-6 font-sans text-lg font-semibold">
                  car rental website
                </h3>
                <p className="mt-2">
                  Your one-stop destination for all your transportation needs.
                </p>
                <AnchorLink
                  href="https://edroamz.github.io/car-rental-react/"
                  intent="primary"
                  className="mt-4 inline-block text-sm font-medium"
                >
                  <span>Live demo</span>
                  <Icons.chevronRight className="ml-1.5 inline h-4 w-4" />
                </AnchorLink>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto mb-32 mt-24 flex max-w-5xl flex-col items-center justify-center px-6 text-center">
          <GradientText intent="summer" asChild>
            <h2 className="m-0 font-sans text-3xl leading-normal tracking-tight lg:text-[2rem]">
              Top-Read Posts
            </h2>
          </GradientText>
          <h3 className="mt-5 max-w-5xl text-4xl leading-snug lg:mt-7 lg:text-5xl lg:leading-tight">
            Most popularly read blog entries
          </h3>
          <PostTimeline posts={posts} />
        </section>
      </Layout>
    </>
  );
}
