import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutHero from "@/assets/about-hero.jpg";
import strategy from "@/assets/about-strategy.jpg";
import capabilities from "@/assets/about-capabilities.jpg";
import team from "@/assets/about-team.jpg";

const About = () => (
  <>
    {/* Hero split */}
    <section className="pt-28 pb-12">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <button className="mb-10"><ArrowLeft className="h-5 w-5" /></button>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground mb-6">Leave us a little info, and we'll be in touch.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 h-11">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
        <img src={aboutHero} alt="Our team" className="w-full aspect-[4/3] object-cover" width={1280} height={896} />
      </div>
      <div className="container mt-10 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> &gt; About Us
      </div>
    </section>

    {/* Strategy two-col */}
    <section className="container py-12 grid md:grid-cols-2 gap-10">
      <img src={strategy} alt="Strategy" className="w-full aspect-square object-cover" loading="lazy" width={1024} height={1024} />
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Strategy &<br />Art Direction.</h3>
          <p className="text-sm text-muted-foreground">You don't want <em>just a website</em>. You want a trusted expert who <em>'gets'</em> online business and entrepreneurship, and understands that your eCommerce store is your business' online headquarters. It's important. We're a professional, experienced team who'll guide you on the sometimes rocky path of developing and managing an online store.</p>
          <div className="mt-8">
            <p className="text-sm font-bold flex items-center gap-2"><span className="text-primary">Creative Impact</span> <span className="ml-auto text-xs bg-foreground text-background px-2 py-0.5 rounded">86%</span></p>
            <div className="h-1 mt-2 bg-secondary rounded">
              <div className="h-full w-[86%] rounded" style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))" }} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Website<br />UX/UI Design.</h3>
          <p className="text-sm text-muted-foreground">Our mission is to be trusted partners with every one of our small set of clients. We work closely with them to understand their business and not just 'throw together' an Ecommerce website — we want you to strut confidently about once your store is finished.</p>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="container py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">We work in the fields of UI/UX design, interiors, consulting and art direction.</h2>
      </div>
      <img src={capabilities} alt="Team collaborating" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={896} />
    </section>

    {/* Testimonials dark */}
    <section className="bg-dark text-white py-20">
      <div className="container grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/60 mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What our clients say<br />about our studio.</h2>
          <Button className="bg-primary hover:bg-primary/90 rounded-md">More Reviews <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-white/10" />
            <span className="text-xs bg-white/10 px-3 py-1 rounded">Customer Support</span>
          </div>
          <p className="text-base mb-6">"It's totally customizable with the theme settings, its compatible with a tonne of important plugins and the support is outstanding."</p>
          <p className="font-bold">Alex Regelman</p>
          <p className="text-sm text-white/60">Co-founder, Colabrio</p>
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/20">
            <span className="text-sm">1 ——— 3</span>
            <div className="flex gap-2">
              <button className="h-8 w-8 flex items-center justify-center"><ChevronLeft className="h-4 w-4" /></button>
              <button className="h-8 w-8 flex items-center justify-center"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Awards */}
    <section className="container py-20 grid md:grid-cols-3 gap-10">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Awards & Honors</p>
        <h2 className="text-2xl md:text-3xl font-bold">The awards won<br />by our project.</h2>
      </div>
      <p className="text-sm text-muted-foreground">When our team provides design and digital marketing. Applied arts can include <strong className="text-foreground">industrial design, graphic design, fashion design</strong>, and the <strong className="text-foreground">decorative arts</strong> which traditionally includes craft objects.</p>
      <div className="grid grid-cols-2 gap-6">
        {[
          { name: "W.", caption: "3x Site of the Day" },
          { name: "W.", caption: "5x Mobile of the Day" },
          { name: "FWA", caption: "2x Best Website" },
          { name: "WEBBY", caption: "5x Mobile of the Day" },
        ].map((a, i) => (
          <div key={i}>
            <div className="text-2xl font-black mb-2">{a.name}</div>
            <p className="text-xs text-muted-foreground">{a.caption}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Team image with stat overlays */}
    <section className="relative">
      <img src={team} alt="Team" className="w-full h-[500px] object-cover" loading="lazy" width={1920} height={896} />
      <div className="absolute bottom-0 left-0 right-0 container pb-0 flex flex-wrap gap-0">
        <div className="bg-primary text-white p-8 w-64">
          <p className="text-3xl font-bold mb-1">⊞ 28+</p>
          <p className="text-sm">designers and developers</p>
        </div>
        <div className="bg-dark text-white p-8 w-64">
          <p className="text-3xl font-bold mb-1">◇ 345+</p>
          <p className="text-sm">awards for digital innovation</p>
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

export default About;
