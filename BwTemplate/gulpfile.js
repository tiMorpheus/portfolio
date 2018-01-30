
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();



gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browserSync', function () {
    browserSync.init({
        server:{
            baseDir: 'app'
        },
        notify: false
    })
});


gulp.task('watch',['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/lib/**/*.css', browserSync.reload);
});

gulp.task('default', ['watch']);