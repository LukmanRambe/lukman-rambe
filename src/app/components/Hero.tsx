import Link from 'next/link';

const Hero = () => {
  return (
    <section className="h-dvh min-h-dvh flex flex-col justify-center items-center">
      <article className="flex flex-col gap-8 w-full">
        <article className="flex flex-col gap-3">
          <span className="roboto-mono text-green text-base">
            Hi, my name is
          </span>
          <h1 className="text-lightest-slate font-bold text-4xl sm:text-5xl xl:text-7xl">
            Lukman Rambe.
          </h1>
          <h2 className="text-slate font-bold text-4xl sm:text-5xl xl:text-7xl">
            I build things for the web.
          </h2>
        </article>

        <p className="w-full max-w-[600px] text-slate text-base sm:text-lg">
          I&apos;m a frontend engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&apos;m focused on honing my skills while looking for new
          opportunity!.
        </p>

        <Link
          href="https://drive.google.com/file/d/1NIE31ER7li9UU9hMylfACrnBw1n7Hxys/view?usp=sharing"
          className="w-fit px-9 py-3.5 font-medium text-green border border-green rounded-md hover:bg-green hover:text-navy focus-visible:bg-green focus-visible:text-navy transition-colors ease-in-out duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my resume!
        </Link>
      </article>
    </section>
  );
};

export default Hero;
