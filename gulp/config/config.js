const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const config = {
  isProd: isProd,
  isDev: isDev,

  autoPrefixer: {
    grid: true,
    overrideBrowserslist: ['last 3 versions'],
    cascade: true,
  },

  htmlmin: {
    collapseWhitespace: isProd,
    removeComments: isProd,
  },

  imagemin: {
    interlaced: true,
    optimizationLevel: 3, // from 0 to 7
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    verbose: true, // выводить размер до и после работы плагина
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

  webpack: {
    mode: isProd ? 'production' : 'development', // минифицированный код
    output: {
      filename: 'app.min.js',
    },
  },
};
