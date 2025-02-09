import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import Logo from './ui/icons/logo';

const Header = () => {
  return (
    <header className='absolute top-0 w-screen px-side h-24 sm:h-32 lg:h-40 flex justify-between items-center '>
      <div className='relative'>
        <Link href='/'>
          <Logo className='h-auto w-24 sm:w-36 lg:w-44' />
        </Link>
      </div>

      <div className='flex items-center gap-4 sm:gap-6 text-foreground font-medium text-lg sm:text-2xl'>
        <Link href='/' className='uppercase underline-link'>
          Home
        </Link>
        <Link href='/about-us' className='uppercase underline-link'>
          About Us
        </Link>
        <Link href='/services' className='uppercase underline-link'>
          Services
        </Link>
        <a
          href='https://warpstudio.passgallery.com/client'
          target='_blank'
          className='uppercase underline-link'
        >
          Gallery
        </a>
        <Link href='/contact' className='uppercase underline-link'>
          Contact
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
