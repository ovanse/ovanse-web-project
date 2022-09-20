const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const config = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  pug: {
    pretty: isDev,
  },

  webpack: {
    mode: isProd ? 'production' : 'development', // минифицированный код
  },

  imagemin: {
    verbose: true, // выводить размер до и после работы плагина
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },
};
