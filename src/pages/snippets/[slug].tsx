import Head from 'next/head';
import { allSnippets, Snippet } from 'contentlayer/generated';
import { Layout } from '@/components/Layout';
import { Mdx } from '@/components/Mdx';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Icons } from '@/components/Icons';

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
            className="mt-4 inline-flex items-center text-sm font-medium"
          >
            <Icons.chevronLeft className="mr-1.5 inline h-4 w-4" />
            <span>See all snippets</span>
          </Link>
        </div>
        <article className="mx-auto mt-6 flex max-w-3xl flex-col items-center px-6">
          <div className="w-full text-left">
            <Heading
              level={1}
              className="text-4xl leading-tight tracking-[0.01em]"
            >
              {snippet.title}
            </Heading>
            {snippet?.description && (
              <div className="mt-4">{snippet.description}.</div>
            )}
          </div>
          <div className="mt-10 mb-32 w-full">
            <Mdx code={snippet.body.code} />
          </div>
        </article>
      </Layout>
    </>
  );
};

export default SnippetLayout;
