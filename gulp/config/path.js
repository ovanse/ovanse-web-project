// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build';
const srcForlder = './src';

export const path = {
  build: {
    files: `${buildFolder}/`,
    html: `${buildFolder}/`,
    pug: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
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
    js: [`${srcForlder}/js/app.js`],
    img: `${srcForlder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcForlder}/img/**/*.svg`,
  },
  watch: {
    files: [`${srcForlder}/files/**/*.*`, `${srcForlder}/downloads/**/*.*`],
    html: `${srcForlder}/html/**/*.html`,
    pug: `${srcForlder}/pug/**/*.pug`,
    scss: `${srcForlder}/scss/**/*.scss`,
    js: `${srcForlder}/js/**/*.js`,
    img: `${srcForlder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcForlder: srcForlder,
  ftp: ``,
};
