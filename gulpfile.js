import gulp from 'gulp';
import plumber from 'gulp-plumber';
import nunjucksrender from 'gulp-nunjucks-render';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Markup

export const markup = () => {
  return gulp.src('source/pages/*.html')
    .pipe(nunjucksrender({path: ['source/templates']}))
    .pipe(gulp.dest('source'))
    .pipe(browser.stream());
}

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/pages/*.html', gulp.series(markup));
  gulp.watch('source/templates/*.njk', gulp.series(markup));
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  markup, styles, server, watcher
);
