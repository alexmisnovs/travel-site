var gulp = require('gulp'),
watch = require('gulp-watch'),
PostCSS = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss_import = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('styles', function(){
    // PostCSS related logic
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(PostCSS([
        postcss_import,
        nested,
        cssvars,
        autoprefixer
    ]))
    .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function(){

    browserSync.init({
        notify:false, // disables notifications
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
    
});
// css browserSync injection
gulp.task('cssInject',['styles'] ,function(){
   return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});