import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Включаем экспериментальную поддержку для лучшей работы с динамическими роутами
    typedRoutes: true,
  },
};

export default nextConfig;
