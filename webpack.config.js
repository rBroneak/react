var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/client.js",
    output: {
        path: path.resolve(__dirname + "/src/"),
        filename: "client.min.js"
    },
    devtool: debug ? "inline-sourcemap" : false,
    devServer: {
        historyApiFallback: true
    },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin({
        filename: "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
        disable: false,
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: "c", filename: "c.js" })
  ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader' , 'css-loader', 'sass-loader']
            }
        ]
    }
};
