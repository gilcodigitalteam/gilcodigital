import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", num: "01" },
  { to: "/about", label: "About Us", num: "02" },
  { to: "/contact", label: "Contact Us", num: "03" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            GILCO<span className="text-sky-500">DIGITAL</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`
              }
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-normal">{l.num}</span>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} className="text-sm font-semibold">
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
