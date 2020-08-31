import * as singleSpa from "single-spa";
// const name = "app";
// const app = () => import("./pages/App/index.js");
// const activeWhen = "/app";
// singleSpa.registerApplication({
//   name,
//   app,
//   activeWhen,
// });
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