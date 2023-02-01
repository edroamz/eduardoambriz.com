import Head from 'next/head';
import { Layout } from '@/components/Layout';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { allPages, Page } from 'contentlayer/generated';
import { Mdx } from '@/components/Mdx';

export const getStaticProps: GetStaticProps<{ page?: Page }> = async () => {
  let page = allPages.find((page) => page.title === 'Uses');

  return {
    props: {
      page
    }
  };
};

export default function Uses({
  page
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz - Uses</title>
      </Head>
      <Layout>
        <section className="mb-24 flex max-w-5xl flex-col justify-center py-8 px-6 sm:mx-auto sm:items-center sm:text-center md:py-10">
          <h1 className="mt-2 max-w-5xl text-4xl leading-snug md:text-5xl md:leading-tight">
            Uses
          </h1>
          <p className="mt-3 max-w-3xl text-lg leading-8 sm:px-6">
            {page?.description}
          </p>
          {page && (
            <article className="mx-auto mt-16 flex max-w-3xl flex-col items-center sm:px-6">
              <div className="w-full text-left">
                <Mdx code={page.body.code} />
              </div>
            </article>
          )}
        </section>
      </Layout>
    </>
  );
}
