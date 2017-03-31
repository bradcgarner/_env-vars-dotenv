# dotenv-demo# dotenv-demo

Demo standard (real) environment variables and the dotenv package https://www.npmjs.com/package/dotenv

## Environment Variables

### "Standard" Environment Variables can bet set by:
	- Run `export SECRET=password` on the command line EG `SECRET=password node server.js`
	- Or Add `export SECRET=password` to your `~/.bash_profile`

### The `dotenv` package
To ease the use in your local development you can use a the dotenv package. This repo demos the usage

For more information check out the documentation:
	Use the `dotenv` node package https://www.npmjs.com/package/dotenv

### On Travis
On Travis you can
	- Define variables in the repository settings.
		- Simply go to: PROJECT >  Settings > Environment Variables
	- Or add encrypted variables to your `travis.yml` like so:
	`travis encrypt MY_SECRET_ENV=super_secret --add env.matrix`

https://docs.travis-ci.com/user/environment-variables/#Defining-encrypted-variables-in-.travis.yml

### On Heroku
And in Heroku you can set them by: 
	- run `heroku config:set SECRET=password`
	- Or in: YOUR-APP > Settings > "Reveal Config Vars" button
For more information check out the documentation:
https://devcenter.heroku.com/articles/config-vars


### dotenv
dotenv loads the `.env` and adds the values to `process.env` which is global
so it only needs to be required once, typically at the start of your app

By default it loads `./.env` 
```js
require('dotenv').config(); 
```
Or you can pass a path to load your file from a custom path
```js
require('dotenv').config({path: '/custom/path/to/your/custom/env/file'});
```
