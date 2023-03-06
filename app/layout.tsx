import { ReactNode } from "react";

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
            </head>
            <body>{children}</body>
        </html>
    );
}
