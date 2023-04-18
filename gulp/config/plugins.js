import ifPlugin from "gulp-if";
import replace from "gulp-replace";
import browserSync from "browser-sync";

export const plugins = {
    if: ifPlugin,
    replace,
    browserSync,
}