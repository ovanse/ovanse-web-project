import replace from 'gulp-replace'; // Поиск и замена
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)
import browsersync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверяет обновился ли файл
import size from 'gulp-size'; // Показывает размер файла|ов
import gulpif from 'gulp-if'; // Позволяет использовать логические конструкции в gulp

// Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  size: size,
  gulpif: gulpif,
};
