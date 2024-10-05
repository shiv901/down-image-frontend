declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      POSTGRES_PRISMA_URL: string;
    }
  }
}

export {};
