'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuItem = () => {
  const pathname = usePathname();

  return (
    <Link
      href={pathname === '/contact' ? '/' : '/contact'}
      className='uppercase underline-link'
    >
      {pathname === '/contact' ? 'Home' : 'Contact'}
    </Link>
  );
};

export default MenuItem;
