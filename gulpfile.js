// Импорт основного модуля gulp
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';
// Импорт конфигурации плагинов и сборки
import { config } from './gulp/config/config.js';
// Передаем значения в глобальную переменную для удобства
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  config: config,
};

// Импорт задач
import { clear } from './gulp/tasks/clear.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { pug } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
import { server } from './gulp/tasks/server.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  app.gulp.watch(app.path.watch.files, copy);
  app.config.usePUG
    ? app.gulp.watch(app.path.watch.pug, pug)
    : app.gulp.watch(app.path.watch.html, html);
  app.gulp.watch(app.path.watch.scss, scss);
  app.gulp.watch(app.path.watch.js, js);
  app.gulp.watch(app.path.watch.img, img);
}

const mainTasks = app.config.usePUG
  ? app.gulp.parallel(copy, pug, scss, js, img)
  : app.gulp.parallel(copy, html, scss, js, img);

// Построение сценариев выполнения задач для билда
const build = app.gulp.series(clear, mainTasks);

// Построение сценариев выполнения задач для разработки
const dev = app.gulp.series(build, app.gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
app.gulp.task('default', app.config.isProd ? build : dev);
