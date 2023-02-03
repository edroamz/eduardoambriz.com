import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Link } from '@/components/Link';
import { Wordmark } from '@/components/Wordmark';
import { ThemeToggle, ThemeSelect } from '@/components/ThemeToggle';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/Icons';

type NavItems = {
  title: string;
  href: string;
  isExternal?: boolean;
};
const navItems: NavItems[] = [
  { title: 'Blog', href: '/blog' },
  { title: 'Snippets', href: '/snippets' },
  { title: 'Uses', href: '/uses' }
];

interface NavItemProps {
  items: NavItems[];
}

function MainNav({ items }: NavItemProps) {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-x-7">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              variant="secondary"
              className={
                router.pathname.startsWith(item.href)
                  ? 'font-medium text-black dark:text-white'
                  : ''
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavPopover({ items }: NavItemProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const MOBILE_BREAKPOINT = 768;
  const getIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? getIsMobile() : false
  );
  const router = useRouter();

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
      <DialogTrigger className="group inline-flex items-center rounded-md px-2 py-1 pr-0 text-slate-600 hover:text-slate-900 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:text-slate-300 dark:hover:text-slate-50 dark:focus-visible:ring-slate-50 md:hidden">
        <span className="sr-only">Navigation</span>
        <span className="mr-2 text-sm font-medium tracking-wide">Menu</span>
        <Icons.ellipsis className="inline h-5 w-5" />
      </DialogTrigger>
      {isMobile && (
        <DialogContent className="fixed top-4 right-4 flex w-full max-w-xs flex-col gap-6 rounded-lg border border-transparent bg-white p-6 shadow-md dark:border-slate-800 dark:bg-gray-800 sm:max-w-xs">
          <ul className=" mt-4 flex flex-col items-start justify-center gap-y-2 text-left font-semibold">
            {items.map((item) => (
              <li className="w-full" key={item.title}>
                <Link
                  href={item.href}
                  variant="non-style"
                  className={cn(
                    'block rounded-md py-2 pl-1 font-medium hover:underline dark:text-slate-300',
                    router.pathname.startsWith(item.href) &&
                      'font-semibold text-black dark:text-slate-100'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pl-1">
            <hr className="dark:border-slate-700" />
            <div className="mt-4 flex items-center justify-between gap-x-7">
              <p className="shrink-0">Switch theme</p>
              <ThemeSelect />
            </div>
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
        'fixed top-0 z-20 h-header w-full max-w-full border-b border-slate-200 bg-white transition-shadow duration-200 dark:border-slate-800 dark:bg-black',
        isPageScrolled && 'shadow-[0_0_15px_0_rgb(0,0,0,0.1)]'
      )}
    >
      <div className="mx-auto flex max-w-7xl grid-cols-2 items-center justify-between gap-x-7 px-6 py-4 sm:grid md:grid-cols-3">
        <div>
          <Link href="/" variant="non-style">
            <Wordmark />
          </Link>
        </div>
        <div className="hidden text-center md:block">
          <MainNav items={navItems} />
        </div>
        <div className="flex items-center justify-end">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <NavPopover items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
