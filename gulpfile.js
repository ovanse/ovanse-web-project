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
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { jsLib } from './gulp/tasks/jsLib.js';
import { php } from './gulp/tasks/php.js';
import { img } from './gulp/tasks/img.js';
import { font } from './gulp/tasks/font.js';
import { server } from './gulp/tasks/server.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  app.gulp.watch(app.path.watch.files, copy);
  app.gulp.watch(app.path.watch.html, html);
  app.gulp.watch(app.path.watch.scss, scss);
  app.gulp.watch(app.path.watch.js, app.gulp.series(js, jsLib));
  app.gulp.watch(app.path.watch.php, php);
  app.gulp.watch(app.path.watch.img, img);
  app.gulp.watch(app.path.watch.font, font);
}

// Формируем список тасков для выполнения
const mainTasks = app.gulp.parallel(copy, html, scss, js, jsLib, php, img, font);
// Для Build
const build = app.gulp.series(clear, mainTasks);
// Для Dev
const dev = app.gulp.series(build, app.gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
app.gulp.task('default', app.config.isProd ? build : dev);
