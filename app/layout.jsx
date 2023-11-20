import { Rubik } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "../components";
import StoreProvider from "@/store/StoreProvider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Redux Toolkit",
  description: "Redux Toolkit Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en" data-theme="light">
        <body className={rubik.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
