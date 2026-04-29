import React, { useState } from "react";
import { Upload } from "lucide-react";
import type { GalleryCategory, GalleryImage } from "@/pages/GalleryPage";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  categories: GalleryCategory[];
  onAddImage: (image: GalleryImage) => void;
}

const ImageUploader: React.FC<Props> = ({ categories, onAddImage }) => {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !categoryId || !imageUrl.trim()) return;

    onAddImage({
      id: Date.now().toString(),
      title,
      categoryId,
      imageUrl,
      description,
    });

    setTitle("");
    setCategoryId("");
    setImageUrl("");
    setDescription("");
  };

  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
            <Upload className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">Add Gallery Image</h2>
            <p className="text-sm text-slate-500">
              Upload image under selected category
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Image title"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />

          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Paste image URL"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Image description"
            rows={3}
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />

          <Button
            onClick={handleAdd}
            className="w-full bg-orange-600 hover:bg-orange-700"
          >
            Add Image
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUploader;