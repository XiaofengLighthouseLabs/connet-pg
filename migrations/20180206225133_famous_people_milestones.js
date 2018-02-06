exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){

      table.foreign('famous_person_id').references('famous_person');

    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones',function(table){
      table.dropColumn('famous_person_id')
    })
  ])
};
