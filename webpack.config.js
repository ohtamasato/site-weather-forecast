const debug   = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path    = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/app.tsx",
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }]
        }]
    },
    output: {
        path: __dirname + "/src/www/",
        filename: "js/app.min.js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: "./src/www/js/tsconfig.json" })]
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};