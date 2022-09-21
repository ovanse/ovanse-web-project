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
      filename: 'app.min.js',
    },
  },

  imagemin: {
    interlaced: true,
    optimizationLevel: 3, // from 0 to 7
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    verbose: true, // выводить размер до и после работы плагина
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },
  versionNumber: {
    append: {
      cover: 0,
      key: '_v',
      to: ['css', 'js'],
    },
    output: {
      file: 'gulp/version.json',
    },
    value: '%DT%',
  },
  autoPrefixer: {
    grid: true,
    overrideBrowserslist: ['last 3 versions'],
    cascade: true,
  },
};
