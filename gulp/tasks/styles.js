var gulp=require('gulp'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
rem=require('postcss-rem'),
cssImport=require('postcss-import'),
mixins=require('postcss-mixins'),
hexrgba=require('postcss-hexrgba');

var rename=require('gulp-rename');


gulp.task('styles',function () { 
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars,rem, nested, hexrgba, autoprefixer]))
    .on('error', function (error) { 
        console.log(error.toString());
        this.emit('end');
     })
     .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('copyLightboxCss',function(){
    return gulp.src('./node_modules/lightbox2/dist/css/lightbox.css')
    .pipe(rename("_lightbox.css"))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});