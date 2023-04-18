export const path = {
    html: {
        dest: './dist',
        src: ['./src/html/**/*.html', '!./src/html/_*/*.html'],
        watch: './src/html/**/*.html',
    },
    clean: './dist',
    build: './dist',
}