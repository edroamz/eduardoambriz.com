import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';
import { ThemeToggle } from '@/components/ThemeToggle';

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
  return <button>Menu</button>;
}

export function Header() {
  return (
    <header className="h-header border-b dark:border-gray-800">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 items-center justify-between gap-x-7 px-7 py-4 md:grid-cols-3">
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
