const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// gulpにscssを監視させたとき、エラーで止まらないようにする
const plumber = require('gulp-plumber');

gulp.task("sass", function (done) {
	gulp.src("./src/main/webapp/WEB-INF/static/scss/**/*.scss")
		.pipe(plumber())
		.pipe(sass({ outputStyle: "expanded" }))
		.pipe(gulp.dest("./src/main/webapp/WEB-INF/static/css"));
	done();
});
gulp.task("watch", function () {
	gulp.watch("./src/main/webapp/WEB-INF/static/scss/**/*.scss", gulp.series(["sass"]));
});