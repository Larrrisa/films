import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useContext, createContext, useState } from "react";
import { createAppTheme } from "../../styles/theme";

interface ThemeContextType {
  theme: ReturnType<typeof createAppTheme>;
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [theme, setTheme] = useState(createAppTheme(mode));

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    setTheme(createAppTheme(newMode));
  };

  const themeContextValue: ThemeContextType = {
    theme,
    toggleTheme,
    mode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
