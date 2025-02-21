import { experiences } from '@/data/experiences';
import Pill from './Pill';
import { Fragment, useId } from 'react';

const Experience = () => {
  const id = useId();

  return (
    <section
      id="experience"
      className="h-full xl:px-28 py-20 lg:py-28 xl:py-32"
    >
      <article className="flex items-center gap-5 mb-8">
        <span className="roboto-mono text-green text-base sm:text-xl xl:text-2xl font-medium">
          02.
        </span>
        <h3 className="text-lightest-slate text-xl sm:text-2xl xl:text-3xl font-semibold">
          Where I&apos;ve Worked
        </h3>
      </article>

      <div className="w-full flex flex-col gap-12">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="flex flex-col sm:flex-row w-full gap-3 sm:gap-6 xl:gap-12"
          >
            <span className="min-w-fit text-slate font-semibold text-base">
              {experience.year.start} - {experience.year.end}
            </span>

            <article className="flex flex-col w-full gap-4">
              <div className="text-start w-full">
                <h3 className="flex flex-col gap-1 text-lightest-slate font-bold text-xl mb-2">
                  {experience.title}{' '}
                  <span className="text-green">@ {experience.company}</span>
                </h3>

                <p className="text-gray-400">{experience.description}</p>
              </div>

              <div className="flex gap-2 items-center flex-wrap">
                {experience.technologies.map((technology) => (
                  <Fragment key={id}>
                    <Pill text={technology} />
                  </Fragment>
                ))}
              </div>
            </article>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
