const path=require('path');
module.exports={
    entry:{
        App: './app/assets/scripts/App.js',
        Vendor: './app/assets/scripts/Vendor.js'
    },
    output:{
        path: path.resolve(__dirname,"./app/temp/scripts"),
        filename: "[name].js"
    },
    module:{
        rules: [
            {
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                          ]
                    }
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}