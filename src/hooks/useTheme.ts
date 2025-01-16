'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, type LucideIcon } from 'lucide-react';
import { useTheme as useNextTheme } from 'next-themes';
import type { UseThemeProps } from 'next-themes';

interface UseTheme extends UseThemeProps {
  toggleTheme: () => void;
  userTheme: UserTheme;
  anotherTheme: string | undefined;
  ThemeIcon: LucideIcon;
}

type UserTheme = 'light' | 'dark' | 'system';

export const useTheme = (): UseTheme => {
  const { resolvedTheme, ...rest } = useNextTheme();

  const [userTheme, setUserTheme] = useState<UserTheme>('system');
  const [anotherTheme, setAnotherTheme] = useState<string>('');
  const [ThemeIcon, setThemeIcon] = useState<LucideIcon>(MoonIcon);

  useEffect(() => {
    setUserTheme(resolvedTheme as UserTheme);

    const isDark = resolvedTheme === 'dark';
    setAnotherTheme(isDark ? 'light' : 'dark');
    setThemeIcon(isDark ? MoonIcon : SunIcon);
  }, [resolvedTheme]);

  const toggleTheme = () => {
    rest.setTheme(anotherTheme);
  };

  return {
    toggleTheme,
    ThemeIcon,
    userTheme,
    anotherTheme,
    ...rest,
  };
};
