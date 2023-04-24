import { orchidORM } from 'orchid-orm';
import { test } from './src/test';

export const db = orchidORM(
  {
    database: process.env.DATABASE_URL,
  },
  {
    test,
  },
);
