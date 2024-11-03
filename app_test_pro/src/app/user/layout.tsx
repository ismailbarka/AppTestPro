import React from "react";
import classes from './page.module.css'
import Header from '../../Components/Header/Header'

// export default layout
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <div className={classes.container}>
                <Header/>
                <div className={classes.children}>
                    {children}
                </div>
            </div>
          </body>
      </html>
    );
  }
  