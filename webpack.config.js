const path = require("path");

module.exports = {
    mode: "development",
    entry: "./code/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test:  /\.(woff|woff2)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(png)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}