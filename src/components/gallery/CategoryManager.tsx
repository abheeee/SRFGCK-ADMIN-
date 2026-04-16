import React, { useState } from "react";
import { FolderKanban, Pencil, Trash2, Plus, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialCategories = [
  { id: 1, name: "Campus", count: 18 },
  { id: 2, name: "Events", count: 26 },
  { id: 3, name: "Infrastructure", count: 12 },
  { id: 4, name: "Activities", count: 9 },
];

const CategoryManager: React.FC = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState(initialCategories);

  const handleAddCategory = () => {
    if (!categoryName.trim()) return;

    const newCategory = {
      id: Date.now(),
      name: categoryName,
      count: 0,
    };

    setCategories((prev) => [newCategory, ...prev]);
    setCategoryName("");
  };

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Add Category</CardTitle>
          <p className="text-sm text-muted-foreground">
            Create gallery categories for uploaded images
          </p>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="h-11"
            />
            <Button onClick={handleAddCategory} className="h-11 sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Gallery Categories</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage all available gallery categories
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border bg-background p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <FolderKanban className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{category.name}</h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <ImageIcon className="h-4 w-4" />
                  <span>{category.count} images</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryManager;