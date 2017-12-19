var gulp = require("gulp");
var concat = require("gulp-concat");
var htmlmin = require("gulp-htmlmin");
var csso = require("gulp-csso");
var uglify = require("gulp-uglify");
var cacheBust = require("gulp-cache-bust");

gulp.task("default", ["html", "css", "js", "js2", "font", "img"]);

gulp.task("html", function() {
  return gulp.src("src/**/*.html")
    .pipe(cacheBust({
      type: "timestamp"
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true
    }))
    .pipe(gulp.dest("bin"))
});

gulp.task("css", function() {
  return gulp.src("src/css/**/*.css")
    .pipe(concat("main.css"))
    .pipe(csso())
    .pipe(gulp.dest("bin/css"))
});

gulp.task("js", function() {
  return gulp.src([
    "src/js/jquery.min.js",
    "src/js/jquery*.js",
    "src/js/**/*.js",
    "!src/js/modernizr*.js",
    "!src/js/respond*.js"
  ])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("bin/js"))
});

gulp.task("js2", function() {
  return gulp.src([
    "src/js/modernizr*.js",
    "src/js/respond*.js"
  ])
    .pipe(uglify())
    .pipe(gulp.dest("bin/js"))
});

gulp.task("font", function() {
  return gulp.src("src/fonts/**")
    .pipe(gulp.dest("bin/fonts"))
});

gulp.task("img", function() {
  return gulp.src("src/images/**")
    .pipe(gulp.dest("bin/images"))
});
