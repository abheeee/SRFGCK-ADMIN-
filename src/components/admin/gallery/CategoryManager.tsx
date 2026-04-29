import React, { useState } from "react";
import { FolderPlus, Trash2 } from "lucide-react";
import type { GalleryCategory } from "@/pages/GalleryPage";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  categories: GalleryCategory[];
  onAddCategory: (category: GalleryCategory) => void;
  onDeleteCategory: (id: string) => void;
}

const CategoryManager: React.FC<Props> = ({
  categories,
  onAddCategory,
  onDeleteCategory,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;

    onAddCategory({
      id: Date.now().toString(),
      name,
      description,
    });

    setName("");
    setDescription("");
  };

  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
            <FolderPlus className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">Add Category</h2>
            <p className="text-sm text-slate-500">
              Example: Hostel, Labs, Classrooms
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category name"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Category description"
            rows={3}
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />

          <Button
            onClick={handleAdd}
            className="w-full bg-orange-600 hover:bg-orange-700"
          >
            Add Category
          </Button>
        </div>

        <div className="mt-5 space-y-3">
          <h3 className="text-sm font-bold text-slate-700">
            Existing Categories
          </h3>

          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <div>
                <p className="font-semibold text-slate-900">{cat.name}</p>
                <p className="text-xs text-slate-500">{cat.description}</p>
              </div>

              <button
                onClick={() => onDeleteCategory(cat.id)}
                className="rounded-lg p-2 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryManager;