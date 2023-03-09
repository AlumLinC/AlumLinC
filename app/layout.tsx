import type { ReactNode } from "react";
import NavBar from "components/navbar";
import { ThemeProvider } from "contexts/theme";

import "styles/reset.css";
import "styles/global.css";

export type RootLayoutProps = {
    children: ReactNode;
};

/**
 * Root of the page
 */
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>AlumLinC</title>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nova+Round&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <ThemeProvider>
                    <NavBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
