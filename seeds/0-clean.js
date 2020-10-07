exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('steps')()
  .then(empty('favourites'))
  .then(empty('quantities'))
  .then(empty('measurements'))
  .then(empty('ingredients'))
  .then(empty('recipes'))
  .then(empty('users'))
}