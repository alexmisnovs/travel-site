var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
    shape: {
      spacing: {
         padding: 1
      }  
    },
     mode : {
        css:{
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', function(){
    // delete app/temp/sprite folder
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'] , function(){
    // get the icons
    return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

// doesnt work.. so leaving out the PNGs
// gulp.task('createPNGcopy', ['createSprite'], function(){
//     return gulp.src('./app/temp/sprite/css/*.svg')
//     .pipe(svg2png())
//     .pipe(gulp.dest('./app/temp/sprite/css'));
// });


gulp.task('copySpriteFile', ['createSprite'] , function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites/'));

})

gulp.task('copySpriteCSS', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteFile' ,'copySpriteCSS'] , function(){
    return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean','createSprite','copySpriteCSS', 'copySpriteFile', 'endClean']);