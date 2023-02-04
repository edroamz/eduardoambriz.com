import { Wordmark } from '@/components/Wordmark';
import { Link, AnchorLink } from '@/components/Link';

export function SiteFooter() {
  return (
    <footer className=" border-t dark:border-slate-800">
      <div className=" mx-auto w-full max-w-7xl px-6 py-10">
        <div className="flex flex-col flex-wrap items-center justify-center gap-2 lg:flex-row lg:justify-between">
          <div className="shrink-0 text-center">
            <Link href="/" variant="non-style">
              <Wordmark className="mr-2 text-xl" />
            </Link>
            <span className="inline-block text-center text-sm lg:text-left">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
          <div></div>
          <div className="text-center text-sm leading-7 lg:text-left">
            Built by{' '}
            <AnchorLink href="https://twitter.com/edroamz">edroamz</AnchorLink>.
            The source code is available on{' '}
            <AnchorLink href="https://github.com/edroamz/portfolio">
              GitHub
            </AnchorLink>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}