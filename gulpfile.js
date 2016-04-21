var gulp = require('gulp');
var connect = require('gulp-connect');

var path = {
	root: 'client/'
};

//connect
gulp.task('connect', function () {
	connect.server({
		root: 'client',
		port: 3000,
		livereload: true
	});
});

//js
gulp.task('scripts', function () {
	return gulp.src(path.root + '*.js')
		.pipe(connect.reload());
});

//html
gulp.task('html', function () {
	return gulp.src(path.root + 'index.html')
		.pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
	gulp.watch(path.root + '*.js', ['scripts']);
	gulp.watch(path.root + 'index.html', ['html']);
});

gulp.task('default', ['connect', 'scripts', 'html', 'watch']);