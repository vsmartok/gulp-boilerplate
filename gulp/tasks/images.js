export const images = () => {
    return app.gulp.src(app.path.images.src)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'IMAGES',
                    message: 'Error <%= error.message %>',
                })
            )
        )
        .pipe(app.plugins.newer(app.path.images.dest))
        .pipe(app.gulp.dest(app.path.images.dest))
        .pipe(app.plugins.browserSync.stream());
}