import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <section className="container py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl mb-6">Get in <span className="gradient-text">Touch</span></h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear from you. Reach out and we'll respond within 24 hours.
        </p>
      </section>

      <section className="container pb-20 grid lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          {[
            { icon: Mail, title: "Email", val: "hello@gilcodigital.com" },
            { icon: Phone, title: "Phone", val: "+1 (555) 123-4567" },
            { icon: MapPin, title: "Location", val: "Global · Remote-first" },
          ].map((c) => (
            <Card key={c.title}>
              <CardContent className="p-6 flex gap-4 items-center">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{c.title}</div>
                  <div className="font-semibold">{c.val}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="lg:col-span-2">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project..." />
              </div>
              <Button type="submit" disabled={loading} size="lg" className="gradient-bg border-0 w-full md:w-auto">
                {loading ? "Sending..." : <>Send Message <Send className="ml-1 h-4 w-4" /></>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Contact;
