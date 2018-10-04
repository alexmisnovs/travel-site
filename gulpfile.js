var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){
    console.log('Hooray gulp is running');
});

gulp.task('html', function(){
    console.log('HTML related gulp task');

});
gulp.task('styles', function(){
    console.log('CSS related gulp task');

});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});