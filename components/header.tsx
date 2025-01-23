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

      <div className='flex items-center gap-10 text-foreground text-3xl font-medium bg-clip-text relative before:content-[""] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%+1.25rem)] before:h-[2px] before:bg-[linear-gradient(93deg,#C84159_0%,_#6697D0_100%)] before:z-10'>
        <MenuItem />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
