// set DATABASE to process, or global or some default
exports.DATABASE = process.env.DATABASE || global.DATABASE || { database: 'local-dev-database' };
