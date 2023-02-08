import { ConfigProvider, AdaptivityProvider } from "@vkontakte/vkui";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@vkontakte/vkui/dist/vkui.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
