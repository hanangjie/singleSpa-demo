import * as singleSpa from "single-spa";

const name = "demo";
const app = () => System.import("@react-sp/demo");
app().then(e => {
  console.log(e)
})
const activeWhen = "/demo";
singleSpa.registerApplication({
  name,
  app,
  activeWhen,
});
singleSpa.start();