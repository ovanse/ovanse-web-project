export const copy = () => {
  return app.gulp
    .src(app.path.src.files, { base: app.path.srcForlder })
    .pipe(app.gulp.dest(app.path.build.files));
};
