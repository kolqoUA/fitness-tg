import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router.tsx";
import { initTheme } from "@/shared/lib";

const root = document.getElementById("root")!;

initTheme();

const tg = (window as any).Telegram?.WebApp;

if (tg) {
  tg.ready();
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
