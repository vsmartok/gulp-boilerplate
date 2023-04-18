import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { html } from "./gulp/tasks/html.js";

global.app = {
    isDev: !process.argv.includes('--build'),
    gulp,
    path,
    plugins,
}

const build = gulp.series(html);


export {
    build
}