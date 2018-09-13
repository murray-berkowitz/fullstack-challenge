//Configure webpack to bundle our React && ES6
module.exports = {
    entry: './src/index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react", "es2015"]
                    }
                }
            }
        ]
    }
}