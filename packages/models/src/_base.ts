import { createId } from '@paralleldrive/cuid2';
import { createBaseTable } from 'orchid-orm';

export const BaseTable = createBaseTable({
  columnTypes: (t) => ({
    ...t,
    text: (min = 0, max = Infinity) => t.text(min, max),
    cuid: () =>
      t
        .varchar(36)
        .primaryKey()
        .default(() => createId()),
  }),
});
