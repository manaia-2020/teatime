exports.up = (knex, Promise) => {
    return knex.schema.createTable('favourites', (table) =>{
    table.increments('id').primary()
    table.integer('user_id')
    table.foreign('user_id').references('user.id')
    table.integer('recipe_id')
    table.foreign('recipe_id').references('recipes.id')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('favourites')
};