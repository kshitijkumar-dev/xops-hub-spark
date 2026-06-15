import { ChangeEvent, useEffect, useState } from "react";
import { ChevronDown, ChevronUp, ImagePlus, Trash2, X, ChevronLeft, ChevronRight, Images, Filter } from "lucide-react";
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
    photos: [
      { id: "1", url: "https://drive.google.com/uc?export=view&id=1E4BwUw4s1NHQvbmU4B_gSmFow3DXUbna", caption: "" },
      { id: "2", url: "https://drive.google.com/uc?export=view&id=15yjF6OBegjHJGZjyDgMv7Pj0xJ8jtn6O", caption: "" },
      { id: "3", url: "https://drive.google.com/uc?export=view&id=1y1Y9WICtM6wETjDB8Y3ylk7CdkburNzC", caption: "" },
      { id: "4", url: "https://drive.google.com/uc?export=view&id=1LE5WwYhOiPBxrsBj0UBMnveh7PoJ5-0z", caption: "" },
      { id: "5", url: "https://drive.google.com/uc?export=view&id=1Q2dhKe_v_yMoRUoqMnzxGfbCnoMUoQNI", caption: "" },
      { id: "6", url: "https://drive.google.com/uc?export=view&id=1Cb0YXuu1ncLslvmNk5YC4bOJO1i5Ha2U", caption: "" },
      { id: "7", url: "https://drive.google.com/uc?export=view&id=1VskbkszWNK-ZeD5eNwgVfkisHixo1UnG", caption: "" },
      { id: "8", url: "https://drive.google.com/uc?export=view&id=1WMrdTv4dP7RjXgXn1dgboQ_rhmF0EmLf", caption: "" },
      { id: "9", url: "https://drive.google.com/uc?export=view&id=198F-ZFDp3-wyn0fI-li4786U3MLpqSOQ", caption: "" },
      { id: "10", url: "https://drive.google.com/uc?export=view&id=1tItE7KrdQwe0zlBERg06N5kjnfR-uKo7", caption: "" },
      { id: "11", url: "https://drive.google.com/uc?export=view&id=131IkaaCZEoIZuT6U6P3oKDKN9scoJM4T", caption: "" },
      { id: "12", url: "https://drive.google.com/uc?export=view&id=1vqBypZlhENYhA_cZXUnqOwTwDIYF9uxh", caption: "" },
      { id: "13", url: "https://drive.google.com/uc?export=view&id=12dFC4d7BJu5R0VJd7bL9aV3PKOdYTiDP", caption: "" },
      { id: "14", url: "https://drive.google.com/uc?export=view&id=1quQzP1TYYyHCH50NAqjwedrdSncgbp_T", caption: "" },
      { id: "15", url: "https://drive.google.com/uc?export=view&id=1-OvabNWT6VHkaB6lBw35yzZpNqMlz4m5", caption: "" },
    ],
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
const PHOTOS_PER_PAGE = 12;

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

const CATEGORY_COLORS: Record<Category, string> = {
  Workshops: "from-blue-500/20 to-cyan-500/20",
  Hackathons: "from-purple-500/20 to-pink-500/20",
  "Technical Events": "from-cyan-500/20 to-teal-500/20",
  Projects: "from-green-500/20 to-emerald-500/20",
  "Fun Activities": "from-yellow-500/20 to-orange-500/20",
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
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
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
          className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl mx-auto block"
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
// EVENT CARD COMPONENT (IMPROVED)
// ─────────────────────────────────────────────────────────────
const EventCard = ({ event }: { event: GalleryEvent }) => {
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleToggle = () => {
    setExpanded((prev) => {
      if (prev) setVisibleCount(PHOTOS_PER_PAGE);
      return !prev;
    });
  };

  const visiblePhotos = event.photos.slice(0, visibleCount);
  const remaining = event.photos.length - visibleCount;
  const hasMore = remaining > 0;

  return (
    <>
      {lightboxIndex !== null && event.photos.length > 0 && (
        <Lightbox
          photos={event.photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <article className={`gradient-border rounded-2xl overflow-hidden card-hover bg-gradient-to-br ${CATEGORY_COLORS[event.category]}`}>
        <button
          onClick={handleToggle}
          className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{CATEGORY_ICONS[event.category]}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                {event.category}
              </span>
            </div>

            <h3 className="text-xl font-bold leading-snug text-foreground">{event.title}</h3>

            <p className="text-sm text-muted-foreground mt-2">
              {event.description}
            </p>

            <p className="text-xs text-muted-foreground/70 mt-3 flex items-center gap-2">
              <Images className="h-3.5 w-3.5" />
              <span className="font-medium">
                {event.photos.length > 0
                  ? `${event.photos.length} photo${event.photos.length > 1 ? "s" : ""}`
                  : "Photos coming soon"}
              </span>
            </p>
          </div>

          <div className="shrink-0 mt-1 text-primary">
            {expanded ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </div>
        </button>

        {expanded && (
          <div className="px-6 pb-6 border-t border-border/30">
            {event.photos.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground text-sm border border-dashed border-border/50 rounded-xl mt-4">
                <Images className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Photos will be added soon</p>
              </div>
            ) : (
              <>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visiblePhotos.map((photo, idx) => (
                    <button
                      key={photo.id}
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative rounded-xl overflow-hidden aspect-square focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <img
                        src={photo.url}
                        alt={photo.caption || event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {photo.caption && (
                        <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {photo.caption}
                        </p>
                      )}
                    </button>
                  ))}
                </div>

                {/* Show More / Show Less */}
                {(hasMore || visibleCount > PHOTOS_PER_PAGE) && (
                  <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                    {hasMore && (
                      <button
                        onClick={() =>
                          setVisibleCount((c) => Math.min(c + PHOTOS_PER_PAGE, event.photos.length))
                        }
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary hover:bg-primary/20 transition-all duration-300"
                      >
                        <ChevronDown className="h-4 w-4" />
                        Load {Math.min(remaining, PHOTOS_PER_PAGE)} more
                      </button>
                    )}
                    {visibleCount > PHOTOS_PER_PAGE && (
                      <button
                        onClick={() => setVisibleCount(PHOTOS_PER_PAGE)}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent hover:bg-accent/20 transition-all duration-300"
                      >
                        <ChevronUp className="h-4 w-4" />
                        Show less
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </article>
    </>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN GALLERY COMPONENT (IMPROVED)
// ─────────────────────────────────────────────────────────────
const Gallery = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]);
  const [visibleUploadedCount, setVisibleUploadedCount] = useState(PHOTOS_PER_PAGE);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxData, setLightboxData] = useState<{
    photos: { id: string; url: string; caption?: string }[];
    index: number;
  } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

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

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    setSuccessMessage("");
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
      setSuccessMessage(`Successfully uploaded ${newPhotos.length} photo(s)!`);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Could not upload photos.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

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

  const groupedEvents = CATEGORY_ORDER.reduce<Record<Category, GalleryEvent[]>>(
    (acc, cat) => {
      acc[cat] = events.filter((e) => e.category === cat);
      return acc;
    },
    {} as Record<Category, GalleryEvent[]>
  );

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter((e) => e.category === selectedCategory);

  const uploadedAsLightbox = uploadedPhotos.map((p) => ({
    id: p.id,
    url: p.url,
    caption: p.name,
  }));

  return (
    <Layout>
      {lightboxData && (
        <Lightbox
          photos={lightboxData.photos}
          initialIndex={lightboxData.index}
          onClose={() => setLightboxData(null)}
        />
      )}

      {/* ── HERO SECTION ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Event <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the moments from X-Ops Club events — workshops, hackathons, technical challenges, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* ── UPLOAD PANEL ── */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="glass border border-primary/20 rounded-2xl p-8 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold">Upload Photos</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  JPG, PNG, WEBP, or GIF · Up to {MAX_FILE_SIZE_MB}MB per image
                </p>
                <p className="text-xs text-primary/60 mt-2 font-mono">
                  {uploadedPhotos.length}/{MAX_PHOTOS} photos used
                </p>
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-end">
                <label
                  htmlFor="gallery-upload"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  <ImagePlus className="h-5 w-5" />
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
                  className="border-primary/30 hover:bg-primary/10"
                >
                  Refresh
                </Button>
              </div>
            </div>

            {errorMessage && (
              <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive flex items-start gap-2">
                <span className="text-lg">⚠️</span>
                <p>{errorMessage}</p>
              </div>
            )}
            {successMessage && (
              <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/30 text-sm text-primary flex items-start gap-2 animate-fade-in">
                <span className="text-lg">✨</span>
                <p>{successMessage}</p>
              </div>
            )}
            {isLoading && (
              <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Loading gallery…
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── UPLOADED PHOTOS GRID ── */}
      {uploadedPhotos.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-8 pb-4 border-b border-border/50">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-2xl">📸</span>
                Recently Uploaded
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {uploadedPhotos.slice(0, visibleUploadedCount).map((photo, index) => (
                <article
                  key={photo.id}
                  className="gradient-border p-3 card-hover animate-fade-in-up rounded-2xl group"
                  style={{ animationDelay: `${(index % PHOTOS_PER_PAGE) * 0.05}s` }}
                >
                  <div className="relative rounded-lg overflow-hidden bg-card">
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
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDeletePhoto(photo.id)}
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-destructive/90 hover:bg-destructive flex items-center justify-center border border-destructive/60 transition-colors shadow-lg opacity-0 group-hover:opacity-100"
                      aria-label={`Delete ${photo.name}`}
                    >
                      <Trash2 className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  <p
                    className="text-xs text-muted-foreground mt-3 px-1 line-clamp-2"
                    title={photo.name}
                  >
                    {photo.name}
                  </p>
                </article>
              ))}
            </div>

            {/* Show More / Show Less */}
            {(() => {
              const remainingUploaded = uploadedPhotos.length - visibleUploadedCount;
              return (
                (remainingUploaded > 0 || visibleUploadedCount > PHOTOS_PER_PAGE) && (
                  <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
                    {remainingUploaded > 0 && (
                      <button
                        onClick={() =>
                          setVisibleUploadedCount((c) =>
                            Math.min(c + PHOTOS_PER_PAGE, uploadedPhotos.length)
                          )
                        }
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary hover:bg-primary/20 transition-all duration-300"
                      >
                        <ChevronDown className="h-4 w-4" />
                        Load {Math.min(remainingUploaded, PHOTOS_PER_PAGE)} more
                      </button>
                    )}
                    {visibleUploadedCount > PHOTOS_PER_PAGE && (
                      <button
                        onClick={() => setVisibleUploadedCount(PHOTOS_PER_PAGE)}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-semibold text-accent hover:bg-accent/20 transition-all duration-300"
                      >
                        <ChevronUp className="h-4 w-4" />
                        Show less
                      </button>
                    )}
                  </div>
                )
              );
            })()}
          </div>
        </section>
      )}

      {/* ── CATEGORY FILTER ── */}
      {events.length > 0 && (
        <section className="pb-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="h-5 w-5 text-primary" />
              <h3 className="text-sm font-semibold text-muted-foreground">FILTER BY CATEGORY</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === "All"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20"
                }`}
              >
                All Events
              </button>
              {CATEGORY_ORDER.map((cat) => {
                const count = events.filter((e) => e.category === cat).length;
                return count > 0 ? (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-secondary/50 border border-secondary/30 text-secondary-foreground hover:bg-secondary/70"
                    }`}
                  >
                    <span>{CATEGORY_ICONS[cat]}</span>
                    <span>{cat}</span>
                    <span className="text-xs opacity-70">({count})</span>
                  </button>
                ) : null;
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── EVENT GALLERY ── */}
      <section className="pb-32 space-y-20">
        {filteredEvents.length === 0 ? (
          <div className="container mx-auto px-4 text-center py-20">
            <Images className="h-16 w-16 mx-auto mb-4 opacity-30" />
            <p className="text-muted-foreground text-lg">No events in this category yet</p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="container mx-auto px-4 max-w-5xl">
              <EventCard event={event} />
            </div>
          ))
        )}
      </section>
    </Layout>
  );
};

export default Gallery;
