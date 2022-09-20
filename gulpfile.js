// Импорт основного модуля gulp
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';
// Передаем значения в глобальную переменную для удобства
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from './gulp/tasks/copy.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
}

// const mainTasks = gulp.parallel(copy, html, scss, js);
const mainTasks = gulp.parallel(copy);

// Построение сценариев выполнения задач
const dev = gulp.series(mainTasks);

// Выполнение сценария по умолчанию
gulp.task('default', dev);
