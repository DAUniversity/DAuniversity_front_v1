import ReactDOM from "react-dom/client";
import App from "./App";
import WebFont from "webfontloader";
WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

const root = ReactDOM.createRoot(document.getElementById("rootDau"));
root.render(
  <div>
    <App />
  </div>
);
