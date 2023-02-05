import Head from 'next/head';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { SiteLayout } from '@/components/SiteLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnchorLink } from '@/components/Link';
import { GradientText } from '@/components/GradientText';
import { PostTimeline } from '@/components/PostTimeline';
import { Icons } from '@/components/Icons';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Text } from '@/components/Text';
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
          <Text
            as="h1"
            size={48}
            lineHeight={56}
            fontWeight={700}
            className="mt-8 w-full sm:text-[4rem] sm:leading-[1.2]"
            wrap
          >
            Front-End Web Developer.
          </Text>
          <Text
            as="h2"
            size={20}
            color="accents-2"
            lineHeight={32}
            className="mt-7 w-full max-w-4xl"
            wrap
          >
            Hi! I&apos;m Eduardo, a Front-End Software Engineer specializing in
            creating dynamic and user-friendly websites with clean, efficient
            code.
          </Text>
        </section>
        <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center px-6 text-center sm:mt-24">
          <Text as="h3" size={32} lineHeight={48} fontWeight={700}>
            <GradientText variant="winter">Curated Work</GradientText>
          </Text>
          <Text
            as="h4"
            size={40}
            lineHeight={48}
            fontWeight={700}
            className="mt-2 w-full sm:mt-4 sm:text-5xl sm:leading-[1.35] sm:tracking-[-0.04em]"
            wrap
          >
            Explore my portfolio of completed projects
          </Text>
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
              <div className="flex flex-col items-start justify-center text-left">
                <Text as="h5" size={20} fontWeight={600} className="mt-6">
                  car rental
                </Text>
                <Text lineHeight={28} color="accents-2" className="mt-2">
                  Your one-stop destination for all your transportation needs.
                </Text>
                <AnchorLink
                  href="https://edroamz.github.io/car-rental-react/"
                  variant="primary"
                  className="mt-3"
                >
                  <Text as="span" size={14} color="inherit">
                    Live demo
                  </Text>
                  <Icons.chevronRight className="ml-1.5 inline h-4 w-4" />
                </AnchorLink>
              </div>
            </article>
          </div>
        </section>
        <section className="mx-auto mb-32 mt-20 flex max-w-5xl flex-col items-center justify-center px-6 text-center sm:mt-24">
          <Text as="h3" size={32} lineHeight={48} fontWeight={700}>
            <GradientText variant="summer">Top-Read</GradientText>
          </Text>
          <Text
            as="h4"
            size={40}
            lineHeight={48}
            fontWeight={700}
            className="mt-2 w-full sm:mt-4 sm:text-5xl sm:leading-[1.35] sm:tracking-[-0.04em]"
            wrap
          >
            Most popularly read blog entries
          </Text>
          <PostTimeline posts={posts} />
        </section>
      </SiteLayout>
    </>
  );
}
