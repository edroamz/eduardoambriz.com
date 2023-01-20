import { Wordmark } from '@/components/Wordmark';
import { NavItems } from '@/components/Header';

export function Footer() {
  return (
    <footer className="mt-36 border-t">
      <div className="mx-auto max-w-5xl px-7">
        <div className="flex flex-col items-baseline gap-y-16 py-12 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:col-start-1">
            <Wordmark />
            <div className="mt-10">
              <ul className="flex flex-row items-center gap-x-5">
                <li>Twitter</li>
                <li>Github</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 lg:col-start-6">
            <div className="font-medium">Resources</div>
            <nav>
              <ul className="mt-7 flex flex-col space-y-2">
                <NavItems />
              </ul>
            </nav>
          </div>
          <div className="leading-loose lg:col-span-4 lg:col-start-9 ">
            This Web site is built with{' '}
            <a href="https://nextjs.org/">Next.js</a>,{' '}
            <a href="https://www.typescriptlang.org/">Typescript</a>,{' '}
            <a href="https://tailwindcss.com/">Tailwind CSS</a>,{' '}
            <a href="https://www.radix-ui.com/">Radix UI</a>, and hosted on{' '}
            <a href="https://vercel.com/">Vercel</a>.
          </div>
        </div>
        <div className="border-t"></div>
        <div className="mt-6 pb-8">
          <p className="text-sm">
            © {new Date().getFullYear()} Eduardo Ambriz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
