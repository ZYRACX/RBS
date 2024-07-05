"use client"
import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import theme   from "@/utils/theme/theme"
import styles from "./page.module.css";
import { SessionProvider } from "next-auth/react";

// MUI imports

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "RBS",
  description: "It is a tycon game."
}


const drawerWidth = 240;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <SessionProvider>
      <ThemeProvider theme={theme}>
      <body className={inter.className}>
          {children}
      </body>
      </ThemeProvider>
    </SessionProvider>
    </html> 
  );
}
