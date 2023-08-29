const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const dartSass = require('gulp-dart-sass');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(dartSass().on('error', dartSass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function () {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('uglify', function () {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
