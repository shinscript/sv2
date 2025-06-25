export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl">Script Vision</h1>
          </header>
          <main className="flex-grow p-4">{children}</main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            © 2023 Script Vision
          </footer>
        </div>
      </body>
    </html>
  );
}
