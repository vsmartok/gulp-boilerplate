import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sassCompiler = gulpSass(dartSass);

export const sass = () => {
    return app.gulp.src(app.path.sass.src, {sourcemaps: app.isDev})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'SASS',
                    message: 'Error <%= error.message %>',
                })
            )
        )
        .pipe(sassCompiler({outputStyle: 'expanded'}, true))
        .pipe(
            app.plugins.if(
                !app.isDev,
                groupCssMediaQueries()
            )
        )
        .pipe(
            autoprefixer({
                cascade: false
            })
        )
        .pipe(
            app.plugins.if(
                !app.isDev,
                cleanCss({compatibility: 'ie8'})
            )
        )
        .pipe(
            app.plugins.if(
                !app.isDev,
                app.plugins.rename({extname: '.min.css'})
            )
        )
        .pipe(app.gulp.dest(app.path.sass.dest))
        .pipe(app.plugins.browserSync.stream());
}