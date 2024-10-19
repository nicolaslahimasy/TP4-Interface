const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          VUE_APP_OAUTH_CLIENT_ID: JSON.stringify(process.env.VUE_APP_OAUTH_CLIENT_ID),
          VUE_APP_OAUTH_TENANT_ID: JSON.stringify(process.env.VUE_APP_OAUTH_TENANT_ID)
        }
      })
    ]
  }
};
