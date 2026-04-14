import React from "react";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewsForm: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Add News</CardTitle>
        <p className="text-sm text-muted-foreground">
          Create or update news announcement
        </p>
      </CardHeader>

      <CardContent>
        <form className="grid grid-cols-1 gap-5">
          <div className="space-y-2">
            <Label>News Title</Label>
            <Input placeholder="Enter news title" />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Enter full news content"
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-fit">
            <Save className="mr-2 h-4 w-4" />
            Save News
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsForm;