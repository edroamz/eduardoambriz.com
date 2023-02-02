import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/Icons';

let themeSettings = [
  {
    value: 'light',
    label: 'Light',
    icon: Icons.sun
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: Icons.moon
  },
  {
    value: 'system',
    label: 'System',
    icon: Icons.laptop
  }
];

export function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
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
      <DropdownMenuTrigger className="px-[2px]">
        <Icons.moon className="hidden h-[22px] w-[22px] text-slate-700 dark:inline dark:text-slate-400" />
        <Icons.sun className="inline h-[22px] w-[22px] text-slate-700 dark:hidden dark:text-slate-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="grid w-36 grid-cols-1 items-start justify-center overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-sm ring-1  ring-slate-900/10 dark:bg-gray-800 dark:text-slate-300 dark:ring-0"
        sideOffset={28}
        collisionPadding={{ right: 28 }}
        hideWhenDetached
      >
        <>
          {themeSettings.map(({ value, label, icon: Icon }) => (
            <DropdownMenuItem asChild key={value}>
              <button onClick={() => setTheme(value)}>
                <Icon
                  className={cn(
                    'mr-2 inline h-[19px] w-[19px] text-slate-500 dark:text-slate-400/80',
                    currentTheme === value &&
                      'text-primary dark:text-primary-dark'
                  )}
                ></Icon>
                <span
                  className={
                    currentTheme === value
                      ? 'text-primary dark:text-primary-dark'
                      : ''
                  }
                >
                  {label}
                </span>
              </button>
            </DropdownMenuItem>
          ))}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Select
        open={isSelectOpen}
        onOpenChange={setIsSelectOpen}
        value={theme}
        onValueChange={(selectedTheme: string) => {
          setTheme(selectedTheme);
        }}
      >
        <SelectTrigger className="w-[135px] bg-white dark:bg-gray-600">
          <SelectValue className="flex items-center justify-center gap-2 align-middle">
            <div className="flex items-center justify-center gap-2 align-middle">
              <Icons.moon className="hidden h-5 w-5 text-slate-500/80 dark:inline dark:text-slate-400" />
              <Icons.sun className="inline h-5 w-5 text-slate-500/80 dark:hidden dark:text-slate-400" />
              <span className="font-semibold capitalize leading-none tracking-normal text-gray-900 dark:text-gray-100">
                {theme}
              </span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent
          position="popper"
          hideWhenDetached
          style={{
            userSelect: 'none',
            width: 'var(--radix-select-trigger-width)',
            maxHeight: 'var(--radix-select-content-available-height)'
          }}
          className="z-50 w-full rounded-md border border-gray-300 bg-gray-100 py-1 shadow dark:border-gray-600 dark:bg-gray-900"
        >
          {themeSettings.map(({ value, label }) => (
            <SelectItem
              key={value}
              value={value}
              className="w-full border border-transparent px-2 py-[7px] font-semibold leading-none data-[highlighted]:bg-gray-200 dark:data-[highlighted]:bg-gray-600/80"
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
