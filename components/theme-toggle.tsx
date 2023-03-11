"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import type { ReactElement } from "react";

import { useTheme } from "contexts/theme";
import type { ThemeContextType } from "contexts/theme";
import styles from "./theme-toggle.module.css";
import React from "react";

export default function ThemeToggleButton(): ReactElement {
    const { theme, setTheme }: ThemeContextType = useTheme();

    const toggleTheme = (): void => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            data-color={theme}
        >
            {theme === "dark" && <MdLightMode />}
            {theme === "light" && <MdDarkMode />}
        </button>
    );
}
