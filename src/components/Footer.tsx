import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30 mt-24">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-bg" />
          <span className="text-lg font-bold">Gilco<span className="gradient-text">Digital</span></span>
        </div>
        <p className="text-sm text-muted-foreground">Helping brands grow through powerful digital marketing, web development, and creative strategy.</p>
        <div className="flex gap-3">
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/services" className="hover:text-primary">Services</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Digital Marketing</li>
          <li>Web Development</li>
          <li>SEO Optimization</li>
          <li>Brand Strategy</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2"><Mail className="h-4 w-4 text-primary" /> hello@gilcodigital.com</li>
          <li className="flex gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 123-4567</li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary" /> Global · Remote-first</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} GilcoDigital. All rights reserved.
    </div>
  </footer>
);
