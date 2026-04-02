export type ProjectCategory = 'AI & SaaS' | 'EdTech Platform' | 'E-commerce';

export type Project = {
  slug: string;
  title: string;
  headline: string;
  url?: string;
  category: ProjectCategory;
  featured: boolean;
  order: number;
  year: string;
  summary: string;
  tags: string[];
  image: string;
  images?: string[];
  challenge: string[];
  contribution: string[];
  businessOutcome: string[];
  technicalHighlights: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'flexus',
    title: 'Flexus',
    headline: 'AI-powered CRM and business system builder',
    category: 'AI & SaaS',
    featured: true,
    order: 1,
    year: '2026',
    summary:
      'Flexus is a modular CRM and business system designed to help teams build structured workflows, dashboards, and data-driven operations with AI-powered assistance.',
    tags: ['Next.js', 'React', 'TypeScript', 'CRM', 'AI'],
    image: '/images/flexus/main.png',
    images: ['/images/flexus/main.jpg', '/images/flexus-2.jpg', '/images/flexus-3.jpg'],
    challenge: [
      'Create a CRM-like business platform that feels more flexible than traditional CRM tools',
      'Design a system that can scale from simple workflows to structured business operations',
      'Introduce AI in a way that feels practical and product-native',
    ],
    contribution: [
      'Defined the product structure, navigation logic, and system architecture',
      'Designed the data-driven UI approach for tables, dashboards, records, and workspace flows',
      'Built the frontend foundation with focus on scalability, clarity, and future feature expansion',
    ],
    businessOutcome: [
      'Created a product concept with strong positioning for founders and business teams',
      'Turned complex workflows into a structured and understandable interface model',
      'Built a foundation for future AI-assisted workspace generation and automation',
    ],
    technicalHighlights: [
      'Scalable frontend architecture for data-heavy product flows',
      'System-oriented UI structure for tables, dashboards, and workspace logic',
      'Designed for long-term extensibility rather than one-off feature implementation',
    ],
  },
  {
    slug: 'lms-platform',
    title: 'LMS Platform',
    headline: 'Learning platform with structured course and assignment flows',
    category: 'EdTech Platform',
    featured: true,
    order: 2,
    year: '2026',
    summary:
      'A learning management platform designed for structured online education, including courses, lessons, assignments, and student progress flows.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'LMS'],
    image: '/images/lms/main.jpg',
    images: ['/images/lms/main.jpg', '/images/lms-2.jpg', '/images/lms-3.jpg'],
    challenge: [
      'Build a learning platform that feels structured, simple, and practical for real educational use',
      'Support multiple user roles with different flows and permissions',
      'Design course, lesson, and assignment logic that is easy to manage and scale',
    ],
    contribution: [
      'Defined the product structure for courses, lessons, homework, and dashboard experience',
      'Designed role-based flows for students and admin-side management',
      'Built the frontend with focus on clean navigation, clarity, and maintainable scaling',
    ],
    businessOutcome: [
      'Created a strong foundation for launching and growing an education product',
      'Improved clarity of the learning flow for both students and course owners',
      'Turned educational complexity into a product structure that is easy to expand',
    ],
    technicalHighlights: [
      'Role-based frontend architecture',
      'Structured content model for courses, lessons, and assignments',
      'Scalable UX logic for educational flows and future growth',
    ],
  },
  {
    slug: 'kriva-mosaica',
    title: 'Kriva Mosaica',
    headline: 'E-commerce platform for DIY mosaic kits',
    url: 'https://kriva-mosaica.com/',
    category: 'E-commerce',
    featured: true,
    order: 3,
    year: '2025',
    summary:
      'An e-commerce platform for selling DIY mosaic kits, built with a strong focus on product presentation, catalog structure, and conversion-ready shopping experience.',
    tags: ['React', 'Node.js', 'Firebase', 'Stripe', 'E-commerce'],
    image: '/images/kriva.jpg',
    images: ['/images/kriva.jpg', '/images/kriva-2.jpg', '/images/kriva-3.jpg'],
    challenge: [
      'Build an online store that makes a niche creative product feel clear, attractive, and easy to buy',
      'Create a catalog structure that supports exploration, trust, and smooth checkout flow',
      'Combine visual presentation with practical commerce functionality',
    ],
    contribution: [
      'Built the frontend architecture for product listing, product pages, cart, and checkout flows',
      'Structured the product catalog for clarity, filtering, and better product discovery',
      'Worked on the overall user experience to balance storytelling, usability, and conversion',
    ],
    businessOutcome: [
      'Created a clear online sales channel for a niche consumer product',
      'Improved product discoverability and buying flow',
      'Supported brand presentation with a more structured store experience',
    ],
    technicalHighlights: [
      'React-based frontend architecture for scalable commerce flows',
      'Structured catalog and product logic for niche e-commerce use cases',
      'Modern checkout and shopping flow foundation designed for growth',
    ],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured).sort((a, b) => a.order - b.order);
