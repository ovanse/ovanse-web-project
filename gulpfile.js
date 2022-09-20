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
import { copy } from './gulp/tasks/copy.js';
import { clear } from './gulp/tasks/clear.js';
import { html } from './gulp/tasks/html.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  app.gulp.watch(app.path.watch.files, copy);
  app.gulp.watch(app.path.watch.html, html);
}

// const mainTasks = gulp.parallel(copy, pug, scss, js);
const mainTasks = app.gulp.parallel(copy, html);

// Построение сценариев выполнения задач
const dev = app.gulp.series(clear, mainTasks);

// Выполнение сценария по умолчанию
app.gulp.task('default', dev);
