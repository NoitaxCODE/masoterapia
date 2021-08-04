//SASS
import gulp from 'gulp'
//PUG
import pug from 'gulp-pug';
//import sass from 'gulp-sass'
let sass = require('gulp-sass')(require('sass'));
const production = false;
//TAREAS
gulp.task('sass', () => {
    return gulp
        .src('./src/sass/*.scss')
        .pipe(
            sass({
                outputStyle: 'expanded'
            })
        )
        .pipe(gulp.dest('./src/public/styles'));
});

gulp.task('pug', () => {
    return gulp
        .src('./src/views/*.pug')
        .pipe(
        pug({
            pretty: production ? false : true
        })
        )
        .pipe(gulp.dest('./src/public/pages'));
});

//OBSERVADORES
gulp.task('default', () => {
    // gulp.watch('./styles/*.css', gulp.series('styles'));
    // gulp.watch('./js/**.js', gulp.series('babel'));
    gulp.watch('./src/views/*.pug', gulp.series('pug'));
    gulp.watch('./src/sass/*.scss', gulp.series('sass'));
}) 