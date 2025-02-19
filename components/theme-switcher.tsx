'use client';

import { useTheme } from 'next-themes';

import Moon from './ui/icons/moon';
import Sun from './ui/icons/sun';
import { useState } from 'react';
import { useEffect } from 'react';

export function ThemeSwitcher({ size }: { size: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      name='Theme switcher'
      className={`relative flex items-center justify-center ${size}`}
    >
      <Sun
        className={`transition-all ${theme === 'dark' ? ' scale-0' : 'scale-100'} ${size}`}
      />
      <Moon
        className={`absolute transition-all ${theme === 'dark' ? 'scale-100' : ' scale-0'} ${size}`}
      />
    </button>
  );
}
