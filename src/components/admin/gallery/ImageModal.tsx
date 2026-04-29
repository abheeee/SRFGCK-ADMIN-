import React from "react";
import { X } from "lucide-react";
import type { GalleryImage } from "@/pages/GalleryPage";

interface Props {
  image: GalleryImage;
  categoryName: string;
  onClose: () => void;
}

const ImageModal: React.FC<Props> = ({ image, categoryName, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-200 bg-slate-50 p-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{image.title}</h2>
            <p className="text-sm text-slate-500">{categoryName}</p>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-red-50 hover:text-red-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <img
          src={image.imageUrl}
          alt={image.title}
          className="max-h-[65vh] w-full object-cover"
        />

        <div className="p-5">
          <p className="text-sm leading-6 text-slate-600">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;