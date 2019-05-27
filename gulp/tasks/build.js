var gulp=require('gulp'),
del=require('del'),
imagemin=require('gulp-imagemin'),
usemin=require('gulp-usemin'),
rev=require('gulp-rev'),
uglify=require('gulp-uglify'),
cssnano=require('gulp-cssnano');
browserSync=require('browser-sync').create();


gulp.task('previewDist',function(){

    browserSync.init({
        server:{baseDir: './dist'},
        notify:false
    });
});

gulp.task('deleteDist',function(){
    return del('./dist');
});

gulp.task('copyFiles',['deleteDist'],function(){
    var pathsToCopy=[
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];
    return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImages',['deleteDist','icons'],function () { 
    return gulp.src('./app/assets/images/**/*')
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        optimizationLevel: 5
    }))
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin',['deleteDist','styles','scripts'],function(){
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify()}]
      }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build',['deleteDist','copyFiles','optimizeImages','usemin']);