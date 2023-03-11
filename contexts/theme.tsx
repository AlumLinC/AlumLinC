"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactElement } from "react";

export interface ThemeContextType {
    theme: string;
    setTheme: (v: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: (v: string): void => {
        throw new Error(
            `Cannot set theme (to ${v}) from a default context value`
        );
    },
});

export interface ThemeProviderProps {
    children: ReactElement[];
}

export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
    // Store the theme
    const [theme, setTheme] = useState("light");

    // Track if the component has mounted onto the DOM yet
    // Once it has, we will have access to localStorage
    const [hasMounted, setHasMounted] = useState(false);

    useEffect((): void => {
        // useEffect runs on the client and won't be SSRed
        setHasMounted(true);
        console.log("Mounted ThemeProvider");
        const lsTheme = localStorage.getItem("theme") ?? "light";
        console.log("lsTheme", lsTheme);
        setTheme(lsTheme);
    }, []);

    // Function for updating the theme respeccting the localstorage
    const updateTheme = (v: string): void => {
        if (!hasMounted) {
            console.warn("Waiting for ThemeProvider to mount");
            return;
        }
        localStorage.setItem("theme", v);
        setTheme(v);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
            <div id="page_root" data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
