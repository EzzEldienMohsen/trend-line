// Types
import { footerColumnLinks, page } from './types';
// Header Imports
import arrowImg from './svgs/icons/navBarArrow.svg';
import { nanoid } from '@reduxjs/toolkit';
//Footer  Imports
import watch from './svgs/pages/footer/watch.svg';
import service from './svgs/pages/footer/service.svg';
import mail from './svgs/pages/footer/mail.svg';
import phone from './svgs/pages/footer/phone.svg';

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

export const firstFooterLinks: footerColumnLinks[] = [
  {
    id: nanoid(),
    img: watch,
    text: 'Monday-Friday 9 AM-5 PM PST',
    title: 'Office Hours',
  },
  {
    id: nanoid(),
    img: service,
    text: '24/7 365',
    title: 'Support Hours',
  },
];
export const secondFooterLinks: footerColumnLinks[] = [
  {
    id: nanoid(),
    img: mail,
    title: 'info@trendline.com',
  },
  {
    id: nanoid(),
    img: phone,
    title: '858-227-487800',
  },
];

export const thirdFooter: page[] = [
  {
    id: nanoid(),
    title: 'Social media marketing',
    to: '/',
  },
  {
    id: nanoid(),
    title: 'Custom Software',
    to: '/',
  },
  {
    id: nanoid(),
    title: 'UI/UX design',
    to: '/',
  },
  {
    id: nanoid(),
    title: 'Graphic design',
    to: '/',
  },
  {
    id: nanoid(),
    title: 'Web, E-commerce & Mobile Apps',
    to: '/',
  },
  {
    id: nanoid(),
    title: 'Creative',
    to: '/',
  },
];
