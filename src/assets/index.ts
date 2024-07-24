// page imports
import { page } from './types';
import arrowImg from './svgs/icons/navBarArrow.svg';
import { nanoid } from '@reduxjs/toolkit';
//

export const pages: page[] = [
  {
    id: nanoid(),
    img: arrowImg,
    title: 'home',
    to: '/',
  },
  {
    id: nanoid(),
    img: arrowImg,
    title: 'services',
    to: '/',
  },
  {
    id: nanoid(),
    img: arrowImg,
    title: 'portfolio',
    to: '/',
  },
  {
    id: nanoid(),
    img: arrowImg,
    title: 'about',
    to: '/',
  },
  {
    id: nanoid(),
    img: arrowImg,
    title: 'contact',
    to: '/',
  },
];
