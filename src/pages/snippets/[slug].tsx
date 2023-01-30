import Head from 'next/head';
import { allSnippets, Snippet } from 'contentlayer/generated';
import { Layout } from '@/components/Layout';
import { Mdx } from '@/components/Mdx';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export async function getStaticPaths() {
  const paths = allSnippets.map((snippet) => ({
    params: { slug: snippet.slugAsParams }
  }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<{ snippet?: Snippet }> = async ({
  params
}) => {
  const snippet = allSnippets.find(
    (snippet) => snippet.slugAsParams === params?.slug
  );

  return {
    props: {
      snippet
    }
  };
};

const SnippetLayout = ({
  snippet
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!snippet) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`Eduardo Ambriz - ${snippet.title}`}</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-8xl px-6 py-4">
          <Link
            href="/snippets"
            intent="tertiary"
            className="mt-2 inline-flex items-center text-sm font-medium"
          >
            <svg
              viewBox="0 -9 3 24"
              className="mr-3 inline h-6 w-auto overflow-visible text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"
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
            <span>See all snippets</span>
          </Link>
        </div>
        <article className="mx-auto mt-6 flex max-w-3xl flex-col items-center px-6">
          <div className="mb-12 w-full text-left">
            <Heading
              level={1}
              className="mt-4 text-4xl leading-tight tracking-[0.01em]"
            >
              {snippet.title}
            </Heading>
          </div>
          <div className="mb-32 w-full">
            <Mdx code={snippet.body.code} />
          </div>
        </article>
      </Layout>
    </>
  );
};

export default SnippetLayout;
