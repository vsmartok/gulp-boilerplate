export const path = {
    html: {
        dest: './dist',
        src: ['./src/html/**/*.html', '!./src/html/_*/*.html'],
        watch: './src/html/**/*.html',
    },
    sass: {
        dest: './dist/assets/css',
        src: './src/sass/*.{sass,scss}',
        watch: './src/sass/**/*.{sass,scss}',
    },
    images: {
        dest: './dist/assets/images',
        src: './src/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}',
        watch: './src/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}',
    },
    fonts: {
        dest: './dist/assets/fonts',
        src:   './src/fonts/*.{eot,ttf,woff,woff2,svg}',
        watch: './src/fonts/*.{eot,ttf,woff,woff2,svg}',
    },
    js: {
        dest: './dist/assets/js',
        src:   './src/js/*.js',
        watch: './src/js/**/*.js',
    },
    clean: './dist',
    build: './dist',
}