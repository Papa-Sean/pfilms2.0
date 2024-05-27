import { nanoid } from 'nanoid';
import {
  FaSquareInstagram,
  FaTiktok,
  FaXTwitter,
  FaPatreon,
  FaSquareYoutube,
} from 'react-icons/fa6';

export const socialLinks = [
  {
    id: nanoid(),
    href: 'https://www.instagram.com/paradizofilms/',
    target: '_blank',
    rel: 'noreferrer',
    icon: (
      <FaSquareInstagram className="btn btn-ghost btn-circle btn-xs ml-4" />
    ),
  },
  {
    id: nanoid(),
    href: 'http://tiktok.com/paradizofilms',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaTiktok className="btn btn-ghost btn-circle btn-xs ml-4" />,
  },
  {
    id: nanoid(),
    href: 'http://twitter.com/paradizofilms',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaXTwitter className="btn btn-ghost btn-circle btn-xs ml-4" />,
  },
  {
    id: nanoid(),
    href: 'http://patreon.com/ParadizoFilms',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaPatreon className="btn btn-ghost btn-circle btn-xs ml-4" />,
  },
  {
    id: nanoid(),
    href: 'https://www.youtube.com/@paradizofilms',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaSquareYoutube className="btn btn-ghost btn-circle btn-xs ml-4" />,
  },
];
