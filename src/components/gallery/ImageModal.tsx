import React from "react";
import { X, Image as ImageIcon, CalendarDays, FolderOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ImageModal: React.FC = () => {
  return (
    <Card className="overflow-hidden rounded-2xl border shadow-sm">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[300px] lg:h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between p-6">
            <div>
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-primary">
                    Image Preview
                  </p>
                  <h2 className="text-2xl font-bold">College Campus View</h2>
                </div>

                <Button size="icon" variant="ghost">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <p className="mb-6 text-sm text-muted-foreground">
                This is a preview layout for selected gallery images. You can
                later connect this with dialog or modal functionality.
              </p>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <ImageIcon className="h-4 w-4" />
                  <span>Title: College Campus View</span>
                </div>
                <div className="flex items-center gap-3">
                  <FolderOpen className="h-4 w-4" />
                  <span>Category: Campus</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4" />
                  <span>Uploaded On: 16 Apr 2026</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button variant="outline">Close</Button>
              <Button>Done</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageModal;