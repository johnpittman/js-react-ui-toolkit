const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');

const projectPath = `${__dirname}/..`;

function generateCss() {
  return gulp
    .src(`${projectPath}/src/**/*.css`)
    .pipe(postcss([postcssImport(), postcssNested()]))
    .pipe(gulp.dest(`${projectPath}/lib`));
}

exports.css = generateCss;
