import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const About = () => {
  const techs = [
    'NextJS',
    'ReactJS',
    'TypeScript',
    'TailwindCSS',
    'Zustand',
    'React Query',
  ];

  return (
    <section
      id="about"
      className="h-full xl:px-12 py-20 sm:py-24 lg:py-28 xl:py-40"
    >
      <article className="flex items-center gap-5 mb-8">
        <span className="roboto-mono text-green text-base sm:text-xl xl:text-2xl font-medium">
          01.
        </span>
        <h3 className="text-lightest-slate text-2xl xl:text-3xl font-semibold">
          About Me
        </h3>
      </article>

      <article className="text-slate text-base sm:text-lg">
        <p>
          Hello! My name is Lukman Rambe. I passionate for the latest solutions
          and interactive design. I&apos;m able to work in a team environment,
          making pixel-perfect sites that meet the design requirements and
          integrate with back-end APIs. I have experience in making projects
          that are needed by clients such as e-commerce websites, dashboard,
          etc.
        </p>

        <article className="mt-4">
          <p className="mb-3">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="w-fit grid grid-cols-2 gap-y-2 lg:gap-x-12 roboto-mono">
            {techs.map((tech) => (
              <li key={tech} className="flex items-center gap-3">
                <MdKeyboardDoubleArrowRight className="text-green text-sm" />
                {tech}
              </li>
            ))}
          </ul>
        </article>
      </article>
    </section>
  );
};

export default About;
