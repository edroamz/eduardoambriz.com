import Head from 'next/head';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { allPages, Page } from 'contentlayer/generated';

import { SiteLayout } from '@/components/SiteLayout';
import { Mdx } from '@/components/Mdx';
import { Text } from '@/components/Text';

export const getStaticProps: GetStaticProps<{ page?: Page }> = async () => {
  let page = allPages.find((page) => page.slugAsParams === 'uses');

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
      <SiteLayout>
        <section className="mx-auto mb-24 flex max-w-5xl flex-col items-center justify-center py-8 px-6 text-center md:py-10">
          <Text as="h1" fontWeight={600} size={32} className="sm:text-40">
            {page?.title}
          </Text>
          {page && (
            <article className="mx-auto mt-2 flex max-w-3xl flex-col items-center sm:px-6">
              <hr className="mb-10 w-full" />
              <div className="w-full text-left">
                <Mdx code={page.body.code} />
              </div>
            </article>
          )}
        </section>
      </SiteLayout>
    </>
  );
}
