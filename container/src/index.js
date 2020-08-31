import * as singleSpa from "single-spa";
const name = "app";
const app = () => import("./pages/App/index.js");
const activeWhen = "/app";
singleSpa.registerApplication({
  name,
  app,
  activeWhen,
});
singleSpa.start();