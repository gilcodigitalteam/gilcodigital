import { Link } from "react-router-dom";
import { Megaphone, Code2, Search, Target, TrendingUp, Rocket, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Megaphone, title: "Digital Marketing", desc: "Multi-channel campaigns engineered to drive awareness, leads, and revenue.", features: ["Paid ads (Meta, Google)", "Email marketing", "Conversion optimization"] },
  { icon: Code2, title: "Web Development", desc: "Beautiful, fast, scalable websites and web apps built with modern frameworks.", features: ["Custom React/Next.js builds", "E-commerce platforms", "Headless CMS"] },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google with technical SEO, content strategy, and link building.", features: ["Technical audits", "Keyword research", "Content strategy"] },
  { icon: Target, title: "Brand Strategy", desc: "Craft a memorable brand identity that connects with your ideal customers.", features: ["Logo & visual identity", "Brand guidelines", "Messaging frameworks"] },
  { icon: TrendingUp, title: "Growth Analytics", desc: "Turn data into decisions with custom dashboards and growth insights.", features: ["GA4 setup", "Conversion tracking", "Monthly reporting"] },
  { icon: Rocket, title: "Social Media", desc: "Engage your audience with content that builds community and drives action.", features: ["Content planning", "Community management", "Influencer partnerships"] },
];

const Services = () => (
  <>
    <section className="container py-20 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl mb-6">Our <span className="gradient-text">Services</span></h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        End-to-end digital solutions designed to help your business grow faster, smarter, and stronger.
      </p>
    </section>

    <section className="container py-12 grid md:grid-cols-2 gap-6">
      {services.map((s) => (
        <Card key={s.title} className="hover:border-primary/50 transition-all">
          <CardContent className="p-8">
            <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl mb-3">{s.title}</h3>
            <p className="text-muted-foreground mb-4">{s.desc}</p>
            <ul className="space-y-2">
              {s.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5" />{f}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>

    <section className="container py-20">
      <Card className="border-primary/30">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Not sure what you need?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Book a free 30-minute strategy call and we'll help you map out the right approach.</p>
          <Button asChild size="lg" className="gradient-bg border-0"><Link to="/contact">Book a Free Call <ArrowRight className="ml-1" /></Link></Button>
        </CardContent>
      </Card>
    </section>
  </>
);

export default Services;
