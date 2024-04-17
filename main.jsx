import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import "./style/homeStyle.css";
import "./style/navbar.css";
import "./style/footer.css";
import "./style/projekt.css";
import "./style/todo.css";
import "./style/weather.css";
import "./style/cv.css";
import "./style/nowledge.css";
import "./style/email.css";
import "./style/aboutme.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
