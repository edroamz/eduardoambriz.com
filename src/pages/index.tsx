import Head from 'next/head';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';

import { SiteLayout } from '@/components/SiteLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnchorLink } from '@/components/Link';
import { Icons } from '@/components/Icons';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Text } from '@/components/Text';
import { BlogPost } from '@/components/BlogPost';

import { compareDesc } from 'date-fns';

const projectsConfig = [
  {
    url: 'https://edroamz.github.io/car-rental-react',
    title: 'car rental',
    description: 'Your one-stop destination for all your transportation needs',
    image: {
      src: '/images/car-rental-react.png',
      alt: 'a car rental website'
    }
  }
];

interface Project {
  url: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}
interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 items-center gap-y-14 sm:mt-16">
      {projects.map((project, index) => (
        <article key={project.title}>
          <AnchorLink
            href={project.url}
            className="block overflow-hidden rounded-xl outline-none transition-shadow focus-visible:outline-primary focus-visible:ring-2 dark:focus-visible:outline-primary-light"
          >
            <ResponsiveImage
              src={project.image.src}
              alt={project.image.alt}
              priority={index === 0 && true}
            />
          </AnchorLink>
          <div className="flex flex-col items-start justify-center">
            <Text
              as="h4"
              size={20}
              lineHeight={28}
              fontWeight={600}
              className="mt-6"
              balanced
            >
              {project.title}
            </Text>
            <Text
              lineHeight={28}
              color="accents-2"
              align="left"
              className="mt-2"
            >
              {project.description}
            </Text>
            <AnchorLink href={project.url} variant="primary" className="mt-2">
              <Text as="span" size={14} color="inherit">
                Live demo
              </Text>
              <Icons.arrowUpRight className="ml-1.5 inline h-4 w-4" />
            </AnchorLink>
          </div>
        </article>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  featuredPosts: Post[];
}> = async () => {
  let featuredPosts = allPosts
    .filter((post) => post.featured)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return {
    props: {
      featuredPosts
    }
  };
};

export default function Home({
  featuredPosts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz</title>
      </Head>
      <SiteLayout>
        <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-10 pt-20">
          <Avatar>
            <AvatarImage src="https://github.com/edroamz.png" />
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <Text
            as="h1"
            size={48}
            lineHeight={56}
            align="center"
            className="mt-8 font-[650] sm:text-64"
            balanced
          >
            Front-End Web Developer.
          </Text>
          <Text
            as="h2"
            size={20}
            color="accents-3"
            align="center"
            lineHeight={32}
            className="mt-6 max-w-4xl "
            balanced
          >
            Hi! I&apos;m Eduardo, a Front-End Software Engineer specializing in
            creating dynamic and user-friendly websites with clean, efficient
            code.
          </Text>
        </section>
        <section className="mx-auto mt-20 flex w-full max-w-7xl flex-col items-center justify-center px-6 sm:mt-24">
          <Text
            as="h3"
            size={32}
            fontWeight={600}
            align="center"
            className="mt-2 sm:mt-4 sm:text-48"
            balanced
          >
            Explore my portfolio of completed projects
          </Text>
          <Projects projects={projectsConfig} />
        </section>
        {featuredPosts.length > 0 && (
          <section className="mx-auto mt-20 flex max-w-5xl flex-col items-center justify-center sm:mt-24">
            <Text
              as="h3"
              size={32}
              fontWeight={600}
              align="center"
              className="mt-2 sm:mt-4 sm:text-48"
              balanced
            >
              Most popularly read blog posts
            </Text>
            <div className="mx-auto mt-12 w-full px-6 lg:mt-16 lg:max-w-6xl">
              <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
                {featuredPosts.map((post) => (
                  <BlogPost key={post._id} post={post} heading="h4" />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="mb-32"></div>
      </SiteLayout>
    </>
  );
}
