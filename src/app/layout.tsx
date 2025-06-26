import "./global.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}
