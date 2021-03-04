/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
exports.up = (knex) =>
  knex.schema.createTable('banks', (t) => {
    t.increments('id').primary();
    t.string('name', 255).notNullable();
    t.decimal('interest_rate');
    t.decimal('maximum_loan');
    t.date('loan_term');
    t.unique(['name']);
    t.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    t.timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
  });

exports.down = (knex) => knex.schema.dropTable('banks');
