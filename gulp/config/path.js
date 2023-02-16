// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build';
const srcFolder = './src';

export const path = {
  build: {
    files: `${buildFolder}/`,
    html: `${buildFolder}/`,
    pug: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    jsLib: `${buildFolder}/js/libs/`,
    img: `${buildFolder}/img/`,
    font: `${buildFolder}/fonts/`,
  },
  src: {
    files: [
      `${srcFolder}/files/**/*.*`,
      `${srcFolder}/download/**/*.*`,
      `${srcFolder}/file.txt`,
    ],
    html: `${srcFolder}/html/*.html`,
    pug: `${srcFolder}/pug/*.pug`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    jsLib: `${srcFolder}/js/libs/*.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    font: `${srcFolder}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
  },
  watch: {
    files: [
      `${srcFolder}/files/**/*.*`,
      `${srcFolder}/downloads/**/*.*`,
      `${srcFolder}/*.*`,
    ],
    html: `${srcFolder}/html/**/*.html`,
    pug: `${srcFolder}/pug/**/*.pug`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    font: `${srcFolder}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  ftp: ``,
};
