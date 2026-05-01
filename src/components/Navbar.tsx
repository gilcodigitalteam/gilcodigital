import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-bg" />
          <span className="text-lg font-bold">Gilco<span className="gradient-text">Digital</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Button asChild variant="default" size="sm" className="hidden md:inline-flex gradient-bg border-0">
          <Link to="/contact">Get Started</Link>
        </Button>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} className="text-sm font-medium">
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="gradient-bg border-0"><Link to="/contact" onClick={() => setOpen(false)}>Get Started</Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
};
