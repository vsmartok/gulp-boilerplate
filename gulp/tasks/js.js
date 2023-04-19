import webpack from "webpack-stream";
import { webpackConfig } from "../../webpack.config.js";

export const js = () => {
    return app.gulp.src(app.path.js.src, {sourcemaps: app.isDev})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'JS',
                    message: 'Error <%= error.message %>',
                })
            )
        )
        .pipe(
            webpack({
                config: webpackConfig(app.isDev)
            })
        )
        .pipe(
            app.plugins.if(
                !app.isDev,
                app.plugins.rename({extname: '.min.js'})
            )
        )
        .pipe(app.gulp.dest(app.path.js.dest))
        .pipe(app.plugins.browserSync.stream());
}