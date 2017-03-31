
// https://www.npmjs.com/package/dotenv
// dotenv loads the `.env` and adds the values to `process.env` which is global
// so it only needs to be required once, typically at the start of your app
require('dotenv').config(); // loads `./.env` by default

// pass a path to load your file from a custom path
// require('dotenv').config({path: '/custom/path/to/your/custom/env/file'})

const { DATABASE } = require('./config');
const knex = require('knex')( DATABASE );

console.log( DATABASE );
console.log( process.env.DATABASE );
console.log( process.env.SECRET )
