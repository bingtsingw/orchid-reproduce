import { createId } from '@paralleldrive/cuid2';
import { createBaseTable } from 'orchid-orm';

export const BaseTable = createBaseTable({
  snakeCase: true,

  columnTypes: (t) => ({
    ...t,
  }),
});

export const BaseTable2 = createBaseTable({
  snakeCase: true,

  columnTypes: (t) => ({
    ...t,
    varchar: (length: number = 255) => t.varchar(length),
  }),
});
