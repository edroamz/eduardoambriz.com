import Head from 'next/head';
import { SiteLayout } from '@/components/SiteLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnchorLink } from '@/components/Link';
import { GradientText } from '@/components/GradientText';
import { PostTimeline } from '@/components/PostTimeline';
import { Icons } from '@/components/Icons';
import { allPosts, Post } from 'contentlayer/generated';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import Balancer from 'react-wrap-balancer';

import { compareDesc } from 'date-fns';

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
      <SiteLayout>
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-10 pt-12 text-center">
          <Avatar>
            <AvatarImage src="https://github.com/edroamz.png" />
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <h1 className="mt-8 w-full text-[3rem] font-bold leading-tight tracking-tighter sm:text-[4rem] sm:leading-[1.2]">
            <Balancer>Front-End Web Developer.</Balancer>
          </h1>
          <p className="mt-7 w-full max-w-4xl text-xl leading-8 tracking-[-0.020625rem] text-slate-600 dark:text-slate-400">
            <Balancer>
              Hi! I&apos;m Eduardo, Software Engineer and Front-End JavaScript
              Developer focused on creating dynamic, user-friendly websites with
              clean, efficient code.
            </Balancer>
          </p>
        </section>
        <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center px-6 text-center sm:mt-24">
          <h2 className="m-0 text-3xl font-bold leading-normal tracking-[-0.045em]">
            <GradientText variant="winter">Curated Work</GradientText>
          </h2>
          <h3 className="mt-2 w-full text-[2.5rem] font-bold leading-snug tracking-tighter sm:mt-4 sm:text-5xl sm:leading-[1.35] sm:tracking-[-0.04em]">
            <Balancer>Explore my portfolio of completed projects</Balancer>
          </h3>
          <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 items-center gap-y-14 sm:mt-16">
            <article>
              <AnchorLink
                href="https://edroamz.github.io/car-rental-react/"
                variant="non-style"
                className="block overflow-hidden rounded-xl outline-none ring-primary focus-visible:ring-2 dark:ring-primary-on-dark"
              >
                <ResponsiveImage
                  src="/images/car-rental-react.png"
                  alt="car rental website"
                  priority
                />
              </AnchorLink>
              <div className="text-left">
                <h4 className="mt-4 text-xl font-semibold tracking-[-0.05em] sm:mt-6">
                  car rental website
                </h4>
                <p className="mt-2 leading-7 tracking-tight text-slate-600 dark:text-slate-400">
                  Your one-stop destination for all your transportation needs.
                </p>
                <AnchorLink
                  href="https://edroamz.github.io/car-rental-react/"
                  variant="primary"
                  className="mt-3 inline-block text-sm"
                >
                  <span>Live demo</span>
                  <Icons.chevronRight className="ml-1.5 inline h-4 w-4" />
                </AnchorLink>
              </div>
            </article>
          </div>
        </section>
        <section className="mx-auto mb-32 mt-20 flex max-w-5xl flex-col items-center justify-center px-6 text-center sm:mt-24">
          <h2 className="m-0 text-3xl font-bold leading-normal tracking-[-0.045em]">
            <GradientText variant="summer">Top-Read</GradientText>
          </h2>
          <h3 className="mt-2 w-full text-[2.5rem] font-bold leading-snug tracking-tighter sm:mt-4 sm:text-5xl sm:leading-[1.35] sm:tracking-[-0.04em]">
            <Balancer>Most popularly read blog entries</Balancer>
          </h3>
          <PostTimeline posts={posts} />
        </section>
      </SiteLayout>
    </>
  );
}
