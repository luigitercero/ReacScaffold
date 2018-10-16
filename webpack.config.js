module.exports = {
    entry: {
        app: './src/index.jsx',
        css: './src/js/app.js',

    },
    output: {
        path: __dirname + "/public/js",
        filename: '[name]Bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}