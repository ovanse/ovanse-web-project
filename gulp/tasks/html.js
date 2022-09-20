import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import htmlmin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        }))
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(webpHtmlNosvg())
    .pipe(app.plugins.gulpif(app.config.isProd, app.plugins.size({ title: 'До сжатия' })))
    .pipe(app.plugins.gulpif(app.config.isProd, htmlmin(app.config.htmlmin)))
    .pipe(app.plugins.gulpif(app.config.isProd, app.plugins.size({ title: 'После сжатия' })))
    .pipe(
      versionNumber({
        value: '%DT%',
        append: {
          key: '_v',
          cover: 0,
          to: ['css', 'js'],
        },
        output: {
          file: 'gulp/version.json',
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
