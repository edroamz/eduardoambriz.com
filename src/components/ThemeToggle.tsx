import { SVGProps, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';

let settings = [
  {
    value: 'light',
    label: 'Light',
    icon: SunIcon
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: MoonIcon
  },
  {
    value: 'system',
    label: 'System',
    icon: PcIcon
  }
];

interface IconProps extends SVGProps<SVGSVGElement> {
  selected?: boolean;
}

function SunIcon({ selected, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className={
          selected
            ? 'fill-sky-400/20 stroke-sky-500'
            : 'stroke-slate-400 dark:stroke-slate-500'
        }
      />
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className={
          selected ? 'stroke-sky-500' : 'stroke-slate-400 dark:stroke-slate-500'
        }
      />
    </svg>
  );
}

function MoonIcon({ selected, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className={selected ? 'fill-sky-400/20' : 'fill-transparent'}
      />
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className={
          selected ? 'fill-sky-500' : 'fill-slate-400 dark:fill-slate-500'
        }
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className={
          selected ? 'fill-sky-500' : 'fill-slate-400 dark:fill-slate-500'
        }
      />
    </svg>
  );
}

function PcIcon({ selected, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        strokeWidth="2"
        strokeLinejoin="round"
        className={
          selected
            ? 'fill-sky-400/20 stroke-sky-500'
            : 'stroke-slate-400 dark:stroke-slate-500'
        }
      />
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          selected ? 'stroke-sky-500' : 'stroke-slate-400 dark:stroke-slate-500'
        }
      />
    </svg>
  );
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu dir="ltr" modal={false}>
      <DropdownMenuTrigger
        id="btn-theme"
        className="group invisible rounded-md px-2 py-[2px] text-gray-400 outline-none ring-0 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-900 group-hover:transition-colors dark:text-gray-300 dark:hover:text-gray-100 dark:focus-visible:ring-gray-50 md:visible md:pr-0"
      >
        <MoonIcon selected className="hidden h-6 w-6 dark:block"></MoonIcon>
        <SunIcon selected className="h-6 w-6 dark:hidden"></SunIcon>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="invisible z-30 grid w-40 grid-cols-1 items-start justify-center rounded-xl border border-gray-300 bg-white py-1 shadow dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none md:visible"
          sideOffset={36}
          collisionPadding={{ right: 36 }}
          hideWhenDetached
        >
          <>
            {settings.map(({ value, label, icon: Icon }) => (
              <DropdownMenuItem asChild key={value}>
                <button
                  onClick={() => setTheme(value)}
                  className="flex w-full flex-row items-center justify-start px-3 py-[6px] text-left align-middle text-[17px] font-medium leading-none tracking-tight outline-none hover:bg-gray-50 focus-visible:bg-gray-50 dark:hover:bg-gray-800 dark:focus-visible:bg-gray-800"
                >
                  <Icon
                    selected={currentTheme === value}
                    className="mr-2 h-6 w-6"
                  ></Icon>
                  <span
                    className={currentTheme === value ? 'font-semibold ' : ''}
                  >
                    {label}
                  </span>
                </button>
              </DropdownMenuItem>
            ))}
          </>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
