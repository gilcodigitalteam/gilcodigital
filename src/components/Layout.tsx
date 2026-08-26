import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeToggle } from "./ThemeToggle";

export const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <ThemeToggle />
    <Navbar />
    <main className="flex-1"><Outlet /></main>
    <Footer />
  </div>
);
