import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { reset } from "./gulp/tasks/reset.js";

global.app = {
    isDev: !process.argv.includes('--build'),
    gulp,
    path,
    plugins,
}

const watcher = () => {
    gulp.watch(path.html.watch, html);
}

const build = gulp.series(reset, html);

const serve = gulp.series(
    build,
    gulp.parallel(server, watcher)
)


export {
    build,
    serve
}