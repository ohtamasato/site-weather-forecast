const debug   = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path    = require('path');

const srcPath = (subdir) => {
    return path.join(__dirname, "src", "js", subdir)
}

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/script.tsx",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    output: {
        path: __dirname + "/src/www/",
        filename: "js/app.min.js"
    },
    resolve: {
        alias: {
            components: srcPath('components'),
            models: srcPath('models'),
            reducers: srcPath('reducers'),
            store: srcPath('store')
        },
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};