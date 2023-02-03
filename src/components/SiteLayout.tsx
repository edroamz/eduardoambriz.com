import { ReactNode } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <div className="my-0 mx-auto max-w-full overflow-hidden pt-header">
        <SkipNavLink className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap rounded-md border-0 p-0 data-[reach-skip-link]:focus:fixed data-[reach-skip-link]:focus:top-[10px] data-[reach-skip-link]:focus:left-7 data-[reach-skip-link]:focus:z-50 data-[reach-skip-link]:focus:m-0 data-[reach-skip-link]:focus:flex data-[reach-skip-link]:focus:h-10 data-[reach-skip-link]:focus:w-auto data-[reach-skip-link]:focus:items-center data-[reach-skip-link]:focus:overflow-visible data-[reach-skip-link]:focus:whitespace-normal data-[reach-skip-link]:focus:bg-white data-[reach-skip-link]:focus:px-4 data-[reach-skip-link]:focus:font-medium data-[reach-skip-link]:focus:text-blue-600 data-[reach-skip-link]:focus:underline data-[reach-skip-link]:focus:outline-none data-[reach-skip-link]:focus:ring-2 data-[reach-skip-link]:focus:ring-blue-600 dark:data-[reach-skip-link]:focus:bg-gray-900 dark:data-[reach-skip-link]:focus:text-blue-400 dark:data-[reach-skip-link]:focus:ring-blue-400">
          Skip to content
        </SkipNavLink>
        <SiteHeader />
        <SkipNavContent />
        <div className="flex min-h-main flex-col justify-between">
          <main>{children}</main>
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
