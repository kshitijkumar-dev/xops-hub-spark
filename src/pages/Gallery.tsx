import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ChevronDown, ChevronUp } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// CATEGORY TYPES (DO NOT CHANGE UNLESS ADDING NEW CATEGORY)
// ─────────────────────────────────────────────────────────────
type Category =
  | "Workshops"
  | "Hackathons"
  | "Technical Events"
  | "Projects"
  | "Fun Activities";

// ─────────────────────────────────────────────────────────────
// EVENT TYPE STRUCTURE
// ─────────────────────────────────────────────────────────────
type GalleryEvent = {
  id: string;
  title: string;
  category: Category;
  description: string;
  photos: { id: string; url: string; caption?: string }[];
};

// ─────────────────────────────────────────────────────────────
// EVENTS DATA (ADD YOUR EVENTS HERE)
// ─────────────────────────────────────────────────────────────
const events: GalleryEvent[] = [
  {
    id: "chaos-or-release",
    title: "Chaos Or Release?",
    category: "Technical Events",
    description:
      "A DevOps decision-making challenge where teams navigated real-world deployment scenarios.",
    photos: [],
  },

  // ✅ YOUR WORKSHOP ADDED
  {
    id: "statistics-probability-workshop",
    title:
      "Statistics and Probability in Real World: Turning Uncertanity into Opportunity",
    category: "Workshops",
    description:
      "Enriching the knowledge of First-Year Students through JU Transformation.",
    photos: [],
  },
];

// ─────────────────────────────────────────────────────────────
// EVENT CARD COMPONENT (NO CHANGE NEEDED HERE)
// ─────────────────────────────────────────────────────────────
const EventCard = ({ event }: { event: GalleryEvent }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="gradient-border rounded-2xl overflow-hidden card-hover">
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2 block">
            {event.category}
          </span>

          <h3 className="text-xl font-bold">{event.title}</h3>

          <p className="text-sm text-muted-foreground mt-1">
            {event.description}
          </p>

          <p className="text-xs text-muted-foreground/60 mt-3">
            {event.photos.length > 0
              ? `${event.photos.length} photo${
                  event.photos.length > 1 ? "s" : ""
                }`
              : "Photos coming soon"}
          </p>
        </div>

        <div>
          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6">
          {event.photos.length === 0 ? (
            <div className="text-center text-muted-foreground">
              Photos will be added soon
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {event.photos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.url}
                  alt={photo.caption || event.title}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
const Gallery = () => {
  // 🧠 GROUP EVENTS BY CATEGORY (IMPORTANT LOGIC)
  const groupedEvents: Record<Category, GalleryEvent[]> = {
    Workshops: [],
    Hackathons: [],
    "Technical Events": [],
    Projects: [],
    "Fun Activities": [],
  };

  // 🔁 LOOP THROUGH EVENTS AND SORT THEM INTO CATEGORIES
  events.forEach((event) => {
    groupedEvents[event.category].push(event);
  });

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-muted-foreground">
          Moments captured from our journey
        </p>
      </section>

      {/* ───────────────────────────────────────────── */}
      {/* 🔥 CATEGORY SECTIONS (THIS IS YOUR "SUBSECTION") */}
      {/* ───────────────────────────────────────────── */}

      <section className="pb-24 space-y-16">
        {Object.entries(groupedEvents).map(([category, categoryEvents]) => {
          // ❌ SKIP EMPTY CATEGORIES (IMPORTANT)
          if (categoryEvents.length === 0) return null;

          return (
            <div key={category} className="container mx-auto px-4 max-w-4xl">
              
              {/* 🧩 CATEGORY HEADING */}
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                {category}
              </h2>

              {/* 📦 EVENTS UNDER THIS CATEGORY */}
              <div className="flex flex-col gap-4">
                {categoryEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Gallery;
