import { orchidORM } from 'orchid-orm';
import { TestTable } from './src/test';
import { TestTable2 } from './src/test2';

export const db = orchidORM(
  {
    databaseURL: process.env.DATABASE_URL,
  },
  {
    test: TestTable,
    test2: TestTable2
  },
);

const main = async () => {
  console.log(db.test.toSql())  // SELECT "id", "custom_name_id_db" AS "userId" FROM "test"
  console.log(db.test2.toSql()) // SELECT "id", "user_id" AS "userId" FROM "test"
}

main()
