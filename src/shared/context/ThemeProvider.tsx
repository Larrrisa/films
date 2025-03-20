import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useContext, createContext, useState } from "react";
import { createAppTheme } from "../../styles/theme";
import { CssBaseline } from "@mui/material";
import { useEffect } from "react";
// Define the type for the theme context
interface ThemeContextType {
  theme: ReturnType<typeof createAppTheme>;
  toggleTheme: () => void;
  mode: "light" | "dark";
}

// Create context with proper typing
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [theme, setTheme] = useState(createAppTheme(mode));

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    setTheme(createAppTheme(newMode));
  };

  useEffect(() => {
    console.log("Current mode:", mode);
    console.log("Theme palette mode:", theme.palette.mode);
  }, [mode, theme]);

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
