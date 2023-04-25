const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const DIST_PATH = "./dist";

function css() {
  return gulp
    .src("./src/sass/index.sass")
    .pipe(sass({ includePaths: ["src/scss"] }).on("error", sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest(`${DIST_PATH}/css`));
}
function html() {
  return gulp.src("./src/*.html").pipe(gulp.dest(`${DIST_PATH}`));
}

function fonts() {
  return gulp
    .src("./src/vendor/fonts/**/*")
    .pipe(gulp.dest(`${DIST_PATH}/fonts`));
}
function images() {
  return gulp.src("./src/images/**/*").pipe(gulp.dest(`${DIST_PATH}/images`));
}
function public() {
  return gulp.src("./src/public/**/*").pipe(gulp.dest(`${DIST_PATH}`));
}

var server = require("gulp-server-livereload");

gulp.task("default", function () {
  gulp.src("dist").pipe(
    server({
      livereload: true,
      defaultFile: "index.html",
      directoryListing: false,
      open: false,
    })
  );
});
exports.css = css;
exports.html = html;
exports.assets = gulp.series(fonts, images, public);
exports.default = gulp.series(css, html, fonts, images, public);
