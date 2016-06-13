var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var sass = require('gulp-sass');
var plug = require('gulp-load-plugins')({ lazy: true });

var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('babel-core/register');
var source = require('vinyl-source-stream');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './output',
};

gulp.task('css', function() {
    return gulp.src('./css/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('babelify', function () {
  return browserify({
    extensions: ['.jsx', '.js'],
    entries: './app.jsx',
  })
    .transform(babelify.configure({ ignore: /(bower_components)|(node_modules)/ }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./output/'));
});

gulp.task('test', function () {
  return gulp.src('./test/**/*.js', { read: false })
    .pipe(plug.mocha({
      compilers: {
        js: babel
      }
    }));
});

gulp.task('build', ['babelify', 'css',], function(){
  return gulp.src('./index.html')
        .pipe(plug.open(), {app: 'google-chrome'});
});

gulp.task('watch', function () {
    watch(['**/*.jsx','css/**/*.scss'], batch(function (events, done) {
        gulp.start('build', done);
    }));
});