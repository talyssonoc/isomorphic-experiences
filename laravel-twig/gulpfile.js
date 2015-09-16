var gulp = require('gulp');
var elixir = require('laravel-elixir');
var bower = require('main-bower-files');
 
gulp.task('bower', function() {
  gulp.src(bower(), { base: 'bower_components' })
      .pipe(gulp.dest('public/vendor'));
});

gulp.task('build:js', function() {
  gulp.src('resources/assets/js/**/*')
      .pipe(gulp.dest('public/js'));
});

elixir(function(mix) {
  mix.task('build:js', 'resources/assets/js/**/*')
      .task('bower', 'bower_components/*');
});
