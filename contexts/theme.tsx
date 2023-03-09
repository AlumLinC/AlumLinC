"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "@types/react";

const ThemeContext = createContext();

export type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    // Preload the theme
    let themeQuery = "light";
    if (localStorage) {
        themeQuery = localStorage.getItem("theme") ?? "light";
    }

    // Setup state
    const [theme, setTheme] = useState(themeQuery);

    // Function for updating the theme respeccting the localstorage
    const updateTheme = (v) => {
        if (localStorage) {
            localStorage.setItem("theme", v);
        }
        setTheme(v);
    };

    useEffect(() => {
        if (localStorage) {
            const t = localStorage.getItem("theme");

            console.log(t);

            if (!t) {
                localStorage.setItem("theme", "light");
            }

            updateTheme(t);
        }
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
            <div id="page_root" data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
