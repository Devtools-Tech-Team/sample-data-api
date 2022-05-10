const jsonServer = require("json-server");
const server = jsonServer.create();
const ecommerceRouter = jsonServer.router("ecommerce.json");
const middlewares = jsonServer.defaults({
  readOnly: true,
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Use default router
server.use("/ecommerce", ecommerceRouter);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
