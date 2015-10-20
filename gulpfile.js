var gulp=require('gulp'),
		browserSync=require('browser-sync'),
		less=require('gulp-less'),
		sourcemaps=require('gulp-sourcemaps');

/*
	browserSync中的serverconfig
 */

var serverConfig = {
	files: [
		'src/*.html',
		'src/css/*.css',
		'src/js/**/*.js',
		'src/images/*.{png|gif|jpg}',
	],
	server: {
		baseDir: 'src/'
	}
};

/*
	borwser-sync
 */

gulp.task('browser-sync',function(){
	browserSync(serverConfig);
});


/*
	less
 */

gulp.task('less',function(){
	return gulp.src('src/less/app.less')
				.pipe(sourcemaps.init())
				.pipe(less())
				.on('error',console.log)
				.pipe(sourcemaps.write('/'))
				.pipe(gulp.dest('src/css'))
				.pipe(browserSync.reload({
					stream: true
				}));
});


gulp.task('default', ['less','browser-sync'],function(){
	gulp.watch('src/less/**/*.less',['less']);
});



























