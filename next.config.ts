import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Включаем поддержку типизированных роутов для лучшей работы с динамическими роутами
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/work',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/uk',
        destination: '/',
        permanent: true,
      },
      {
        source: '/uk/work',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/uk/contact',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  typedRoutes: true,
};

export default nextConfig;
