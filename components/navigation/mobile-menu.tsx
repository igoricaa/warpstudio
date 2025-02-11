'use client';

import Link from 'next/link';
import { useState } from 'react';
import Burger from './burger';
import { email, routes, socials } from '@/data';
import { Route, Social } from '@/utils/types';
import { ThemeSwitcher } from '../theme-switcher';

const MobileMenu = ({ className }: { className: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    toggleScroll();
  };

  const toggleScroll = () => {
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    document.body.toggleAttribute('data-lenis-prevent', !menuOpen);
  };

  return (
    <div className={`${className}`}>
      <div className='flex items-center gap-6 sm:gap-8 z-50 relative '>
        <ThemeSwitcher />
        <Burger handleClick={toggleMenu} isOpen={menuOpen} />
      </div>

      <div
        className={`fixed inset-0 h-svh w-screen z-40 px-side pt-28 sm:pt-48 pb-8 sm:pb-16 bg-background flex flex-col justify-between gap-8 transition-all duration-300 ${menuOpen ? 'visible translate-x-0' : 'invisible translate-x-full'}`}
      >
        <ul className='flex flex-col gap-4 sm:gap-6'>
          {routes.map((route: Route) => (
            <li key={route.name}>
              <Link
                href={route.path}
                className='uppercase text-3xl sm:text-4xl'
                onClick={toggleMenu}
                target={route.external ? '_blank' : '_self'}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-5 sm:gap-8'>
          <div>
            <p className='text-3xl sm:text-4xl mb-4 sm:mb-6 underline-partial'>
              Get in touch
            </p>
            <a
              href={`mailto:${email}`}
              className='block text-xl sm:text-2xl mt-2 sm:mt-4'
            >
              {email}
            </a>
          </div>
          <div className='flex flex-col'>
            <p className='text-3xl sm:text-4xl mb-2 sm:mb-3 underline-partial'>
              Follow us
            </p>
            {socials.map((social: Social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                className='text-xl sm:text-2xl mt-2 sm:mt-3'
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
