const serve = require('serve')

const server = serve(__dirname, {
  port: 3000,
  ignore: ['node_modules']
})
