import type { ReactElement } from "react";
import NavBar from "components/navbar";
import { ThemeProvider } from "contexts/theme";

import "styles/reset.css";
import "styles/global.css";

export interface RootLayoutProps {
    children: ReactElement;
}

/**
 * Root of the page
 */
export default function RootLayout({
    children,
}: RootLayoutProps): ReactElement {
    return (
        <html lang="en">
            <head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
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
