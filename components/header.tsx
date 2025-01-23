import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';
import Logo from './ui/icons/logo';
import MenuItem from './menu-item';

const Header = () => {
  return (
    <header className='absolute top-0 w-screen px-side h-40 flex justify-between items-center '>
      <div className='relative'>
        <Link href='/'>
          <Logo className='w-52 h-auto' />
        </Link>
      </div>

      <div className='flex items-center gap-10 text-foreground text-3xl font-medium'>
        <MenuItem />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
