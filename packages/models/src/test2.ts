import { BaseTable, BaseTable2 } from './_base';

export class TestTable2 extends BaseTable2 {
  readonly table = 'test';

  columns = this.setColumns((t) => ({
    id: t.identity().primaryKey(),

    userId: t.name('custom_name_id_db').varchar()
  }));
}
