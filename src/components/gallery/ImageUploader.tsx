import React from "react";
import { Upload, ImagePlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ImageUploader: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Upload Image</CardTitle>
        <p className="text-sm text-muted-foreground">
          Add new images to the college gallery
        </p>
      </CardHeader>

      <CardContent>
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Image Title</Label>
            <Input placeholder="Enter image title" />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="campus">Campus</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="activities">Activities</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Choose Image</Label>
            <div className="rounded-2xl border border-dashed p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ImagePlus className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                Drag and drop image here, or click to browse
              </p>
              <Input type="file" className="cursor-pointer" />
            </div>
          </div>

          <div className="flex items-end">
            <Button className="w-full sm:w-auto">
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ImageUploader;