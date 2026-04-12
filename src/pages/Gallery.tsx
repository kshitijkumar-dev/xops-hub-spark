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
      </
