// Konfigurasi environment
export const env = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
};

// Konfigurasi Sentry
export const sentryConfig = {
  dsn: process.env.SENTRY_DSN || '',
  environment: process.env.NODE_ENV || 'development',
};

// Konfigurasi aplikasi
export const appConfig = {
  name: 'GreenCycleBank',
  description: 'Platform Bank Sampah dan Circular Economy',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
};
