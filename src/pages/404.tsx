import type { NextPage } from 'next';
import Head from 'next/head';

import { SiteLayout } from '@/components/SiteLayout';
import { Text } from '@/components/Text';
import { Icons } from '@/components/Icons';

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found – Eduardo R. Ambriz</title>
      </Head>
      <SiteLayout>
        <section className="flex flex-1 flex-col items-center justify-center px-6 py-24">
          <div className="m-[0_auto] max-w-[792px]">
            <Icons.notFound className="mx-auto mb-8 h-40 w-40 " />
            <Text
              as="h1"
              size={48}
              align="center"
              className="font-[650]"
              balanced
            >
              Not found
            </Text>
            <Text size={18} align="center" className="mt-6 max-w-2xl">
              The page you're trying to access does not exist.
            </Text>
          </div>
        </section>
      </SiteLayout>
    </>
  );
};

export default NotFound;
