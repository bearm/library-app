/* File: gulpfile.js */
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

gulp.task('default', ['watch']);

//TODO TEST
/*gulp.task('jshint', function() {
    return gulp.src('scripts/!**!/!*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});*/

gulp.task('build-css', function() {
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('library.css'))
        .pipe(gulp.dest('assets/bundles/css'))
        .pipe(rename('library.min.css'));
});

gulp.task('build-vendor-js', function() {
    return gulp.src('vendor/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/bundles/js'));
});

gulp.task('build-js', function() {
    var uglyOptions = {
        mangle: false
    };
    return gulp.src('scripts/**/*.js')
        .pipe(concat('library.js'))
        .pipe(gulp.dest('assets/bundles/js'))
        .pipe(rename('library.min.js'))
        .pipe(uglify(uglyOptions))
        .pipe(gulp.dest('assets/bundles/js'));
});

gulp.task('build', ['build-css', 'build-vendor-js', 'build-js']);

gulp.task('watch', function() {
    gulp.watch('scripts/**/*.js', ['build-js']);
    gulp.watch('assets/sass/**/*.scss', ['build-css']);
});
