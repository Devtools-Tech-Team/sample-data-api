const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  readOnly: true,
});
const serverless = require("serverless-http");

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Use default router
server.use("./netlify/functions/api", router);
// server.listen(3000, () => {
//   console.log("JSON Server is running");
// });

module.exports.handler = serverless(server);
