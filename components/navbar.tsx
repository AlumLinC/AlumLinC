"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "components/theme-toggle";
import styles from "./navbar.module.css";

/** NavBar
 * NavBar component for the site.
 */
export default function NavBar(): ReactElement {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <Link
                href="/"
                className={styles.navItem}
                id={styles.navMain}
                data-force-select={pathname === "/"}
            >
                AlumLinC
            </Link>
            <Link
                href="/about"
                className={styles.navItem}
                data-force-select={pathname === "/about"}
            >
                About
            </Link>
            <Link
                href="/schools"
                className={styles.navItem}
                data-force-select={pathname === "/schools"}
            >
                Schools
            </Link>
            <Link
                href="/sign-up"
                className={styles.navItem}
                id={styles.navAuthStart}
                data-force-select={pathname === "/sign-up"}
            >
                Sign Up
            </Link>
            <Link
                href="/log-in"
                className={styles.navItem}
                data-force-select={pathname === "/log-in"}
            >
                Log In
            </Link>
            <ThemeToggleButton />
        </nav>
    );
}
