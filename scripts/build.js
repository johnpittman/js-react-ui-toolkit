const gulp = require('gulp');
const postcss = require('gulp-postcss');

const projectPath = `${__dirname}/..`;

function generateCss() {
  return gulp
    .src(`${projectPath}/src/**/*.css`)
    .pipe(postcss())
    .pipe(gulp.dest(`${projectPath}/lib`));
}

exports.css = generateCss;
