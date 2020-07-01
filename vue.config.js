module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/material': {
                target: 'http://192.168.123.121:8880',
                changeOrigin: true,
                pathRewrite: {
                    '^/material': ''
                }
            },
            '/uc': {
                target: 'http://192.168.123.121:8088',
                changeOrigin: true,
                pathRewrite: {
                    '^/uc': ''
                }
            }
        }
    }
}