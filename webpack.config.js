const webpack = require('webpack');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", 'css-loader']
            },
        ]
    },
    plugins: [
       new webpack.ProvidePlugin({
          "React": "react",
       }),
    ],
};
