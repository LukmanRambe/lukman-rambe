import Link from 'next/link';
import Social from './Social';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col w-full items-center">
      <Social />

      <p className="text-center text-sm sm:text-base text-slate py-8">
        Made with ❤️ by{' '}
        <Link
          href="https://github.com/LukmanRambe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green"
        >
          Lukman Rambe
        </Link>{' '}
        &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
