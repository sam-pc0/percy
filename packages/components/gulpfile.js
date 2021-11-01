const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const NAME = "components";
const BUILD_DIR = "./css/";

//  Compile to minified CSS
const buildMin = () => {
  return gulp
    .src(`./lib/${NAME}.scss`)
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(postcss())
    .pipe(rename(`${NAME}.min.css`))
    .pipe(gulp.dest(BUILD_DIR));
};

// Compile to CSS
const build = () => {
  buildMin();
  return gulp
    .src(`./lib/${NAME}.scss`)
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(postcss())
    .pipe(gulp.dest(BUILD_DIR));
};

// Watch styles
const watchStyles = () => {
  gulp.watch(["./lib/"], build);
};

exports.default = gulp.series(build);
