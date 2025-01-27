'use client';
import { ThemeProvider, CssBaseline } from "@mui/material";
import DefaultTheme from "@ec/themes/DefaultTheme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ThemeProvider theme={DefaultTheme}>
        <CssBaseline enableColorScheme />
          <body >
            {children}
          </body>
        </ThemeProvider>
    </html>
  );
}
