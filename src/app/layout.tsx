import Header from "./components/Header/Header";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen bg-gray-100">
        <Header />
        <main className="flex flex-row justify-between w-full">{children}</main>
      </body>
    </html>
  );
}
