import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-secondary mt-0">
    <div className="container py-16 grid gap-10 md:grid-cols-4">
      <div>
        <h4 className="font-bold mb-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-primary">Fb.</a>
          {" / "}
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-primary">Ig.</a>
        </h4>
        <p className="font-bold mt-6">Inquiries</p>
        <p className="text-sm text-muted-foreground mt-3">Got a question for us?</p>
        <a href="mailto:info@gillcodigital.com" className="font-bold text-sm mt-1 block hover:text-primary">info@gillcodigital.com</a>
      </div>
      <div>
        <h4 className="font-bold mb-3">Vancouver</h4>
        <a href="tel:+15817814936" className="text-sm text-muted-foreground hover:text-primary">+1 (581) 781-4936</a>
      </div>
      <div>
        <h4 className="font-bold mb-3">Work inquiries</h4>
        <p className="text-sm text-muted-foreground">Interested in working with us?</p>
        <a href="mailto:info@gillcodigital.com" className="font-bold text-sm mt-1 block hover:text-primary">info@gillcodigital.com</a>
        <p className="font-bold mt-6">Career</p>
        <p className="text-sm text-muted-foreground mt-3">Looking for a job opportunity?</p>
        <Link to="/contact" className="font-bold text-sm mt-1 block hover:text-primary">See open positions</Link>
      </div>
      <div>
        <h4 className="font-bold mb-4">Sign up for the newsletter</h4>
        <form className="flex gap-2">
          <Input placeholder="Email address" className="bg-background" />
          <Button type="submit" className="bg-dark text-white hover:bg-dark/90">Sign Up</Button>
        </form>
        <label className="flex gap-2 mt-4 text-xs text-muted-foreground">
          <input type="checkbox" className="mt-0.5" />
          <span>I'm okay with getting emails and having that activity tracked to improve my experience.</span>
        </label>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-wrap gap-3 justify-between text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()}, GilcoDigital. All rights reserved.</span>
        <span className="flex gap-2">
          <Link to="/contact" className="hover:text-primary">Privacy &amp; Cookie Policy</Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-primary">Terms of Service</Link>
        </span>
      </div>
    </div>
  </footer>
);

