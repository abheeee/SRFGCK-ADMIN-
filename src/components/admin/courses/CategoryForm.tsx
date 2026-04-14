import React from "react";
import { Save, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CategoryForm: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Add Category</CardTitle>
        <p className="text-sm text-muted-foreground">
          Create a new course category
        </p>
      </CardHeader>

      <CardContent>
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="categoryName">Category Name</Label>
            <Input id="categoryName" placeholder="Enter category name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="categoryCode">Category Code</Label>
            <Input id="categoryCode" placeholder="Enter category code" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter category description"
              className="min-h-[110px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end gap-3">
            <Button className="w-full sm:w-auto">
              <Save className="mr-2 h-4 w-4" />
              Save Category
            </Button>
            <Button type="button" variant="outline" className="w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CategoryForm;