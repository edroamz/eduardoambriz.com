import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Link } from '@/components/Link';
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
  { title: 'Uses', href: '/uses' }
];

interface NavItemProps {
  items: NavItems[];
}

function MainNav({ items }: NavItemProps) {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-x-1">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              variant="secondary"
              className={cn(
                'px-4 py-2',
                router.pathname.startsWith(item.href) &&
                  'font-medium text-black dark:text-white'
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNav({ items }: NavItemProps) {
  const [open, setOpen] = useState<boolean>(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <span className="sr-only">Navigation</span>
        <Icons.menu strokeWidth={1.5} className="inline h-[22px] w-[22px]" />
      </DialogTrigger>
      {isMobile && (
        <DialogContent className="fixed inset-x-0 top-0 w-screen dark:border-b dark:border-b-gray-800 dark:bg-[#0e0e12] sm:max-w-none sm:rounded-none">
          <ul className="mt-6">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                variant="non-style"
                className="w-full"
              >
                <li
                  className={cn(
                    'flex h-12 w-full select-none items-center border-b border-slate-200 text-black transition-colors hover:bg-slate-50 dark:border-gray-800 dark:text-white dark:hover:bg-slate-800/20',
                    router.pathname.startsWith(item.href) && 'font-medium'
                  )}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="mt-8 mb-4 flex flex-col items-center justify-center gap-3 ">
            <ThemeSelect />
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export function SiteHeader() {
  return (
    <header
      className={cn(
        'fixed top-0 z-20 h-header w-full max-w-full border-b border-slate-200 bg-white transition-shadow duration-200 dark:border-slate-800 dark:bg-black/80'
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl grid-cols-2 items-center justify-between gap-x-7 px-6 sm:grid md:grid-cols-3">
        <div className="flex items-center">
          <Link href="/">
            <Icons.wordmark className="h-5 w-full text-black dark:text-slate-100" />
          </Link>
        </div>
        <div className="hidden text-center md:flex md:items-center md:justify-center">
          <MainNav items={navItems} />
        </div>
        <div className="flex items-center justify-end">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <MobileNav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
