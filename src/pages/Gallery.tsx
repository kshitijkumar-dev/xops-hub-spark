import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ChevronDown, ChevronUp } from "lucide-react";

// ─────────────────────────────────────────────────────────────
//  HOW TO ADD A NEW EVENT:
//  1. Add an object to the `events` array below
//  2. For photos, add Drive file IDs to the `photos` array
//     Get FILE_ID from: https://drive.google.com/file/d/FILE_ID/view
//     URL format: https://drive.google.com/uc?export=view&id=FILE_ID
// ─────────────────────────────────────────────────────────────

type Category = "Workshops" | "Hackathons" | "Technical Events" | "Projects" | "Fun Activities";

type GalleryEvent = {
  id: string;
  title: string;
  category: Category;
  description: string;
  photos: { id: string; url: string; caption?: string }[];
};

const events: GalleryEvent[] = [
  {
    id: "chaos-or-release",
    title: "Chaos Or Release?",
    category: "Technical Events",
    description: "A DevOps decision-making challenge where teams navigated real-world deployment scenarios.",
    photos: [],
  },

  {
    id: "statistics-probability-workshop",
    title: "Statistics and Probability in Real World: Turning Uncertanity into Opportunity",
    category: "Workshops",
    description: "Enriching the knowledge of First-Year Students through JU Transformation.",
    photos: [],
  },

  // ── ADD MORE EVENTS BELOW THIS LINE ──
];

// ─────────────────────────────────────────────────────────────

const FILTERS = ["All", "Workshops", "Hackathons", "Technical Events", "Projects", "Fun Activities"] as const;
type Filter = (typeof FILTERS)[number];

const EventCard = ({ event }: { event: GalleryEvent }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="gradient-border rounded-2xl overflow-hidden card-hover animate-fade-in-up">
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left p-6 flex items-start justify-between gap-4 group"
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2 block">
            {event.category}
          </span>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
          <p className="text-xs text-muted-foreground/60 mt-3">
            {event.photos.length > 0
              ? `${event.photos.length} photo${event.photos.length > 1 ? "s" : ""}`
              : "Photos coming soon"}
          </p>
        </div>
        <div className="mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6">
          {event.photos.length === 0 ? (
            <div className="rounded-xl border border-border/40 bg-card/50 py-10 text-center text-muted-foreground">
              <p className="text-3xl mb-2">📸</p>
              <p className="text-sm">Photos will be added soon</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {event.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative rounded-xl overflow-hidden bg-card aspect-square group/photo"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption || event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/photo:scale-105"
                    loading="lazy"
                  />
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 opacity-0 group-hover/photo:opacity-100 transition-opacity">
                      <p className="text-xs text-white truncate">{photo.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.category === activeFilter);

  return (
    <Layout>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Moments captured from our journey
            </p>
            <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full" />
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
                  ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-purple-500/20"
                      : "bg-transparent border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-5xl mb-4">📸</p>
              <p className="text-lg font-medium">No events yet in this category</p>
              <p className="text-sm mt-1">Check back after the next event!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
