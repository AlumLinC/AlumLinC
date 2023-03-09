"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme } from "contexts/theme";
import styles from "./theme-toggle.module.css";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            data-color={theme}
        >
            {theme == "dark" && <MdLightMode />}
            {theme == "light" && <MdDarkMode />}
        </button>
    );
}
