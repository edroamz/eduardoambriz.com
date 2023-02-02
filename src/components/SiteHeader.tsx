import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Link } from '@/components/Link';
import { Wordmark } from '@/components/Wordmark';
import { ThemeToggle, ThemeSelect } from '@/components/ThemeToggle';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/Icons';

export function NavItems() {
  const router = useRouter();

  return (
    <>
      <li>
        <Link
          href="/blog"
          variant="secondary"
          className={
            router.pathname.startsWith('/blog')
              ? 'font-medium text-black dark:text-slate-200'
              : ''
          }
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/snippets"
          variant="secondary"
          className={
            router.pathname.startsWith('/snippets')
              ? 'font-medium text-black dark:text-slate-200'
              : ''
          }
        >
          Snippets
        </Link>
      </li>
      <li>
        <Link
          href="/uses"
          variant="secondary"
          className={
            router.pathname.startsWith('/uses')
              ? 'font-medium text-black dark:text-slate-200'
              : ''
          }
        >
          Uses
        </Link>
      </li>
    </>
  );
}

function NavPopover() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const MOBILE_BREAKPOINT = 768;
  const getIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? getIsMobile() : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="group inline rounded-md px-2 py-[2px] pr-0 text-gray-600 hover:text-gray-900 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:text-gray-300 dark:hover:text-gray-50 dark:focus-visible:ring-gray-50 md:hidden">
        <span className="sr-only">Navigation</span>
        <Icons.ellipsis className="inline h-5 w-5" />
      </DialogTrigger>
      {isMobile && (
        <DialogContent className="fixed top-4 right-4 flex w-full max-w-xs flex-col gap-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 sm:max-w-xs">
          <ul className="mt-2 flex flex-col items-start justify-center gap-y-5 text-left font-semibold">
            <NavItems />
          </ul>
          <div className="flex flex-row items-center justify-between gap-x-3 border-t pt-5 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <span>Switch theme</span>
            <ThemeSelect />
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export function SiteHeader() {
  const [isPageScrolled, setIsPageScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handlePageScroll = () => {
      if (window.scrollY >= 32) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };

    window.addEventListener('scroll', handlePageScroll);

    return () => window.removeEventListener('scroll', handlePageScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-20 h-header w-full max-w-full border-b border-gray-200 bg-white transition-shadow duration-200 dark:border-gray-700/80 dark:bg-black',
        isPageScrolled && 'shadow-[0_0_15px_0_rgb(0,0,0,0.1)]'
      )}
    >
      <div className="mx-auto flex max-w-8xl grid-cols-2 items-center justify-between gap-x-7 px-6 py-4 sm:grid md:grid-cols-3">
        <div>
          <Link href="/" variant="non-style">
            <Wordmark />
          </Link>
        </div>
        <div className="hidden text-center md:block">
          <nav>
            <ul className="flex flex-row items-center justify-center gap-x-9">
              <NavItems />
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-end">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <NavPopover />
          </div>
        </div>
      </div>
    </header>
  );
}
