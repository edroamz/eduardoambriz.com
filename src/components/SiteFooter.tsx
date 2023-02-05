import { Link, AnchorLink } from '@/components/Link';
import { Icons } from '@/components/Icons';

export function SiteFooter() {
  return (
    <footer className="border-t text-slate-600 dark:border-slate-800 dark:text-slate-400">
      <div className=" mx-auto mb-12 w-full max-w-7xl px-6 pt-10">
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 md+:flex-row md+:justify-between">
          <div className="flex flex-col items-center justify-center gap-x-2 gap-y-5 text-center md+:flex-row md+:items-baseline">
            <Link href="/" variant="non-style" className="shrink-0">
              <Icons.wordmark className="h-4 w-full text-slate-800 dark:text-slate-200" />
            </Link>
            <span className="inline-block text-center text-sm leading-none md+:text-left">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
          <div className="text-center text-sm leading-none md+:text-left">
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
