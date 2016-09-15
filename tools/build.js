//More info on webpack's node API https://webpack.github.io/docs/node.js-api.html
// Allowing console calls since it's a build file
/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; //this assures the babel dev config (hot reloading) doesn't apply

console.log('Generating minfied bundle for production via webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err,stats) => {
	if(err) {  //fatal error occured stop here
		console.log(err.bold.red);
		return 1;
	}

	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(error.red));
	}

	if(jsonStats.hasWarnings) {
		console.log('Webpack generated the following warnings: '.bold.yellow);
		jsonStats.warnings.map(warning => console.log(warning.yellow));
	}

	console.log(`Webpack stats: ${stats}` );

	//if we got this far the build succeeded
	console.log('Your app has been compiled in production mode and written to /dist.  It\'s ready to roll!'.green);

	return 0;
});
