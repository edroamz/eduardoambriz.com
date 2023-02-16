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
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { Text } from '@/components/Text';

import { cn } from '@/lib/utils';

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
    icon: Icons.system
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
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icons.moon className="hidden h-5 w-5 text-slate-700 dark:inline dark:text-slate-400" />
          <Icons.sun className="inline h-[22px] w-[22px] text-slate-700 dark:hidden dark:text-slate-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="grid w-36 grid-cols-1"
        sideOffset={18}
        collisionPadding={{ right: 28 }}
        hideWhenDetached
      >
        <>
          {themeSettings.map(({ value, label, icon: Icon }) => (
            <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
              <Icon
                className={cn(
                  'mr-2 inline h-[18px] w-[18px] text-slate-600 dark:text-slate-400',
                  currentTheme === value && 'text-black dark:text-white'
                )}
              ></Icon>
              <Text
                as="span"
                size={14}
                className={
                  currentTheme === value
                    ? 'font-semibold text-black dark:text-slate-200'
                    : 'text-slate-700 dark:text-slate-400'
                }
              >
                {label}
              </Text>
            </DropdownMenuItem>
          ))}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeSelect() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Select
        open={open}
        onOpenChange={setOpen}
        value={theme}
        onValueChange={(selectedTheme: string) => {
          setTheme(selectedTheme);
        }}
      >
        <SelectTrigger className="w-36 outline-none hover:border-black focus:border-slate-500 dark:hover:border-white dark:focus:border-slate-400">
          <Icons.moon className="hidden h-[18px] w-[18px] text-slate-500 dark:inline dark:text-slate-400" />
          <Icons.sun className="inline h-[18px] w-[18px] text-slate-500 dark:hidden dark:text-slate-400" />
          <Text
            as="div"
            fontWeight={500}
            transform="capitalize"
            className="text-center"
          >
            <SelectValue>{theme}</SelectValue>
          </Text>
        </SelectTrigger>
        <SelectContent
          position="popper"
          className="w-[var(--radix-select-trigger-width)]"
          hideWhenDetached
        >
          {themeSettings.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
