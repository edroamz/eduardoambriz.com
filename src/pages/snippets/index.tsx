import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { Link } from '@/components/Link';
import { allSnippets, Snippet } from 'contentlayer/generated';
import { Icons } from '@/components/Icons';
import { LucideProps } from 'lucide-react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

type SnippetIcons = {
  [key in Snippet['icon']]: ({ ...props }: LucideProps) => JSX.Element;
};

const icons: SnippetIcons = {
  react: Icons.react,
  css: Icons.css,
  tailwind: Icons.tailwind,
  typescript: Icons.typescript
};

interface SnippetCardProps {
  snippet: Snippet;
}

function SnippetCard({ snippet }: SnippetCardProps) {
  const Icon = icons[snippet.icon];

  return (
    <Link href={snippet.slug} variant="non-text">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="group/card mx-5 mb-[60px] h-[260px] w-[290px] rounded-lg border border-transparent shadow-sm  duration-200 hover:shadow-lg dark:border-slate-700/80 dark:shadow-none dark:hover:border-slate-300">
        <div className="flex h-[126px] items-center justify-center border-b dark:border-slate-700/80">
          <Icon className="h-14 w-14 grayscale group-hover/card:grayscale-0 group-hover/card:transition-all group-hover/card:duration-300" />
        </div>
        <div className="h-[100px] p-5 text-left">
          <div className="text-lg font-semibold">{snippet.title}</div>
          <div className="mt-[6px] text-sm leading-6 text-slate-600/90 line-clamp-2 dark:text-slate-400">
            {snippet.description}
          </div>
        </div>
      </div>
    </Link>
  );
}

export const getStaticProps: GetStaticProps<{
  snippets: Snippet[];
}> = async () => {
  const snippets = allSnippets;

  return {
    props: {
      snippets
    }
  };
};

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz - Snippets</title>
      </Head>
      <Layout>
        <section className="mx-auto mb-24 flex max-w-7xl flex-col items-center justify-center py-8 px-6 text-center md:py-10">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Code Snippets
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 sm:px-6">
            Curated collection of concise and effective code solutions to tackle
            common programming problems.
          </p>
          <div className="mt-16 flex w-full max-w-[1010px] flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
              {snippets.map((snippet) => (
                <SnippetCard snippet={snippet} key={snippet._id} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
