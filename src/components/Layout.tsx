import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="my-0 mx-auto max-w-full overflow-hidden pt-header">
        <SkipNavLink className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap rounded-md border-0 p-0 focus-visible:fixed focus-visible:top-[10px] focus-visible:left-7 focus-visible:z-50 focus-visible:m-0 focus-visible:flex focus-visible:h-10 focus-visible:w-auto focus-visible:items-center focus-visible:overflow-visible focus-visible:whitespace-normal focus-visible:bg-white focus-visible:px-4 focus-visible:font-medium focus-visible:text-blue-600 focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:bg-gray-900 dark:focus-visible:text-blue-400 dark:focus-visible:ring-blue-400">
          Skip to content
        </SkipNavLink>
        <Header />
        <SkipNavContent />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
