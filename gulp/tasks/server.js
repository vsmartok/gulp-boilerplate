export const server = (done) => {
    app.plugins.browserSync.init({
        server: {
            baseDir: app.path.build,
        },
        notify: false,
        port: 3000,
    });
}