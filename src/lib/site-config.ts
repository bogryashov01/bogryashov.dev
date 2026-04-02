export const SITE_CONFIG = {
  name: 'Volodymyr Bogryashov',
  title: 'Product Engineer',
  domain: 'https://bogryashov.dev',
  email: 'bogryashov.dev@gmail.com',
  telegram: 'https://t.me/bogryashovdev',
  telegramHandle: '@bogryashovdev',
  linkedin: 'https://www.linkedin.com/in/volodymyr-bogryashov-97b3151a1/',
  github: 'https://github.com/bogryashov01',
  description: 'Product engineer building scalable SaaS platforms, CRM systems, dashboards, LMS products, and e-commerce experiences.',
};

export const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_ITEMS = [
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin },
  { label: 'GitHub', href: SITE_CONFIG.github },
  { label: 'Telegram', href: SITE_CONFIG.telegram },
] as const;
