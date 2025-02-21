type ExperiencesType = {
  title: string;
  company: string;
  description: string;
  year: {
    start: string;
    end: string;
  };
  technologies: string[];
};

export const experiences: ExperiencesType[] = [
  {
    title: 'Frontend Web Developer',
    company: 'PT Total Nusantara Transport',
    description:
      "Developed a website based dashboard which is used to monitor the company's logistics journey. Worked and collaborated with my team under Agile Scrum methodology.",
    year: {
      start: 'Mar, 2023',
      end: 'Jul, 2023',
    },
    technologies: ['NextJS', 'TypeScript', 'React Query', 'TailwindCSS'],
  },
  {
    title: 'Frontend Web Developer',
    company: 'Vocasia',
    description:
      "Selected from 11,252 students from all universities in Indonesia who registered. A total of 117 students were selected, including me. The project I worked on is the main website that Vocasia uses to run their business. For about 5 months, I've developed some features that met its requirements and deadline",
    year: {
      start: 'Aug, 2022',
      end: 'Dec, 2022',
    },
    technologies: [
      'NextJS',
      'TypeScript',
      'React Query',
      'Chakra UI',
      'Zustand',
      'TailwindCSS',
    ],
  },
];
