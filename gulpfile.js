var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util') ;

gulp.task('html',function(cb){
    gulp.src('builds/*.html')
    .pipe(connect.reload())
   
    
    cb()
});

gulp.task('bootstrap',function(cb){
    gulp.src(['builds/css/bootstrap.min.css',
    'builds/css/bootstrap.min.css.map'])
    .pipe(connect.reload())
     
    
    cb()
});

gulp.task('css',function(cb){
    gulp.src('builds/css/style.css')
   
    .pipe(connect.reload())
  
    cb()
});
gulp.task('watch',function(cb){
    gulp.watch('builds/css/style.css',gulp.series('css'))
    gulp.watch('builds/*.html',gulp.series('html'))
    gulp.watch('builds/js/data.json',gulp.series('json'))
    gulp.watch(['builds/js/script.js',
    'builds/js/*.min.js'],gulp.series('js'))
    gulp.watch(['builds/css/bootstrap.min.css',
    'builds/css/bootstrap.min.css.map'],gulp.series('bootstrap'))
    
    cb()
});

gulp.task('json',function(cb){
    gulp.src('builds/js/data.json')
    
    .pipe(connect.reload())
    cb()
});

gulp.task('js',function(cb){
    gulp.src(['builds/js/script.js',
    'builds/js/underscore-min.js',
    'builds/js/bootstrap.min.js',
    'builds/js/fontawesome-all.min.js',
    'builds/js/jquery-dateFormat.min.js',
    'builds/js/jquery.loadTemplate.min.js',
    'builds/js/jquery.min.js',
    'builds/js/popper.min.js'])
    .on('error',gutil.log)
    
    .pipe(connect.reload())
    cb()
});
gulp.task('connect',function(cb){
   connect.server({
       root:"builds",
       livereload:true,
       port:3000
   })
    cb() 
});


gulp.task('default',gulp.series('html','css','js','json','bootstrap','connect','watch'))

