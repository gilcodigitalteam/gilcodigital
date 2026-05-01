import { CheckCircle2, Heart, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  { icon: Heart, title: "Client First", desc: "Your success is our north star. We treat every project like it's our own." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace new tech and creative thinking to keep you ahead of the curve." },
  { icon: Users, title: "Partnership", desc: "We're not a vendor — we're an extension of your team." },
];

const About = () => (
  <>
    <section className="container py-20 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl mb-6">About <span className="gradient-text">GilcoDigital</span></h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        We're a team of strategists, designers, and developers obsessed with helping ambitious brands win online.
      </p>
    </section>

    <section className="container py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl mb-6">Our <span className="gradient-text">Story</span></h2>
        <p className="text-muted-foreground mb-4">
          Founded with a simple belief: great digital work should drive real business outcomes — not just look pretty.
        </p>
        <p className="text-muted-foreground mb-6">
          Over the past decade, we've helped hundreds of companies — from scrappy startups to established enterprises — build digital experiences customers love and competitors envy.
        </p>
        <ul className="space-y-3">
          {["Senior, full-stack team", "Transparent process & pricing", "Results-focused mindset", "Long-term partnerships"].map((p) => (
            <li key={p} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" />{p}</li>
          ))}
        </ul>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-square gradient-bg opacity-90 p-12 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <div className="text-7xl font-bold mb-2">10+</div>
              <div className="text-xl">Years building brands</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    <section className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl mb-4">Our <span className="gradient-text">Values</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((v) => (
          <Card key={v.title}>
            <CardContent className="p-8">
              <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <v.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </>
);

export default About;
