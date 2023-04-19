import plumber from "gulp-plumber";
import notify from "gulp-notify";
import replace from "gulp-replace";
import rename from "gulp-rename";
import ifPlugin from "gulp-if";
import newer from "gulp-newer";
import browserSync from "browser-sync";

export const plugins = {
    if: ifPlugin,
    plumber,
    notify,
    replace,
    rename,
    newer,
    browserSync,
}