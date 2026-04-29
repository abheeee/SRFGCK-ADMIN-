import React, { useState } from "react";
import { Eye, Trash2, Search } from "lucide-react";

import type { GalleryCategory, GalleryImage } from "@/pages/GalleryPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  categories: GalleryCategory[];
  images: GalleryImage[];
  onViewImage: (image: GalleryImage) => void;
  onDeleteImage: (id: string) => void;
}

const GalleryGrid: React.FC<Props> = ({
  categories,
  images,
  onViewImage,
  onDeleteImage,
}) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredImages = images.filter((img) => {
    const categoryMatch =
      activeCategory === "all" || img.categoryId === activeCategory;

    const searchMatch =
      img.title.toLowerCase().includes(search.toLowerCase()) ||
      img.description.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-0">
        <div className="border-b border-slate-200 p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Gallery Images
              </h2>
              <p className="text-sm text-slate-500">
                Manage all uploaded images category-wise.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search image..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                activeCategory === "all"
                  ? "bg-orange-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-orange-50"
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  activeCategory === cat.id
                    ? "bg-orange-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-orange-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 2xl:grid-cols-3">
          {filteredImages.map((img) => {
            const categoryName =
              categories.find((cat) => cat.id === img.categoryId)?.name ||
              "Unknown";

            return (
              <div
                key={img.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="h-48 w-full object-cover"
                />

                <div className="space-y-3 p-4">
                  <div>
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                      {categoryName}
                    </span>
                    <h3 className="mt-2 font-bold text-slate-900">
                      {img.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                      {img.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => onViewImage(img)}
                      className="gap-2 bg-orange-600 hover:bg-orange-700"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onDeleteImage(img.id)}
                      className="gap-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredImages.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-300 p-10 text-center">
              <h3 className="font-bold text-slate-900">No Images Found</h3>
              <p className="text-sm text-slate-500">
                Add images or change the selected category.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryGrid;