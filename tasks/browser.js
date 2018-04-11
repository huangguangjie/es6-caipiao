import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', callback => {
	if(!args.watch) return callback();
	gulp.watch('app/**/*.js', ['scripts']);
	gulp.watch('app/**/*.ejs', ['pages']);
	gulp.watch('app/**/*.css', ['css']);
});