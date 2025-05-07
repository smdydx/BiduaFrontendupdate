
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Providers } from "./lib/providers";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <Providers>
    <App />
  </Providers>
);
