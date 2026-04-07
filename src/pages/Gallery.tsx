import { useState } from "react";
import Layout from "@/components/layout/Layout";

// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
type Photo = {
  id: string;
  url: string;
  caption: string;
  category: "Workshops" | "Hackathons" | "Technical Events" | "Projects" | "Fun Activities";
};

const photos: Photo[] = [
  
  // },
];

const FILTERS = ["All", "Workshops", "Hackathons", "Technical Events", "Projects", "Fun Activities"] as const;
type Filter = (typeof FILTERS)[number];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All" ? photos : photos.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* ── HERO ── */}
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

      {/* ── FILTER BUTTONS ── */}
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

      {/* ── PHOTO GRID ── */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-5xl mb-4">📸</p>
              <p className="text-lg font-medium">Photos coming soon</p>
              <p className="text-sm mt-1">Check back after the next event!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((photo, index) => (
                <article
                  key={photo.id}
                  className="gradient-border p-3 card-hover animate-fade-in-up rounded-2xl"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative rounded-xl overflow-hidden bg-card">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                      <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                  {photo.caption && (
                    <p className="text-sm text-muted-foreground mt-3 px-1 truncate" title={photo.caption}>
                      {photo.caption}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
