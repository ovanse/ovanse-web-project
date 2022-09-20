const buildFolder = './dist';
const srcForlder = './src';

export const path = {
  build: {
    files: `${buildFolder}/`,
    html: `${buildFolder}/`,
    pug: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    files: [
      `${srcForlder}/files/**/*.*`,
      `${srcForlder}/download/**/*.*`,
      `${srcForlder}/file.txt`,
    ],
    html: `${srcForlder}/html/*.html`,
    pug: `${srcForlder}/pug/*.pug`,
    scss: `${srcForlder}/scss/style.scss`,
    js: `${srcForlder}/js/main.js`,
    images: `${srcForlder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcForlder}/img/**/*.svg`,
  },
  watch: {
    files: [`${srcForlder}/files/**/*.*`, `${srcForlder}/downloads/**/*.*`],
    html: `${srcForlder}/html/**/*.html`,
    pug: `${srcForlder}/pug/**/*.pug`,
    scss: `${srcForlder}/scss/**/*.scss`,
    js: `${srcForlder}/js/**/*.js`,
    images: `${srcForlder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcForlder: srcForlder,
  ftp: ``,
};
