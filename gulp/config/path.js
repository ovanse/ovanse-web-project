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
    font: `${buildFolder}/fonts/`,
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
    js: `${srcForlder}/js/app.js`,
    img: `${srcForlder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcForlder}/img/**/*.svg`,
    font: `${srcForlder}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
  },
  watch: {
    files: [`${srcForlder}/files/**/*.*`, `${srcForlder}/downloads/**/*.*`],
    html: `${srcForlder}/html/**/*.html`,
    pug: `${srcForlder}/pug/**/*.pug`,
    scss: `${srcForlder}/scss/**/*.scss`,
    js: `${srcForlder}/js/**/*.js`,
    img: `${srcForlder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    svg: `${srcForlder}/img/**/*.svg`,
    font: `${srcForlder}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcForlder: srcForlder,
  ftp: ``,
};
