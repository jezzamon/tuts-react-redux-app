if (process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod');
} else {
	module.exports = require('./configureStore.dev');
}
//Dynamic imports aren't supported by ES6, so using require instead of import.
//Store module will run depending on NODE_ENV setting
