import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ChevronDown, ChevronUp, X } from "lucide-react";

// CATEGORY TYPES
type Category =
  | "Workshops"
  | "Hackathons"
  | "Technical Events"
  | "Projects"
  | "Fun Activities";

// EVENT TYPE
type GalleryEvent = {
  id: string;
  title: string;
  category: Category;
  description: string;
  photos: { id: string; url: string; caption?: string }[];
};

// EVENTS DATA
const events: GalleryEvent[] = [
  {
    id: "chaos-or-release",
    title: "Chaos Or Release?",
    category: "Technical Events",
    description:
      "A DevOps decision-making challenge where teams navigated real-world deployment scenarios.",
    photos: [
      {
        id: "1",
        url: "https://drive.google.com/uc?export=view&id=1E4BwUw4s1NHQvbmU4B_gSmFow3DXUbna",
      },
    ],
  },
  {
    id: "statistics-probability-workshop",
    title:
      "Statistics and Probability in Real World: Turning Uncertainty into Opportunity",
    category: "Workshops",
    description:
      "Enriching the knowledge of First-Year Students through JU Transformation.",
    photos: [],
  },
];

// 🔍 IMAGE MODAL
const ImageModal = ({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button className="absolute top-4 right-4 text-white">
        <X size={28} />
      </button>
      <img
        src={src}
        alt="preview"
        className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
      />
    </div>
  );
};

// EVENT CARD
const EventCard = ({ event }: { event: GalleryEvent }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
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

          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
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
                    loading="lazy"
                    onClick={() => setSelectedImage(photo.url)}
                    alt={photo.caption || event.title}
                    className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </article>

      {/* 🔍 MODAL */}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

// MAIN COMPONENT
const Gallery = () => {
  const groupedEvents: Record<Category, GalleryEvent[]> = {
    Workshops: [],
    Hackathons: [],
    "Technical Events": [],
    Projects: [],
    "Fun Activities": [],
  };

  events.forEach((event) => {
    groupedEvents[event.category].push(event);
  });

  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-muted-foreground">
          Moments captured from our journey
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="pb-24 space-y-16">
        {Object.entries(groupedEvents).map(([category, categoryEvents]) => {
          if (categoryEvents.length === 0) return null;

          return (
            <div key={category} className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">
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
