const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulpIgnore = require('gulp-ignore');
const sourceMaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');
const cache = require('gulp-cache');
const nodemon = require('gulp-nodemon');

const ENV = 'development';

const __DEV__ = (
  process.env.NODE_ENV !== 'staging' &&
  process.env.NODE_ENV !== 'production'
);


const src = path.resolve('src');
const buildPath = path.resolve('bin');
const srcFiles = `${src}/**/*.*`;
const srcJS = `${src}/**/*.js`;

gulp.task('clear-cache', () => (
  cache.clearAll()
));


gulp.task('lint', () => (
  gulp.src([srcJS,'!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
));

gulp.task('babel', () => (
  gulp.src(srcFiles)
    .pipe(sourceMaps.init())
    .pipe(plumber())
    .pipe(__DEV__ ? cache(babel()) : babel())
    .pipe(sourceMaps.write(__DEV__ ? null : '.'))
    .pipe(gulp.dest(buildPath))

));

gulp.task('build', (done) => {
  runSequence('lint', 'babel', function() {
    console.log('Lint & Babel Complete');
    done();
  });
});

gulp.task('default', (done) => {
  runSequence('clear-cache', 'build', function() {
    done();
  });
});

gulp.task('dev', ['default'], () => {

  const stream = nodemon({
    tasks: ['build'],
    script: buildPath,
    watch: ['./src'],
    env: { 'NODE_ENV': ENV },
  });

  stream
    .on('restart', function () {
      console.log('Restarted')
    })
    .on('crash', function() {
      console.error('Application has crashed!\n');
      // stream.emit('restart', 10);  // restart the server in 10 seconds
    })

});
