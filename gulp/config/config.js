const isProd = process.argv.includes('--production');
const isDev = !isProd;
const usePUG = false; // Использовать PUG или HTML

export const config = {
  isProd: isProd,
  isDev: isDev,
  usePUG: usePUG,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  pug: {
    pretty: isDev, // Сжатие HTML файла
    verbose: isDev, // Показывать в терминале какой файл обработан
  },

  webpack: {
    mode: isProd ? 'production' : 'development', // минифицированный код
    output: {
      filename: 'main.min.js',
    },
  },

  imagemin: {
    verbose: true, // выводить размер до и после работы плагина
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },
  versionNumber: {
    value: '%DT%',
    append: {
      key: '_v',
      cover: 0,
      to: ['css', 'js'],
    },
    output: {
      file: 'gulp/version.json',
    },
  },
  autoPrefixer: {
    grid: true,
    overrideBrowserslist: ['last 3 versions'],
    cascade: true,
  },
};
