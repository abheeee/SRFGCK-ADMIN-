import React, { useMemo, useState } from "react";
import { Images, FolderPlus, Upload, Eye } from "lucide-react";

import CategoryManager from "@/components/admin/gallery/CategoryManager";
import ImageUploader from "@/components/admin/gallery/ImageUploader";
import GalleryGrid from "@/components/admin/gallery/GalleryGrid";
import ImageModal from "@/components/admin/gallery/ImageModal";

import { Card, CardContent } from "@/components/ui/card";

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  categoryId: string;
  imageUrl: string;
  description: string;
}

const initialCategories: GalleryCategory[] = [
  { id: "1", name: "Classrooms", description: "Smart classrooms and lecture halls" },
  { id: "2", name: "Hostel", description: "Boys and girls hostel facilities" },
  { id: "3", name: "Labs", description: "Computer, physics, chemistry, and biology labs" },
];

const initialImages: GalleryImage[] = [
  {
    id: "1",
    title: "Smart Classrooms",
    categoryId: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    description: "Modern smart classroom with digital learning support.",
  },
  {
    id: "2",
    title: "Boys Hostel",
    categoryId: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    description: "Comfortable hostel facility for boys.",
  },
  {
    id: "3",
    title: "Computer Lab",
    categoryId: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    description: "Computer lab with modern systems.",
  },
];

const GalleryPage: React.FC = () => {
  const [categories, setCategories] =
    useState<GalleryCategory[]>(initialCategories);
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const stats = useMemo(() => {
    return {
      categories: categories.length,
      images: images.length,
      hostel: images.filter((img) => img.categoryId === "2").length,
      labs: images.filter((img) => img.categoryId === "3").length,
    };
  }, [categories, images]);

  const addCategory = (category: GalleryCategory) => {
    setCategories((prev) => [...prev, category]);
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
    setImages((prev) => prev.filter((img) => img.categoryId !== id));
  };

  const addImage = (image: GalleryImage) => {
    setImages((prev) => [...prev, image]);
  };

  const deleteImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Gallery Management
        </h1>
        <p className="text-sm text-slate-500">
          Add gallery categories like Classrooms, Hostel, Labs and upload images
          under each category.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Categories"
          value={stats.categories}
          icon={<FolderPlus className="h-5 w-5 text-orange-600" />}
        />
        <StatsCard
          title="Total Images"
          value={stats.images}
          icon={<Images className="h-5 w-5 text-orange-600" />}
        />
        <StatsCard
          title="Hostel Images"
          value={stats.hostel}
          icon={<Eye className="h-5 w-5 text-green-600" />}
        />
        <StatsCard
          title="Lab Images"
          value={stats.labs}
          icon={<Upload className="h-5 w-5 text-blue-600" />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-1">
          <CategoryManager
            categories={categories}
            onAddCategory={addCategory}
            onDeleteCategory={deleteCategory}
          />

          <ImageUploader categories={categories} onAddImage={addImage} />
        </div>

        <div className="xl:col-span-2">
          <GalleryGrid
            categories={categories}
            images={images}
            onViewImage={setSelectedImage}
            onDeleteImage={deleteImage}
          />
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          categoryName={
            categories.find((cat) => cat.id === selectedImage.categoryId)
              ?.name || "Unknown"
          }
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

const StatsCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{value}</h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryPage;