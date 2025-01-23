import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import Logo from './ui/icons/logo';
import MenuItem from './menu-item';

const Header = () => {
  return (
    <header className='absolute top-0 w-screen px-side h-24 sm:h-32 lg:h-40 flex justify-between items-center '>
      <div className='relative'>
        <Link href='/'>
          <Logo className='h-auto w-24 sm:w-36 lg:w-52' />
        </Link>
      </div>

      <div className='flex items-center gap-4 sm:gap-8 lg:gap-10 text-foreground font-medium text-xl sm:text-2xl lg:text-3xl'>
        <MenuItem />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
