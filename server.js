const config = require("./config");
const app = require("./app.js");
const port = config.get("port");
const AwsService = require("./services/aws.js");

(async () => {
  await AwsService.initialize();
  
  app.listen(port, () => {
    console.warn(`✅  Server running on port: ${port}`);
  });
})();