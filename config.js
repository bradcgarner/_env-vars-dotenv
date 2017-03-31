/**
 * process.env.FOO can bet set by:
 * 		1) Runn `export SECRET=password` on the command line
 * 		2) Add `export SECRET=password` to your `~/.bash_profile`
 * 		2) Use the `dotenv` node package https://www.npmjs.com/package/dotenv
 * 		3) And in Heroku you can set them by: 
 * 				a) run `heroku config:set SECRET=password`
 * 				b) Or in: YOUR-APP > Settings > Reveal Config Vars
 */ 
// 
// 		
//  	
//    
					
//set DATABASE to process, or global or some default
exports.DATABASE = process.env.DATABASE || global.DATABASE || { database: 'local-dev-database' };
