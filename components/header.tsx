import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import Logo from './ui/icons/logo';
import MenuItem from './menu-item';

const Header = () => {
  return (
    <header className='absolute top-0 w-screen px-side h-24 sm:h-32 lg:h-40 flex justify-between items-center '>
      <div className='relative'>
        <Link href='/'>
          <Logo className='h-auto w-24 sm:w-36 lg:w-44' />
        </Link>
      </div>

      <div className='flex items-center gap-4 sm:gap-6 text-foreground font-medium text-lg sm:text-2xl'>
        <MenuItem />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
