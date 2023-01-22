import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { Avatar } from '@/components/Avatar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center px-7 text-center">
          <Avatar />
          <Heading
            level={1}
            className="mt-6 max-w-5xl text-5xl leading-snug md:text-6xl md:leading-tight"
          >
            FrontEnd Developer, JavaScript Enthusiast
          </Heading>
          <p className="mt-5 max-w-2xl text-xl leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aut laborum doloribus quos adipisci.
          </p>
        </section>
        <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center px-7 text-center">
          <Heading
            level={2}
            className="mt-4 max-w-5xl text-4xl leading-snug tracking-wide md:text-5xl md:leading-tight"
          >
            Take a look at my work
          </Heading>
        </section>
        <section className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center px-7 text-center">
          <Heading
            level={2}
            className="mt-4 max-w-5xl text-4xl leading-snug tracking-wide md:text-5xl md:leading-tight"
          >
            Blog
          </Heading>
        </section>
      </Layout>
    </>
  );
}
