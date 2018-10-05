var gulp = require('gulp'),
PostCSS = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss_import = require('postcss-import');

gulp.task('styles', function(){
    // PostCSS related logic
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(PostCSS([
        postcss_import,
        nested,
        cssvars,
        autoprefixer
    ]))
    .on('error', function(err){
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));

});