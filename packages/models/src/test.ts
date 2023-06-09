import { BaseTable } from './_base';

export class TestTable extends BaseTable {
  readonly table = 'test';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),

    userId: t.name('custom_name_id_db').varchar()
  }));
}
