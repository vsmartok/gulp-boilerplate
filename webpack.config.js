import * as nodePath from "path";
import webpack from "webpack";

const path = {
    src: nodePath.resolve('src'),
    dest: nodePath.resolve('dist'),
}

export const webpackConfig = (isDev) => ({
    mode: isDev ? 'development': 'production',
    entry: {
        main: `${path.src}/js/main.js`,
    },
    output: {
        path: `${path.dest}/assets/js`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: 'defaults'}]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
})