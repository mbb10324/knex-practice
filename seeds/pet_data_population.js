/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE pet_type CASCADE')
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'John', pet_type_id: 2},
    {id: 2, name: 'Tom', pet_type_id: 3},
    {id: 3, name: 'Dom', pet_type_id: 3},
    {id: 4, name: 'Dom', pet_type_id: 4}
  ]);
};
