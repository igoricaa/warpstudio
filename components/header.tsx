import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

const Header = () => {
  return (
    <header className='absolute top-0 w-screen px-side h-40 flex justify-between items-center '>
      <div className='relative w-52 aspect-[51/14]'>
        <Image
          // src='/warp-logo.png'
          src='/logo-black.svg'
          alt='Warp Logo'
          fill
          // className='object-cover'
        />
      </div>
      {/* bg-clip-text text-transparent */}
      <div className='flex items-center gap-10 text-foreground text-3xl font-medium bg-[linear-gradient(93deg,#C84159_0%,_#6697D0_100%)] '>
        <Link href='/'>Home</Link>
        <Link href='/contact'>Contact</Link>
        <div className='flex w-fit'>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
