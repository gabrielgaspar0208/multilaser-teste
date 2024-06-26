import React from "react";
import ReactDOM from "react-dom/client";
import { SoundbarPage } from "./pages/SoundBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SoundbarPage />
  </React.StrictMode>
);
