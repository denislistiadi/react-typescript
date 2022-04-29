import React from "react";
import { theme } from "./theme";

interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = React.createContext(theme)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}