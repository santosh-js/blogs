// dependencies

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../src/components/i18n-setup/i18n";
// import "dist/Typist.css";

// Mount entry point app to rool div element
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
