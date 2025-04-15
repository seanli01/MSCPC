import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <hr className="mb-6 lg:mb-8 border-gray-200 sm:mx-auto" />
      <Footer />
    </body>
    </html>
  );
}
