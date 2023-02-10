import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnchorLink, Link } from '@/components/Link';
import { ThemeToggle, ThemeSelect } from '@/components/ThemeToggle';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/Icons';
import { Text } from '@/components/Text';

type NavItems = {
  title: string;
  href: string;
  isExternal?: boolean;
};
const navItems: NavItems[] = [
  { title: 'Blog', href: '/blog' },
  { title: 'Uses', href: '/uses' },
  { title: 'GitHub', href: 'https://github.com/edroamz', isExternal: true }
];

interface NavItemProps {
  items: NavItems[];
}

function MainNav({ items }: NavItemProps) {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-x-10">
        {items.map((item) => (
          <li key={item.title}>
            {item.isExternal ? (
              <AnchorLink href={item.href}>
                <Text
                  size={14}
                  color="accents-3"
                  lineHeight={20}
                  wrap={false}
                  className="tracking-normal"
                >
                  {item.title}
                  <Icons.arrowUpRight
                    strokeWidth={2}
                    className="ml-1 inline h-4 w-4 align-text-bottom transition-colors"
                  />
                </Text>
              </AnchorLink>
            ) : (
              <Link href={item.href}>
                <Text
                  size={14}
                  color={
                    router.pathname.startsWith(item.href)
                      ? 'foreground'
                      : 'accents-3'
                  }
                  fontWeight={
                    router.pathname.startsWith(item.href) ? 500 : undefined
                  }
                  lineHeight={20}
                  wrap={false}
                  className="tracking-normal"
                >
                  {item.title}
                </Text>
              </Link>
            )}
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
            {items.map((item) => {
              const DynamicLink = item.isExternal ? AnchorLink : Link;
              const classNames =
                'flex h-12 w-full select-none items-center justify-between border-b border-slate-200  hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-slate-800/20';

              return (
                <DynamicLink
                  key={item.title}
                  href={item.href}
                  className="w-full"
                >
                  {item.isExternal ? (
                    <li className={classNames}>
                      <Text color="foreground">{item.title}</Text>
                      <Icons.arrowUpRight
                        strokeWidth={1.5}
                        className="h-5 w-5 text-slate-600 transition-colors group-hover:text-black dark:text-slate-400 dark:group-hover:text-slate-100"
                      />
                    </li>
                  ) : (
                    <li className={classNames}>
                      <Text
                        color="foreground"
                        fontWeight={
                          router.pathname.startsWith(item.href)
                            ? 500
                            : undefined
                        }
                      >
                        {item.title}
                      </Text>
                    </li>
                  )}
                </DynamicLink>
              );
            })}
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
        'fixed top-0 z-20 h-header w-full max-w-full bg-white/[0.97] shadow-[inset_0_-1px_0_0_rgba(0,0,0,.1)] transition-shadow duration-200 dark:bg-black/80 dark:shadow-[inset_0_-1px_0_0_rgba(235,235,255,.2)]'
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl grid-cols-2 items-center justify-between gap-x-7 px-6 sm:grid md:grid-cols-3">
        <div className="flex items-center">
          <Link href="/">
            <Icons.wordmark className="h-[18px] w-full" />
          </Link>
        </div>
        <div className="hidden items-center justify-center md:flex">
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
