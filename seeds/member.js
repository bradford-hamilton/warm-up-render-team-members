
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('member').insert({id: 1, first_name: 'Bradford', last_name: 'Lamson-Scribner' }),
        knex('member').insert({id: 2, first_name: 'Peter', last_name: 'Ostiguy' }),
        knex('member').insert({id: 3, first_name: 'Kristie', last_name: 'McGoldrick' }),
        knex('member').insert({id: 4, first_name: 'Wes', last_name: 'Hediger' })
      ]);
    });
};
