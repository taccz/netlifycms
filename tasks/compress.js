const config = require('./helpers/getConfig.js');
const pckg = require('../package.json');

const {src, dest} = require('gulp');
const zip = require('gulp-zip');
const dateformat = require('dateformat');
const folder = pckg.name + '-' + dateformat(new Date(), 'yyyy-mm-dd-HH.MM');


module.exports = function compress() {
	return src([
		'**/*',
	], {
		cwd: config.basePath.dest,
	})
		.pipe(zip(folder + '.zip'))
		.pipe(dest('_zip/'));
};
