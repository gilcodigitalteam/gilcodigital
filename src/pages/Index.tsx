import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Target, TrendingUp, Code2, Search, Megaphone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hero from "@/assets/hero.jpg";

const services = [
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven campaigns that convert visitors into loyal customers." },
  { icon: Code2, title: "Web Development", desc: "Lightning-fast, responsive websites built with modern tech stacks." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher and get found by customers actively searching for you." },
  { icon: Target, title: "Brand Strategy", desc: "Craft a brand identity that stands out and resonates deeply." },
  { icon: TrendingUp, title: "Growth Analytics", desc: "Turn raw data into clear, actionable growth opportunities." },
  { icon: Rocket, title: "Social Media", desc: "Build engaged communities that fuel real business outcomes." },
];

const stats = [
  { num: "200+", label: "Happy Clients" },
  { num: "500+", label: "Projects Delivered" },
  { num: "10+", label: "Years Experience" },
  { num: "98%", label: "Client Retention" },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" width={1536} height={1024} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container relative py-32 md:py-44 text-center">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
          ✨ Premium Digital Agency
        </span>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          We Build <span className="gradient-text">Digital Experiences</span> That Drive Growth
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          From strategy to execution, we partner with ambitious brands to design, build, and scale digital products that win.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="gradient-bg border-0 glow"><Link to="/contact">Start a Project <ArrowRight className="ml-1" /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/services">Our Services</Link></Button>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{s.num}</div>
          <div className="text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </section>

    {/* Services */}
    <section className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl mb-4">What We <span className="gradient-text">Do</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive digital services to help your business grow online.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="group hover:border-primary/50 transition-all hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl mb-4">Client <span className="gradient-text">Love</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Sarah K.", role: "CEO, Bloom Co.", quote: "Our traffic tripled in 4 months. The team genuinely cares about results." },
          { name: "Marcus T.", role: "Founder, Vexa", quote: "Best agency we've worked with. Transparent, fast, and incredibly creative." },
          { name: "Lina M.", role: "CMO, Northwind", quote: "They turned our vision into a brand that customers truly love." },
        ].map((t) => (
          <Card key={t.name}>
            <CardContent className="p-8">
              <div className="flex gap-1 mb-4 text-primary">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}</div>
              <p className="mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container py-20">
      <Card className="overflow-hidden border-primary/30">
        <CardContent className="p-12 md:p-20 text-center relative">
          <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-accent)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl mb-4">Ready to grow your business?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's talk about how we can take your brand to the next level.</p>
            <Button asChild size="lg" className="gradient-bg border-0"><Link to="/contact">Get in Touch <ArrowRight className="ml-1" /></Link></Button>
          </div>
        </CardContent>
      </Card>
    </section>
  </>
);

export default Index;
