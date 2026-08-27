import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const summary = [
  { stars: 5, count: 938 },
  { stars: 4, count: 58 },
  { stars: 3, count: 6 },
  { stars: 2, count: 6 },
  { stars: 1, count: 7 },
];

const total = 1015;

const reviews = [
  {
    client: "Pawfect Supplies",
    date: "Jul 14, 2026",
    quality: 5,
    communication: 5,
    text: "This was the best interaction I've had so far that didn't leave me feeling like a scam was around the corner. I would definitely recommend this service.",
    service: "Store settings configuration",
  },
  {
    client: "Fat Panda Webstore",
    date: "Mar 12, 2026",
    quality: 5,
    communication: 5,
    text: "The team was fantastic to work with. They quickly identified the issue with our theme and fixed the age verification popup integration much faster than expected.",
    service: "Theme troubleshooting",
  },
  {
    client: "Northline Coffee Co.",
    date: "Feb 02, 2026",
    quality: 5,
    communication: 5,
    text: "Clear communication from start to finish. Our new product pages load faster and conversions are noticeably up since launch.",
    service: "Website UX/UI design",
  },
  {
    client: "Studio Verde",
    date: "Dec 18, 2025",
    quality: 5,
    communication: 4,
    text: "Great design sense and very patient with our feedback rounds. The final brand kit exceeded what we asked for.",
    service: "Brand strategy & art direction",
  },
  {
    client: "Harbour Fitness",
    date: "Nov 05, 2025",
    quality: 5,
    communication: 5,
    text: "They handled the full migration without any downtime and documented everything for our internal team afterwards.",
    service: "Store migration",
  },
  {
    client: "Lumen Home",
    date: "Sep 21, 2025",
    quality: 4,
    communication: 5,
    text: "Responsive, professional, and happy to explain the technical parts in plain language. We'll be back for phase two.",
    service: "Content creation",
  },
];

const Stars = ({ value }: { value: number }) => (
  <span className="inline-flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${i < value ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
      />
    ))}
  </span>
);

const Reviews = () => (
  <>
    <section className="pt-32 pb-10">
      <div className="container max-w-3xl">
        <div className="text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link> &gt;{" "}
          <Link to="/about" className="hover:text-primary">About Us</Link> &gt; Reviews
        </div>

        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-2">
          Rating <Star className="h-6 w-6 fill-amber-400 text-amber-400" /> 4.9
          <span className="text-muted-foreground font-normal">({total})</span>
        </h1>

        <h2 className="text-xl font-semibold mt-8 mb-2">Overall rating summary</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Ratings based on <span className="underline">quality of work</span> and{" "}
          <span className="underline">communication</span>
        </p>

        <div className="space-y-2.5">
          {summary.map((s) => (
            <div key={s.stars} className="flex items-center gap-4">
              <Stars value={s.stars} />
              <div className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-emerald-300"
                  style={{ width: `${(s.count / total) * 100}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-14 text-right">({s.count})</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-14 pt-10 border-t border-border mb-2">Reviews</h2>

        <div className="divide-y divide-border">
          {reviews.map((r) => (
            <article key={r.client} className="py-8">
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
                <h3 className="text-lg font-semibold">{r.client}</h3>
                <span className="text-sm text-muted-foreground">{r.date}</span>
              </div>
              <div className="grid grid-cols-[8rem_auto] gap-y-2 items-center mb-4 text-sm">
                <span className="text-muted-foreground">Quality of work</span>
                <span className="flex items-center gap-2"><Stars value={r.quality} /> {r.quality}</span>
                <span className="text-muted-foreground">Communication</span>
                <span className="flex items-center gap-2"><Stars value={r.communication} /> {r.communication}</span>
              </div>
              <p className="text-base text-muted-foreground mb-3">{r.text}</p>
              <p className="text-sm text-muted-foreground">Service reviewed: {r.service}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-dark text-white py-20">
      <div className="container flex flex-wrap gap-6 justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to join them?</h2>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 h-12">
          <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Reviews;
