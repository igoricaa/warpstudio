'use client';

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
      name='Theme switcher'
      className='relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center'
    >
      <Sun
        className={`h-6 w-6 sm:h-8 sm:w-8 transition-all ${theme === 'dark' ? ' scale-0' : 'scale-100'}`}
      />
      <Moon
        className={`absolute h-6 w-6 sm:h-8 sm:w-8 transition-all ${theme === 'dark' ? 'scale-100' : ' scale-0'}`}
      />
    </button>
  );
}
