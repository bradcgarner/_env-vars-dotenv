'use strict';

require('dotenv').config(); // loads `./.env` by default

const { DATABASE } = require('./config');
const knex = require('knex')( DATABASE );

console.log( process.env.DATABASE );
console.log( process.env.SECRET );
