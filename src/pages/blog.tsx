import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center px-7 text-center">
          <Heading
            level={1}
            className="mt-6 max-w-5xl text-5xl leading-snug md:text-6xl md:leading-tight"
          >
            Blog
          </Heading>
          <p className="mt-5 max-w-2xl text-xl leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aut laborum doloribus quos adipisci.
          </p>
        </section>
      </Layout>
    </>
  );
}
