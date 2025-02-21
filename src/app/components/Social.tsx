import { socials } from '@/data/socials';
import Link from 'next/link';

const Social = () => {
  return (
    <aside className="relative sm:fixed sm:bottom-0 sm:left-12">
      <article className="flex flex-row sm:flex-col gap-5 after:hidden after:sm:block after:contents-[''] after:w-px after:h-[90px] after:bg-light-slate items-center">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            aria-label={social.name}
            className="text-lightest-slate hover:text-green focus-visible:text-green transition-colors duration-200 ease-in-out"
          >
            {social.icon}
          </Link>
        ))}
      </article>
    </aside>
  );
};

export default Social;
