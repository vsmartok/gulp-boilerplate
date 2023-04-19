import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { html } from "./gulp/tasks/html.js";
import { sass } from "./gulp/tasks/sass.js";
import { images } from "./gulp/tasks/images.js";
import { js } from "./gulp/tasks/js.js";
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
    gulp.watch(path.sass.watch, sass);
    gulp.watch(path.images.watch, images);
    gulp.watch(path.js.watch, js);
}

const build = gulp.series(reset, html, sass, images, js);

const serve = gulp.series(
    build,
    gulp.parallel(server, watcher)
)


export {
    build,
    serve
}