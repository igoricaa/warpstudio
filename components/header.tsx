import Image from 'next/image';

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
      <div></div>
    </header>
  );
};

export default Header;
