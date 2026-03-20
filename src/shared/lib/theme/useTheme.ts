import { useEffect, useState } from "react";
import { themes } from "../../const";
import type { DropdownOption } from "../../types";


export const getInitialTheme = (): DropdownOption => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    try {
      return JSON.parse(storedTheme);
    } catch (error) {
      return themes[0];
    }
  }
  return themes[0];
};

export const initTheme = () => {
  const theme = getInitialTheme();
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.setAttribute("data-theme", theme.value || "default");
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<DropdownOption | null>(getInitialTheme);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.setAttribute("data-theme", theme?.value || "default");
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);

  return { theme, setTheme };
}
