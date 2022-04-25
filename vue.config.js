const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        "/api": {
          target: "http://39.98.123.211/", //目标主机
          ws: true,//是否代理websockets
          changeOrigin: true ,  // 设置同源  默认false，是否需要改变原始主机头为目标URL
        }
    }
  }
})
