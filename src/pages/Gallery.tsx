import { ChangeEvent, useEffect, useState } from "react";
import { ChevronDown, ChevronUp, ImagePlus, Trash2, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
type Category =
  | "Workshops"
  | "Hackathons"
  | "Technical Events"
  | "Projects"
  | "Fun Activities";

type GalleryEvent = {
  id: string;
  title: string;
  category: Category;
  description: string;
  photos: { id: string; url: string; caption?: string }[];
};

type UploadedPhoto = {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
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
  {
    id: "statistics-probability-workshop",
    title: "Statistics and Probability in Real World: Turning Uncertainty into Opportunity",
    category: "Workshops",
    description:
      "Enriching the knowledge of First-Year Students through JU Transformation.",
    photos: [],
  },
];

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────
const MAX_PHOTOS = 24;
const MAX_FILE_SIZE_MB = 8;

const CATEGORY_ORDER: Category[] = [
  "Workshops",
  "Hackathons",
  "Technical Events",
  "Projects",
  "Fun Activities",
];

const CATEGORY_ICONS: Record<Category, string> = {
  Workshops: "🎓",
  Hackathons: "💻",
  "Technical Events": "⚙️",
  Projects: "🚀",
  "Fun Activities": "🎉",
};

// ─────────────────────────────────────────────────────────────
// LIGHTBOX COMPONENT
// ─────────────────────────────────────────────────────────────
const Lightbox = ({
  photos,
  initialIndex,
  onClose,
}: {
  photos: { id: string; url: string; caption?: string }[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(initialIndex);

  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setCurrent((i) => (i + 1) % photos.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-5 w-5" />
      </button>

      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        className="max-w-4xl max-h-[85vh] mx-auto px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[current].url}
          alt={photos[current].caption || `Photo ${current + 1}`}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl mx-auto block"
        />
        {photos[current].caption && (
          <p className="text-white/70 text-sm text-center mt-3">
            {photos[current].caption}
          </p>
        )}
        <p className="text-white/40 text-xs text-center mt-1">
          {current + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// EVENT CARD COMPONENT
// ─────────────────────────────────────────────────────────────
const EventCard = ({ event }: { event: GalleryEvent }) => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {lightboxIndex !== null && event.photos.length > 0 && (
        <Lightbox
          photos={event.photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <article className="gradient-border rounded-2xl overflow-hidden card-hover">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="w-full text-left p-6 flex items-start justify-between gap-4"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{CATEGORY_ICONS[event.category]}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                {event.category}
              </span>
            </div>

            <h3 className="text-xl font-bold leading-snug">{event.title}</h3>

            <p className="text-sm text-muted-foreground mt-1">
              {event.description}
            </p>

            <p className="text-xs text-muted-foreground/60 mt-3 flex items-center gap-1">
              <Images className="h-3 w-3" />
              {event.photos.length > 0
                ? `${event.photos.length} photo${event.photos.length > 1 ? "s" : ""}`
                : "Photos coming soon"}
            </p>
          </div>

          <div className="shrink-0 mt-1">
            {expanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </button>

        {expanded && (
          <div className="px-6 pb-6">
            {event.photos.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm border border-dashed border-border/50 rounded-xl">
                📸 Photos will be added soon
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {event.photos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative rounded-lg overflow-hidden aspect-square focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption || event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    {photo.caption && (
                      <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        {photo.caption}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </article>
    </>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN GALLERY COMPONENT
// ─────────────────────────────────────────────────────────────
const Gallery = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxData, setLightboxData] = useState<{
    photos: { id: string; url: string; caption?: string }[];
    index: number;
  } | null>(null);

  // ── Load uploaded photos from server ──
  const loadPhotos = async () => {
    try {
      const response = await fetch("/api/gallery");
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload?.message || "Failed to load gallery.");
      setUploadedPhotos(Array.isArray(payload?.photos) ? payload.photos : []);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Could not load gallery photos.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { void loadPhotos(); }, []);

  // ── Upload handler ──
  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    const selectedFiles = Array.from(event.target.files || []);
    if (!selectedFiles.length) return;

    if (uploadedPhotos.length + selectedFiles.length > MAX_PHOTOS) {
      setErrorMessage(`You can keep up to ${MAX_PHOTOS} photos in the gallery.`);
      event.target.value = "";
      return;
    }

    const oversized = selectedFiles.find((f) => f.size > MAX_FILE_SIZE_MB * 1024 * 1024);
    if (oversized) {
      setErrorMessage(`"${oversized.name}" is too large. Max size is ${MAX_FILE_SIZE_MB}MB.`);
      event.target.value = "";
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("photos", file));

    setIsUploading(true);
    try {
      const response = await fetch("/api/gallery", { method: "POST", body: formData });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload?.message || "Upload failed. Please try again.");
      const newPhotos = Array.isArray(payload?.photos) ? payload.photos : [];
      setUploadedPhotos((prev) => [...newPhotos, ...prev]);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Could not upload photos.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  // ── Delete handler ──
  const handleDeletePhoto = async (id: string) => {
    setErrorMessage("");
    try {
      const response = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload?.message || "Could not delete photo.");
      setUploadedPhotos((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Could not delete photo.");
    }
  };

  // ── Group events by category ──
  const groupedEvents = CATEGORY_ORDER.reduce<Record<Category, GalleryEvent[]>>(
    (acc, cat) => {
      acc[cat] = events.filter((e) => e.category === cat);
      return acc;
    },
    {} as Record<Category, GalleryEvent[]>
  );

  // ── Uploaded photos as lightbox-compatible format ──
  const uploadedAsLightbox = uploadedPhotos.map((p) => ({
    id: p.id,
    url: p.url,
    caption: p.name,
  }));

  return (
    <Layout>
      {/* ── Lightbox (for uploaded photos section) ── */}
      {lightboxData && (
        <Lightbox
          photos={lightboxData.photos}
          initialIndex={lightboxData.index}
          onClose={() => setLightboxData(null)}
        />
      )}

      {/* ── HERO ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Moments captured from our journey — workshops, hackathons, and everything in between.
          </p>
        </div>
      </section>

      {/* ── UPLOAD PANEL ── */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass border border-border/50 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Upload Photos</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  JPG, PNG, WEBP or GIF · Max {MAX_FILE_SIZE_MB}MB per image · {uploadedPhotos.length}/{MAX_PHOTOS} used
                </p>
              </div>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="gallery-upload"
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <ImagePlus className="h-4 w-4" />
                  {isUploading ? "Uploading…" : "Upload Photos"}
                </label>
                <input
                  id="gallery-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleUpload}
                  disabled={isUploading}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => void loadPhotos()}
                  disabled={isUploading}
                >
                  Refresh
                </Button>
              </div>
            </div>

            {errorMessage && (
              <p className="text-sm text-destructive mt-4">{errorMessage}</p>
            )}
            {isLoading && (
              <p className="text-sm text-muted-foreground mt-4">Loading gallery…</p>
            )}
          </div>
        </div>
      </section>

      {/* ── UPLOADED PHOTOS GRID ── */}
      {uploadedPhotos.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Uploaded Photos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {uploadedPhotos.map((photo, index) => (
                <article
                  key={photo.id}
                  className="gradient-border p-3 card-hover animate-fade-in-up rounded-2xl"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative rounded-lg overflow-hidden bg-card group">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxData({ photos: uploadedAsLightbox, index })
                      }
                      className="w-full focus:outline-none"
                      aria-label={`View ${photo.name}`}
                    >
                      <img
                        src={photo.url}
                        alt={photo.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDeletePhoto(photo.id)}
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/90 hover:bg-background flex items-center justify-center border border-border/60 transition-colors"
                      aria-label={`Delete ${photo.name}`}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </button>
                  </div>
                  <p
                    className="text-sm text-muted-foreground mt-2 truncate px-1"
                    title={photo.name}
                  >
                    {photo.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EVENT GALLERY (GROUPED BY CATEGORY) ── */}
      <section className="pb-24 space-y-16">
        {CATEGORY_ORDER.map((category) => {
          const categoryEvents = groupedEvents[category];
          if (!categoryEvents || categoryEvents.length === 0) return null;

          return (
            <div key={category} className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2 flex items-center gap-2">
                <span>{CATEGORY_ICONS[category]}</span>
                {category}
              </h2>
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
