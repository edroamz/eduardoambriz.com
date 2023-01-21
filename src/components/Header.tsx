import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose
} from '@radix-ui/react-dialog';
import { useState } from 'react';
import useIsMobile from '@/hooks/use-is-mobile';
import { inter } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export function NavItems() {
  return (
    <>
      <Link href="/projects">
        <li>Projects</li>
      </Link>
      <Link href="/blog">
        <li>Blog</li>
      </Link>
      <Link href="/snippets">
        <li>Snippets</li>
      </Link>
      <Link href="/uses">
        <li>Uses</li>
      </Link>
    </>
  );
}

function NavPopover() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="group rounded-md px-2 py-[2px]  pr-0 text-gray-600 hover:text-gray-900 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:text-gray-300 dark:hover:text-gray-50 dark:focus-visible:ring-gray-50 md:hidden">
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </DialogTrigger>
      {isMobile && (
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-30 h-full w-screen bg-black/20 backdrop-blur-sm dark:bg-gray-900/90 " />
          <DialogContent
            className={cn(
              inter.className,
              'fixed top-4 right-4 z-40 flex w-full max-w-xs flex-col gap-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'
            )}
          >
            <DialogClose className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center">
              <span className="sr-only">Close navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="h-2.5 w-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </DialogClose>
            <ul className="mt-2 flex flex-col items-start justify-center gap-y-5 text-left text-lg">
              <NavItems />
            </ul>
            <div className="flex flex-row items-center justify-between border-t pt-5 dark:border-gray-800">
              <span className="text-lg">Switch theme</span>
              <div>theme switcher</div>
            </div>
          </DialogContent>
        </DialogPortal>
      )}
    </Dialog>
  );
}

export function Header() {
  return (
    <header className="h-header border-b dark:border-gray-800">
      <div className="mx-auto grid max-w-8xl grid-cols-2 items-center justify-between gap-x-7 px-7 py-4 md:grid-cols-3">
        <div>
          <Link href="/">
            <Wordmark />
          </Link>
        </div>
        <div className="hidden text-center md:block">
          <nav>
            <ul className="flex flex-row items-center justify-center gap-x-5">
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
