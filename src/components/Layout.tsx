import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { Wordmark } from '@/components/Wordmark';
import { Link } from '@/components/Link';
import { AnchorLink } from '@/components/Link';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="my-0 mx-auto max-w-full overflow-hidden pt-header">
        <SkipNavLink className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap rounded-md border-0 p-0 data-[reach-skip-link]:focus:fixed data-[reach-skip-link]:focus:top-[10px] data-[reach-skip-link]:focus:left-7 data-[reach-skip-link]:focus:z-50 data-[reach-skip-link]:focus:m-0 data-[reach-skip-link]:focus:flex data-[reach-skip-link]:focus:h-10 data-[reach-skip-link]:focus:w-auto data-[reach-skip-link]:focus:items-center data-[reach-skip-link]:focus:overflow-visible data-[reach-skip-link]:focus:whitespace-normal data-[reach-skip-link]:focus:bg-white data-[reach-skip-link]:focus:px-4 data-[reach-skip-link]:focus:font-medium data-[reach-skip-link]:focus:text-blue-600 data-[reach-skip-link]:focus:underline data-[reach-skip-link]:focus:outline-none data-[reach-skip-link]:focus:ring-2 data-[reach-skip-link]:focus:ring-blue-600 dark:data-[reach-skip-link]:focus:bg-gray-900 dark:data-[reach-skip-link]:focus:text-blue-400 dark:data-[reach-skip-link]:focus:ring-blue-400">
          Skip to content
        </SkipNavLink>
        <Header />
        <SkipNavContent />
        <div className="flex min-h-main flex-col justify-between">
          <main>{children}</main>
          <footer className="mx-auto w-full max-w-8xl px-6 ">
            <div className="border-t py-10 dark:border-gray-700/60 ">
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
                  <AnchorLink href="https://twitter.com/edroamz">
                    edroamz
                  </AnchorLink>
                  . The source code is available on{' '}
                  <AnchorLink href="https://github.com/edroamz/portfolio">
                    GitHub
                  </AnchorLink>
                  .
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
