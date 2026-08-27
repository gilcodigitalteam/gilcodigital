import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const summary = [
  { stars: 5, count: 90 },
  { stars: 4, count: 7 },
  { stars: 3, count: 1 },
  { stars: 2, count: 2 },
  { stars: 1, count: 2 },
];

const total = 102;

type Review = {
  client: string;
  date: string;
  quality: number;
  communication: number;
  text: string;
  service: string;
};

const reviews: Review[] = [
  {
    client: "Pawfect Supplies",
    date: "Jul 14, 2026",
    quality: 5,
    communication: 5,
    text: "This was the best interaction that I have had so far that wasn't constantly feeling like a scam was around the corner. I would definitely recommend this service.",
    service: "Store settings configuration",
  },
  {
    client: "Fat Panda Webstore",
    date: "Mar 12, 2026",
    quality: 5,
    communication: 5,
    text: "The team was fantastic to work with. They quickly identified the issue with our theme and fixed the age verification popup integration much faster than expected. Communication was clear and prompt throughout, and they went the extra mile on an additional issue at no extra charge.",
    service: "Theme customization",
  },
  {
    client: "The Gumpii Apothecary",
    date: "Mar 2, 2026",
    quality: 5,
    communication: 5,
    text: "These guys are life savers! They did a magnificent job making our website a joy to navigate. Professional but still very personal — they are now our go-to for any further work we need done.",
    service: "Store build or redesign",
  },
  {
    client: "KMT Depot",
    date: "Jan 31, 2026",
    quality: 5,
    communication: 5,
    text: "Very happy working with Gilco Digital. They were the first store partner to actually answer the phone when I called. They listened and recommended the best store redesign for the products I was selling.",
    service: "Store build or redesign",
  },
  {
    client: "Diesel Freak",
    date: "Jan 17, 2026",
    quality: 5,
    communication: 4,
    text: "Everything went very well. They did excellent work and we couldn't be happier — the website is performing very well. Thank you Gilco.",
    service: "Store build or redesign",
  },
  {
    client: "Revol Cares",
    date: "Oct 27, 2025",
    quality: 5,
    communication: 5,
    text: "",
    service: "Store settings configuration",
  },
  {
    client: "Know Better Pet Food",
    date: "Oct 16, 2025",
    quality: 5,
    communication: 5,
    text: "Gilco Digital was excellent at incorporating a new app into our custom themed website. If we have any other issues, we'll be using them again. Great service and communication.",
    service: "Custom apps and integrations",
  },
  {
    client: "kinkskrown",
    date: "Oct 13, 2025",
    quality: 5,
    communication: 5,
    text: "Fast service with efficiency. I really recommend their services.",
    service: "Store build or redesign",
  },
  {
    client: "Fresh Fur Pets Online",
    date: "Oct 13, 2025",
    quality: 5,
    communication: 5,
    text: "Quality of work and prices are great. They are also very responsive.",
    service: "Theme customization",
  },
  {
    client: "Embody Her",
    date: "Oct 11, 2025",
    quality: 5,
    communication: 5,
    text: "Precision. Quality. Integrity. Gilco Digital turned my vision into a masterpiece, effortlessly and professionally.",
    service: "Store build or redesign",
  },
];

const PER_PAGE = 5;
const pageCount = Math.ceil(reviews.length / PER_PAGE);

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

const Reviews = () => {
  const [page, setPage] = useState(1);
  const visible = reviews.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const go = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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
            {visible.map((r) => (
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
                {r.text && <p className="text-base text-muted-foreground mb-3">{r.text}</p>}
                <p className="text-sm text-muted-foreground">Service reviewed: {r.service}</p>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav className="flex items-center gap-4 pt-8 border-t border-border" aria-label="Reviews pagination">
            <button
              onClick={() => go(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="h-11 w-11 rounded-full bg-secondary text-muted-foreground flex items-center justify-center disabled:opacity-60 transition-colors hover:bg-secondary/70"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <select
              value={page}
              onChange={(e) => go(Number(e.target.value))}
              aria-label="Page number"
              className="h-11 rounded-md border border-border bg-background px-4 text-sm"
            >
              {Array.from({ length: pageCount }).map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <span className="text-sm text-muted-foreground">/ {pageCount}</span>
            <button
              onClick={() => go(page + 1)}
              disabled={page === pageCount}
              aria-label="Next page"
              className="h-11 w-11 rounded-full bg-dark text-white flex items-center justify-center disabled:opacity-60"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </nav>
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
};

export default Reviews;
