var knex = require('./knex');

module.exports = {

  displayAll: function() {
    return knex('member').select();
  }

};
