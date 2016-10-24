// Include gulp
var gulp = require('gulp');
var typescript = require('gulp-typescript');
var watch = require('gulp-watch');

var tsProject = typescript.createProject('tsconfig.json');


gulp.task('compile', function() {

    var tsResult = tsProject.src() //gulp
                   // .src(['typescript/**/*.ts']) // instead of gulp.src(...) 
                    .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('jsScripts/'));
});

gulp.task('compile-tests', function() {

    var tsResult =  tsProject.src()//.src(['tests/test-spec-ts/**/*.ts']) // instead of gulp.src(...) 
                    .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('tests/test-spec-js/'));
});

// gulp.task('compile', function(){
//   gulp.src(['typescript/**/*.ts'])
//     .pipe(typescript())
//     .pipe(gulp.dest('jsScripts/'))
// });

// gulp.task('compile-tests', function(){
//   gulp.src(['tests/test-spec-ts/**/*.ts'])
//     .pipe(typescript())
//     .pipe(gulp.dest('tests/test-spec-js/'))
// });







// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('tests/**/*.ts', ['compile-tests']);
    gulp.watch('typescript/**/*.ts', ['compile']);
});

// Default Task
gulp.task('default', ['watch']);