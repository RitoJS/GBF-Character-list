var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();

var connect = require('gulp-connect');

var src = './app'; //chemin
var dir = './app/assets/tpl' //html

var dist = './www'; //destination du build





gulp.task('css', function() {
	return gulp.src(src + '/assets/scss/styles.scss')
		.pipe(plugins.sass())
		.pipe(plugins.csscomb())
		.pipe(plugins.cssbeautify({indent: '  '}))
		.pipe(plugins.autoprefixer())
		.pipe(gulp.dest( src + '/assets/css/'))
});

gulp.task('minify', function(){
	return gulp.src(src + '/assets/css/*.css')
		.pipe(plugins.sass())
		.pipe(plugins.rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(src + '/assets/css/'));
})

// build
gulp.task('build', ['css']);

//Build + minify
gulp.task('prod', ['build',  'minify']);

//watch
gulp.task('watch', ['css'], function () {
  gulp.watch(src + '/assets/scss/*.scss',['css']);
});

// default
gulp.task('default', ['build']);

//connect to sever
gulp.task('local', function() {
  connect.server({
  	root:'app',
    port: 8888
  });
  
  connect.serverClose();
});