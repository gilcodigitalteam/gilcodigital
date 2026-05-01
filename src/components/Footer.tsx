import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => (
  <footer className="bg-secondary mt-0">
    <div className="container py-16 grid gap-10 md:grid-cols-4">
      <div>
        <h4 className="font-bold mb-3">Fb. / Ig.</h4>
        <p className="font-bold mt-6">Inquiries</p>
        <p className="text-sm text-muted-foreground mt-3">Got a question for us?</p>
        <p className="font-bold text-sm mt-1">Info@gilcodigital.com</p>
      </div>
      <div>
        <h4 className="font-bold mb-3">Vancouver</h4>
      </div>
      <div>
        <h4 className="font-bold mb-3">Work inquiries</h4>
        <p className="text-sm text-muted-foreground">Interested in working with us?</p>
        <p className="font-bold text-sm mt-1">info@gilcodigital.com</p>
        <p className="font-bold mt-6">Career</p>
        <p className="text-sm text-muted-foreground mt-3">Looking for a job opportunity?</p>
        <p className="font-bold text-sm mt-1">See open positions</p>
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
        <span>Privacy & Cookie Policy | Terms of Service</span>
      </div>
    </div>
  </footer>
);
