import { Wordmark } from '@/components/Wordmark';
import { Link, AnchorLink } from '@/components/Link';

export function SiteFooter() {
  return (
    <footer className="border-t text-slate-600 dark:border-slate-800 dark:text-slate-400">
      <div className=" mx-auto mb-12 w-full max-w-7xl px-6 pt-10">
        <div className="flex flex-col flex-wrap items-center justify-center gap-3 md+:flex-row md+:justify-between">
          <div className="flex flex-col items-center justify-center gap-3 text-center md+:flex-row">
            <Link href="/" variant="non-style" className="shrink-0">
              <Wordmark className="text-xl" />
            </Link>
            <span className="ml-2 inline-block text-center text-sm md+:ml-0 md+:text-left">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
          <div className="text-center text-sm leading-7 md+:text-left">
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
