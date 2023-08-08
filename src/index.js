import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import CSS here
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/sass/custom.scss";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
