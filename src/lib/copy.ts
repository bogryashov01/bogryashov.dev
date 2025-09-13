export const COPY = {
  hero: {
    h1: 'Clear design. Real outcomes.',
    sub: 'I build high-performance, accessible websites that are easy to maintain and scale.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'View my work',
  },

  clients: ['GCL Privé', 'La Coiffe', 'Al Bacio', 'Bonds', 'MarinhoSteel', 'VentiClean'],

  services: [
    {
      title: 'Web Development',
      description: 'Modern, maintainable websites built with the latest technologies and best practices.',
    },
    {
      title: 'UI/UX & Design Systems',
      description: 'Consistent design, tokens, and components that create cohesive user experiences.',
    },
    {
      title: 'Performance & SEO',
      description: 'Core Web Vitals optimization, accessibility compliance, and structured data implementation.',
    },
    {
      title: 'Consulting & Audits',
      description: 'Design system audits, code reviews, and technical strategy for existing projects.',
    },
  ],

  testimonials: [
    {
      quote:
        'Working with Vladimir was exceptional. He delivered a website that not only looks great but performs flawlessly. Our conversion rates improved significantly.',
      author: 'Sarah Chen',
      company: 'TechStart Solutions',
    },
    {
      quote:
        'The attention to detail and technical expertise is outstanding. Our new website is fast, accessible, and exactly what we envisioned.',
      author: 'Marcus Rodriguez',
      company: 'Creative Agency',
    },
    {
      quote:
        'Vladimir transformed our online presence. The website is professional, user-friendly, and has helped us attract more clients than ever before.',
      author: 'Elena Kowalski',
      company: 'Legal Practice',
    },
  ],

  about: {
    intro:
      "I'm Vladimir Bogryashov, a frontend developer specializing in creating high-performance, accessible websites. With a focus on clean code and clear design, I help businesses establish a strong online presence that drives real results.",
    values: [
      {
        title: 'Clarity',
        description: 'Clear communication and transparent processes throughout every project.',
      },
      {
        title: 'Progress',
        description: 'Continuous improvement and staying current with the latest web technologies.',
      },
      {
        title: 'Transparency',
        description: 'Open communication, regular updates, and honest feedback on project progress.',
      },
      {
        title: 'Excellence',
        description: 'Delivering exceptional quality and attention to detail in every line of code.',
      },
    ],
    skills: [
      'Next.js & React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Web Accessibility',
      'Performance Optimization',
      'SEO & Core Web Vitals',
      'Design Systems',
    ],
  },

  contact: {
    email: 'hello@bogryashov.dev',
    telegram: 'Write in Telegram',
    cta: "Let's discuss your project",
  },

  meta: {
    title: 'bogryashovDev - Clean code. Clear design. Real outcomes.',
    description:
      'I build high-performance, accessible websites that are easy to maintain and scale. Specializing in Next.js, React, and modern web technologies.',
    keywords: 'web development, frontend developer, Next.js, React, TypeScript, web design, accessibility, performance optimization',
  },
} as const;
