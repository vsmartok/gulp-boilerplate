import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.html.src)
        .pipe(
            fileInclude({
                basepath: './src/html',
            })
        )
        .pipe(
            app.plugins.if(
                app.isDev,
                versionNumber({
                    value: '%TS%',
                    append: {
                        key: '_v',
                        cover: 0,
                        to: ['css', 'js'],
                    },
                    output: {
                        file: './gulp/version.json',
                    }
                })
            )
        )
        .pipe(
            app.plugins.if(
                !app.isDev,
                app.plugins.replace('.css', '.min.css')
            )
        )
        .pipe(
            app.plugins.if(
                !app.isDev,
                app.plugins.replace('.js', '.min.js')
            )
        )
        .pipe(app.gulp.dest(app.path.html.dest))
        .pipe(app.plugins.browserSync.stream());
}