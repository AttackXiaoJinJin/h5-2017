var gulp = require('gulp');
// gulp.task('default', function() {
//    console.log("开始创建");
//     //监看scr/**，一旦变化执行copy
//     // gulp.watch('src/**',['copy']);
// });

// gulp.task('copy',function () {
//     //把index.html复制到dist/目录下
//    // gulp.src('index.html').pipe(gulp.dest('dist/'));
//    // //复制index.jpg,index.bmp,index.gif
//    // gulp.src('index.{jpg,bmp,gif}').pipe(gulp.dest('dist/'));
//    // //复制所有到dist/
//    // gulp.src('*.*').pipe(gulp.dest('dist/'));
//    //复制src下所有到dist目录
//    // gulp.src('src/**').pipe(gulp.dest('dist/'))
//     // 复制sindex和src下所有到dist目录
//    // gulp.src(['src/**','index.html']).pipe(gulp.dest('dist/'));
//    //除了src/下的css文件夹
//     gulp.src(['src/**','index.html','!src/css']).pipe(gulp.dest('dist/'));
//
// });

//实现scss文件的自动构建
// var sass=require('gulp-sass');
// gulp.task('sass',function () {
//     return gulp.src('./src/**/*.scss')
//         .pipe(sass().on('error',sass.logError))
//         .pipe(gulp.dest('dist/'));
// });
// gulp.task('sass:watch',function () {
//     gulp.watch('./src/**/*.scss',['sass'])
// });
var sass=require('gulp-sass');
gulp.task('sass',function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist/'));
});
gulp.task('sass:watch',function () {
    gulp.watch('src/**/*.scss',['sass']);
});



// webserver = require('gulp-webserver');
// //web服务器
// gulp.task('webserver', function() {
//     gulp.src('./www') // 服务器目录（./代表根目录）
//         .pipe(webserver({ // 运行gulp-webserver
//             port: 8000, //端口，默认8000
//             open: true, // 服务器启动时自动打开网页
//             directoryListing: {
//                 enable: true,
//                 path: './www/index.html'
//             },
//         }));
// });





