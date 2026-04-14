import React from "react";
import { Save, Layers3 } from "lucide-react";
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

const SubcategoryForm: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Add Subcategory</CardTitle>
        <p className="text-sm text-muted-foreground">
          Create a new course subcategory
        </p>
      </CardHeader>

      <CardContent>
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="subcategoryName">Subcategory Name</Label>
            <Input id="subcategoryName" placeholder="Enter subcategory name" />
          </div>

          <div className="space-y-2">
            <Label>Parent Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ug">Undergraduate</SelectItem>
                <SelectItem value="pg">Postgraduate</SelectItem>
                <SelectItem value="dip">Diploma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="commerce">Commerce</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input id="duration" placeholder="Example: 3 Years" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="subDescription">Description</Label>
            <Textarea
              id="subDescription"
              placeholder="Enter subcategory description"
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

          <div className="flex items-end">
            <Button className="w-full sm:w-auto">
              <Save className="mr-2 h-4 w-4" />
              Save Subcategory
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubcategoryForm;