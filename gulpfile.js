var gulp = require('gulp'),
watch = require('gulp-watch'),
PostCSS = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');


gulp.task('default', function(){
    console.log('Hooray gulp is running');
});

gulp.task('html', function(){
    console.log('HTML related gulp task');

});
gulp.task('styles', function(){
    // PostCSS related logic
    return gulp.src('./app/assets/styles/styles.postcss')
    .pipe(PostCSS([
        nested,
        cssvars,
        autoprefixer
    ]))
    .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});