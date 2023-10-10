const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express()
app.use('/api/v1', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));
app.listen(3002, () => {
    console.log("app listening in http://localhost:3002")
});