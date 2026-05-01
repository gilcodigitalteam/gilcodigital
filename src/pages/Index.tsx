import { Link } from "react-router-dom";
import { ArrowRight, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import blob from "@/assets/home-blob.png";
import studio from "@/assets/home-studio.jpg";
import stickers from "@/assets/project-stickers.jpg";
import grafico from "@/assets/project-grafico.jpg";
import app from "@/assets/project-app.jpg";
import card from "@/assets/project-card.jpg";

const logos = ["tinder", "amazon", "slack", "airbnb", "intel", "Walmart", "LinkedIn", "Google", "lyft", "Spotify"];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <img src={blob} alt="" className="absolute right-0 top-10 w-[55%] max-w-[700px] -z-10" width={1024} height={1024} />
      <div className="container">
        <p className="text-sm text-muted-foreground mb-4">We are proud of the works we've done.</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-20">We're design<br />creators.</h1>
        <div className="flex justify-between items-end flex-wrap gap-6">
          <Link to="/about" className="text-sm font-semibold border-b border-foreground pb-1">More Projects</Link>
          <div className="text-right max-w-xs">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Featured projects</p>
            <p className="font-bold">Unique Bowls From<br />the South Pacific.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="bg-secondary/40 py-20">
      <div className="container grid md:grid-cols-3 gap-12">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">We're a team of creatives who are excited about unique ideas.</h2>
        </div>
        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Strategy</p>
            <h3 className="text-xl font-bold mb-2">Brand Strategy & Art Direction</h3>
            <p className="text-sm text-muted-foreground">Creating a higher meaning and how people move through a unique and impactful campaign.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Production</p>
            <h3 className="text-xl font-bold mb-2">Typography & Video Production</h3>
            <p className="text-sm text-muted-foreground">Spaces of each sketch in the digital world can help you with overall simple & authentic.</p>
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Design</p>
            <h3 className="text-xl font-bold mb-2">UX/UI Design & Website Design</h3>
            <p className="text-sm text-muted-foreground">Got a regulatory creator an enterprise such as one and the get the dot attributing and pushed.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Campaigns</p>
            <h3 className="text-xl font-bold mb-2">Promo Campaigns & Content Creation</h3>
            <p className="text-sm text-muted-foreground">Making an entire campaign to achieve a real impact.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Project tiles */}
    <section className="grid md:grid-cols-2">
      {[
        { img: stickers, title: "Stickers Pack", tag: "Identity, Mockup", dark: false },
        { img: grafico, title: "Diseño Gráfico", tag: "Branding, Identity", dark: true },
      ].map((p) => (
        <div key={p.title} className="relative group overflow-hidden aspect-[4/3]">
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">
              <Play className="h-5 w-5 text-foreground ml-0.5" />
            </button>
          </div>
          <div className={`absolute bottom-0 left-0 p-6 ${p.dark ? "text-white" : "text-white"}`}>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-xs opacity-80">{p.tag}</p>
          </div>
        </div>
      ))}
      {[
        { img: app, title: "Lifestyle App", tag: "Apps, Campaign" },
        { img: card, title: "Credit Bank", tag: "Creative, Identity" },
      ].map((p) => (
        <div key={p.title} className="relative group overflow-hidden aspect-[4/3]">
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">
              <Play className="h-5 w-5 text-foreground ml-0.5" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-xs opacity-80">{p.tag}</p>
          </div>
        </div>
      ))}
    </section>

    {/* Capabilities with image and panel */}
    <section className="container py-24">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Capabilities</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">Creative studio with art and technologies.</h2>
      <div className="grid md:grid-cols-2 gap-0 relative">
        <img src={studio} alt="Studio" className="w-full aspect-[4/5] object-cover" loading="lazy" width={1024} height={1280} />
        <div className="bg-background md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-3/5 p-8 md:p-12 shadow-xl">
          <button className="h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center mb-6">
            <Play className="h-4 w-4 ml-0.5" />
          </button>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">We work in the fields of UI/UX design and art direction.</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold mb-1"><span className="text-primary">— </span>Website & Mobile App Design</p>
              <p className="text-sm text-muted-foreground">Using your own your design approaches and best tools, we will see to it that your new website will be visible, accessible, and trends rightly.</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold"><Plus className="h-4 w-4 text-primary" />Motion Graphics & Animation</button>
            <button className="flex items-center gap-2 text-sm font-semibold"><Plus className="h-4 w-4 text-primary" />User Experience</button>
          </div>
        </div>
      </div>
    </section>

    {/* Logos */}
    <section className="bg-secondary/50 py-16">
      <div className="container grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
        {logos.map((logo) => (
          <span key={logo} className="text-xl md:text-2xl font-semibold text-muted-foreground/70 lowercase">{logo}</span>
        ))}
      </div>
    </section>

    {/* Steps */}
    <section className="container py-24">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-8">Step 1.</p>
      <div className="grid md:grid-cols-3 gap-12 border-t border-border pt-10">
        {[
          { title: "User experience and brand strategy preparing.", desc: "Professional details with graphic problems, taken at my entire soul. Disenador Gráfico y Digital y ademas como aprenderlas." },
          { title: "Researching for the brand.", desc: "Confident, taken at my entire soul, which I love above. Disenador Gráfico y ademas." },
          { title: "Documents developing & launch.", desc: "Confident, taken at my entire soul with heavy efforts. Disenador Gráfico y ademas." },
        ].map((s, i) => (
          <div key={i}>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Awards */}
    <section className="container pb-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Awards & Honors</p>
          <h2 className="text-3xl md:text-4xl font-bold">The awards won<br />by our project.</h2>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-8">Our clients describe us as a product team which <strong className="text-foreground">creates amazing UI/UX experiences</strong>, by crafting top-notch user experience.</p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "W.", caption: "5x Developer Award" },
              { name: "W.", caption: "3x Site of the Day" },
              { name: "FWA", caption: "5x Mobile of the Day" },
              { name: "WEBBY", caption: "2x Best Website" },
              { name: "WEBBY", caption: "3x Best Website" },
            ].map((a, i) => (
              <div key={i}>
                <div className="text-2xl font-black mb-2">{a.name}</div>
                <p className="text-xs text-muted-foreground">{a.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Dark CTA */}
    <section className="bg-dark text-white py-20">
      <div className="container">
        <p className="text-xs uppercase tracking-wider text-white/60 mb-4">Collaboration</p>
        <div className="flex flex-wrap gap-6 justify-between items-start">
          <h2 className="text-4xl md:text-5xl font-bold">Got a project?<br />Let's talk.</h2>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 h-12">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6">
          <p className="text-sm text-white/70 max-w-2xl">We're <strong className="text-white">a team of creatives</strong> who are excited about unique ideas and help fin-tech companies to <strong className="text-white">create amazing identity</strong> by crafting top-notch UI/UX.</p>
        </div>
      </div>
    </section>
  </>
);

export default Index;
