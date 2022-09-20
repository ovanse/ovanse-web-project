import replace from 'gulp-replace'; // Поиск и замена
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)
import browserSync from 'browser-sync'; // Локальный сервер
import newer from 'gulp-newer'; // Проверяет обновился ли файл
import size from 'gulp-size'; // Показывает размер файла|ов
import gulpIf from 'gulp-if'; // Позволяет использовать логические конструкции в gulp
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

// Экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  size: size,
  gulpIf: gulpIf,
  webpHtmlNoSvg: webpHtmlNoSvg,
  versionNumber: versionNumber,
};
