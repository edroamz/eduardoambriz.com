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
      <DropdownMenuTrigger className="px-1 py-[2px]">
        <Icons.moon className="hidden h-[22px] w-[22px] text-slate-700 dark:inline dark:text-slate-400" />
        <Icons.sun className="inline h-[22px] w-[22px] text-slate-700 dark:hidden dark:text-slate-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="grid w-36 grid-cols-1 items-start justify-center rounded-lg bg-white py-1 text-sm shadow-sm  dark:bg-gray-900"
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
                    'mr-2 inline h-[19px] w-[19px] text-slate-600 dark:text-slate-400',
                    currentTheme === value && 'text-black dark:text-white'
                  )}
                ></Icon>
                <span
                  className={
                    currentTheme === value
                      ? 'font-semibold text-black dark:text-slate-200'
                      : 'text-slate-700 dark:text-slate-400'
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
        <SelectTrigger className=" dark:border-slate-500/80 dark:bg-gray-700">
          <SelectValue className="flex items-center justify-center gap-2 align-middle">
            <div className="flex items-center justify-center gap-2 align-middle">
              <Icons.moon className="hidden h-5 w-5 text-slate-500 dark:inline dark:text-slate-400" />
              <Icons.sun className="inline h-5 w-5 text-slate-500 dark:hidden dark:text-slate-400" />
              <span className="text-base font-medium capitalize leading-none tracking-tight text-black dark:text-slate-100">
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
              className="w-full border border-transparent px-2 py-[7px] leading-none data-[highlighted]:bg-gray-200 dark:text-slate-300 dark:data-[highlighted]:bg-gray-600/80"
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
