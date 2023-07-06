import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Pages/ContextApi/Context.jsx";
// import { CartProvider } from "./Element.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <CartProvider> */}
        <App />
      {/* </CartProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);
