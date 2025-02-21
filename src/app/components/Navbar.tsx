'use client';

import { menus } from '@/data/menus';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="px-12 py-5 fixed w-full max-[520px]:px-4 bg-navy text-green bg-opacity-80 z-[200]">
        <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <article className="flex justify-between items-center w-full">
            <Link href="#" className="font-bold text-3xl text-green">
              LR
            </Link>

            <FiMenu
              aria-label="hamburger-menu"
              className="text-green text-3xl lg:hidden"
              onClick={handleMenu}
            />
          </article>

          <ul
            className={`flex flex-col lg:flex-row items-start lg:items-center gap-5 font-semibold mt-5 ${
              menuOpen ? 'flex' : 'hidden lg:flex'
            }`}
          >
            {menus.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.url}
                  className="group flex items-end gap-1 text-sm"
                >
                  <span className="roboto-mono">{menu.number}</span>
                  <span className="text-lightest-slate group-hover:text-green group-focus-visible:text-green">
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}

            <Link
              href="https://drive.google.com/file/d/1NIE31ER7li9UU9hMylfACrnBw1n7Hxys/view?usp=sharing"
              className="w-fit px-5 py-1.5 text-green border border-green rounded-md hover:bg-green hover:text-navy focus-visible:bg-green focus-visible:text-navy transition-colors ease-in-out duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
