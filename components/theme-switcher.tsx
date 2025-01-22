'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import Moon from './ui/icons/moon';
import Sun from './ui/icons/sun';
import { useState } from 'react';
import { useEffect } from 'react';

export function ThemeSwitcher() {
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
      className='relative w-6 h-6 flex items-center justify-center'
    >
      {/* <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' /> */}
      <Sun
        className={`h-6 w-6 transition-all ${theme === 'dark' ? ' scale-0' : 'scale-100'}`}
      />
      <Moon
        className={`absolute h-6 w-6 transition-all ${theme === 'dark' ? 'scale-100' : ' scale-0'}`}
      />
    </button>
  );
}
