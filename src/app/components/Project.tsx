import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import Pill from './Pill';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Fragment, useId } from 'react';

const Project = () => {
  const id = useId();

  return (
    <section id="project" className="h-full py-20 lg:py-28 xl:py-32">
      <article className="flex items-center gap-5 mb-8">
        <span className="roboto-mono text-green text-base sm:text-xl xl:text-2xl font-medium">
          03.
        </span>
        <h3 className="text-lightest-slate text-lg sm:text-xl xl:text-3xl font-semibold">
          Some Things I&apos;ve Built
        </h3>
      </article>

      <article className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {projects?.map((project) => (
          <article
            key={project.name}
            className="relative w-full rounded-md group p-4 bg-light-navy shadow-[0_10px_30px_-15px] shadow-navy-shadow"
          >
            <article className="flex flex-col justify-between h-full">
              <header className="flex flex-col gap-3">
                <article className="w-full h-[225px] group-hover:cursor-pointer overflow-hidden rounded-[15px] group-hover:duration-[.5s] group-hover:ease-in-out group-hover:scale-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full group-hover:cursor-pointer scale-110 group-hover:duration-[.5s] group-hover:ease-in-out group-hover:scale-100"
                    width={200}
                    height={150}
                  />
                </article>

                <article className="w-full flex items-center justify-between">
                  <Link
                    className="text-lg font-semibold text-lightest-slate group-hover:text-green focus-visible:text-green group-hover:duration-200 group-hover:ease-in-out after:absolute after:left-0 after:top-0 after:w-full after:h-full z-[1]"
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>

                  <article className="flex items-center gap-3 text-lg z-10">
                    <Link
                      key={project.githubUrl}
                      href={project.githubUrl}
                      aria-label={project.name}
                      className="text-lightest-slate hover:text-green focus-visible:text-green transition-colors duration-200 ease-in-out"
                    >
                      <FiGithub />
                    </Link>

                    <Link
                      key={project.siteUrl}
                      href={project.siteUrl}
                      aria-label={project.name}
                      className="text-lightest-slate hover:text-green focus-visible:text-green transition-colors duration-200 ease-in-out"
                    >
                      <FiExternalLink />
                    </Link>
                  </article>
                </article>

                <p className="text-base text-slate">{project.description}</p>
              </header>

              <footer className="flex flex-wrap gap-2 items-center mt-5">
                {project.technologies.map((technology) => (
                  <Fragment key={id}>
                    <Pill text={technology} />
                  </Fragment>
                ))}
              </footer>
            </article>
          </article>
        ))}
      </article>
    </section>
  );
};

export default Project;
