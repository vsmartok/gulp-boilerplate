export const html = () => {
    return app.gulp.src(app.path.html.src)
        .pipe(app.gulp.dest(app.path.html.dest));
}