const webpack = require('webpack'); 

module.exports = function override(config, env) {
    const fallback = config.resolve.fallback || {}; 

    Object.assign(fallback, { 	
        "os": require.resolve("os-browserify/browser"),
        "buffer": require.resolve("buffer/"),
        "url": require.resolve("url/"),
        "assert": require.resolve("assert/"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http"), 
        "https": require.resolve("https-browserify"), 
        "net": false,
        "tls": false,
        "fs": false


    }) 

    config.resolve.fallback = fallback; 
    config.plugins = (config.plugins || []).concat([ 
        new webpack.ProvidePlugin({ 
            process: 'process/browser', 
        Buffer: ['buffer', 'Buffer'] 
        }) 
    ]) 

    return config;
}