import { Footer } from "./Footer";
import "./globals.css";
import { NavBar } from "./NavBar";

export const metadata = {
  title: "Orrator-AI",
  description: "Powerup your speaking skills and ace thst upcoming interview with out AI powered speaking coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
      //defult dark theme
        className="bg-white text-black min-h-screen"
      >
        <NavBar />
        {children}
        <Footer />
      </body> 
    </html>
  );
}
