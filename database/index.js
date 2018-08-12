const pg = require('pg');

const connection = new pg.Client('postgres://daniel:ABCdef123!@localhost:5432/chatspacedb');

module.exports = connection;