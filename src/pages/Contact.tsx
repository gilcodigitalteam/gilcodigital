import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", budget: "Less than 5K", details: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Quote request sent! We'll get back to you within 24 hours.");
      setForm({ name: "", company: "", email: "", phone: "", subject: "", budget: "Less than 5K", details: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Hero with image */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={contactHero} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={896} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container h-full flex flex-col justify-center pt-16 text-white">
          <button className="mb-8 self-start"><ArrowLeft className="h-5 w-5" /></button>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6 max-w-md">Leave us a little info, and we'll be in touch.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 h-11 self-start">
            <a href="mailto:info@gillcodigital.com?subject=Project%20inquiry">Send Us an Email</a>
          </Button>
        </div>
      </section>

      <section className="container py-16">
        <p className="text-sm text-muted-foreground mb-12"><Link to="/" className="hover:text-primary">Home</Link> &gt; Contact Us</p>

        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-border">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <p className="font-bold">Work Inquiries</p>
            <p className="font-bold mt-1">+1 (581) 781-4936</p>
            <p className="text-sm text-muted-foreground mt-6">Assistance hours:<br />Monday – Friday<br />9 am to 6 pm PST</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Address</h3>
            <p className="text-muted-foreground">Vancouver, Canada</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Social media</h3>
            <p className="text-muted-foreground">Instagram</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="pt-12 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-bold mb-2 block">Name (required)</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="h-12 bg-secondary border-0" />
            </div>
            <div>
              <label className="text-sm font-bold mb-2 block">Company (required)</label>
              <Input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company name" className="h-12 bg-secondary border-0" />
            </div>
            <div>
              <label className="text-sm font-bold mb-2 block">Email (required)</label>
              <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your working email" className="h-12 bg-secondary border-0" />
            </div>
            <div>
              <label className="text-sm font-bold mb-2 block">Phone (optional)</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your actual phone number" className="h-12 bg-secondary border-0" />
            </div>
            <div>
              <label className="text-sm font-bold mb-2 block">Subject (optional)</label>
              <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Choose a subject" className="h-12 bg-secondary border-0" />
            </div>
            <div>
              <label className="text-sm font-bold mb-2 block">Choose a Budget (USD)</label>
              <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="h-12 w-full rounded-md bg-secondary border-0 px-3 text-sm">
                <option>Less than 5K</option>
                <option>5K - 10K</option>
                <option>10K - 25K</option>
                <option>25K - 50K</option>
                <option>50K+</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Project details</label>
            <Textarea rows={6} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Brief project details" className="bg-secondary border-0" />
          </div>
          <Button type="submit" disabled={loading} className="bg-dark text-white hover:bg-dark/90 rounded-md px-6 h-12">
            {loading ? "Sending..." : "Get a Quote"}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
