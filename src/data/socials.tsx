import { ReactElement } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

type SocialsType = {
  name: string;
  url: string;
  icon: ReactElement;
};

const className = 'text-xl';

export const socials: SocialsType[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/LukmanRambe',
    icon: <FiGithub className={className} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lukmanrambe/',
    icon: <FiLinkedin className={className} />,
  },
];
