"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "@types/react";

const ThemeContext = createContext();

export type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div id="page_root" data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
