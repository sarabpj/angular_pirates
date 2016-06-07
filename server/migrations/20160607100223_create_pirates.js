
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(table){
      table.increments();
      table.text('name');
      table.text('poison');
      table.text('accessory');
      table.text('img_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
