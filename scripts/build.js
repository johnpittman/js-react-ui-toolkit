const { exec } = require('child_process');
const gulp = require('gulp');
const postcss = require('gulp-postcss');

const projectPath = '..';
const srcPath = '../src';

gulp.task('css', function (cb) {
  gulp
    .src(`${srcPath}/**/*.css`)
    .pipe(postcss())
    .pipe(gulp.dest(`${projectPath}/lib`));

  cb();
});

gulp.task('build', function (cb) {
  exec('npm run build');

  cb();
});

gulp.task('watch', function () {
  gulp.watch(
    [`${srcPath}/**/*`, `!${srcPath}/**/__*__`, `!${srcPath}/**/*.stories.*`, `!${srcPath}/**/*.test.*`],
    {
      ignoreInitial: false
    },
    gulp.series('build')
  );
});
