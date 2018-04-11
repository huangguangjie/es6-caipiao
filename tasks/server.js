import gulp from 'gulp';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', callback => {
	if(!args.watch) return callback();

	let server = liveserver.new(['--harmony', 'server/bin/www']);
	server.start();

	gulp.watch([
		'server/public/**/*.js',
		'server/views/**/*.ejs'
	], file => {
		server.notify.apply(server, [file])
	});

	gulp.watch([
		'server/routes/**/*.js',
		'server/app.js'
	], () => {
		server.start.bind(server)();
	});
});