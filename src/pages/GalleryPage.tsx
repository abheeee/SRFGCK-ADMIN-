import React from "react";
import { Images, Upload, FolderKanban, Eye } from "lucide-react";

import CategoryManager from "@/components/gallery/CategoryManager";
import ImageUploader from "@/components/gallery/ImageUploader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ImageModal from "@/components/gallery/ImageModal";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery: React.FC = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Gallery Management</h1>
        <p className="text-sm text-muted-foreground">
          Manage gallery categories, uploads, images, and previews
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Images</p>
              <h2 className="mt-1 text-2xl font-bold">65</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Images className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Uploads</p>
              <h2 className="mt-1 text-2xl font-bold">12</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Upload className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Categories</p>
              <h2 className="mt-1 text-2xl font-bold">4</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <FolderKanban className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Preview Layouts</p>
              <h2 className="mt-1 text-2xl font-bold">8</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Eye className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
          <TabsTrigger value="upload">Upload Image</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="gallery">Gallery Images</TabsTrigger>
          <TabsTrigger value="preview">Image Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <ImageUploader />
        </TabsContent>

        <TabsContent value="categories">
          <CategoryManager />
        </TabsContent>

        <TabsContent value="gallery">
          <GalleryGrid />
        </TabsContent>

        <TabsContent value="preview">
          <ImageModal />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gallery;