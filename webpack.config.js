const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: path.resolve(__dirname, './loaders/addName.js')
                }
            }
        ]
    },
}