import { BaseTable } from './_base';

export class test extends BaseTable {
  readonly table = 'test';

  columns = this.setColumns((t) => ({
    id: t.cuid(),
    ...t.timestamps(),

    name: t.varchar().nullable(),
  }));
}
