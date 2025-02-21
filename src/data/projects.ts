type ProjectsType = {
  name: string;
  image: string;
  githubUrl: string;
  siteUrl: string;
  description: string;
  technologies: string[];
};

export const projects: ProjectsType[] = [
  {
    name: 'Sekawan Restaurant',
    image: '/assets/images/sekawan-restaurant.jpg',
    githubUrl: 'https://github.com/LukmanRambe/Sekawan-Restaurant',
    siteUrl: 'https://sekawan.netlify.app/',
    description:
      "Restaurant Catalogue Website. This is a Progressive Web App, using stale while revalidate cache method. User can add a restaurant to favorite list that will be saved to Browser's IndexDB and give a review.",
    technologies: ['JavaScript', 'Karma', 'Jasmine'],
  },
  {
    name: 'Calista Crib',
    image: '/assets/images/calista-crib.jpg',
    githubUrl: 'https://github.com/LukmanRambe/calista-crib',
    siteUrl: 'https://calistacrib.netlify.app/',
    description:
      'Calista Crib is a landing page to describe what is calisthenics and its benefits. This website is made with vanilla JavaScript, also fully responsive.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Meme Master',
    image: '/assets/images/meme-master.jpg',
    githubUrl: 'https://github.com/LukmanRambe/Meme-Master',
    siteUrl: 'https://meme-master.netlify.app/',
    description:
      'A Web App Built by Using ReactJS to Generate Memes from Templates by Using imgflip API (https://imgflip.com/api).',
    technologies: ['ReactJS', 'JavaScript', 'styled-components'],
  },
  {
    name: 'Mubaaz',
    image: '/assets/images/mubaaz.jpg',
    githubUrl: 'https://github.com/LukmanRambe/Mubaaz-Project',
    siteUrl: 'https://mubaaz.vercel.app/',
    description:
      'Landing page and information system for Masjid Umar bin Abdul Aziz',
    technologies: ['NextJS', 'TypeScript', 'TailwindCSS', 'React Query'],
  },
  {
    name: 'Bookshelf Apps',
    image: '/assets/images/bookshelf-app.jpg',
    githubUrl: 'https://github.com/LukmanRambe/Bookshelf-Apps',
    siteUrl: 'https://myownshelf.netlify.app/',
    description:
      "We can store our books that we will read or have read and search the book by it's title, just like the real-world bookshelf.",
    technologies: ['JavaScript', 'Bootstrap', 'TailwindCSS'],
  },
  {
    name: 'Our Cart',
    image: '/assets/images/our-cart.jpg',
    githubUrl: 'https://github.com/LukmanRambe/Our-Cart',
    siteUrl: 'https://ourcart.netlify.app/',
    description:
      "This is Groceries Shopping List web app. All the data will be stored in our browser's local storage.",
    technologies: [
      'ReactJS',
      'JavaScript',
      'styled-components',
      'React Router',
    ],
  },
];
