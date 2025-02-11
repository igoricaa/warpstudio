import { Route, Social } from './utils/types';

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Photography',
    path: '/photography',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const socials: Social[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/warp.studio/',
  },
  {
    name: 'Vimeo',
    url: 'https://vimeo.com/warpstudio',
  },
];

export const email: string = 'lazar@warpstudio.rs';
