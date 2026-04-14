import React from "react";
import { Pencil, Trash2, BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    id: 1,
    name: "Undergraduate",
    code: "UG",
    totalCourses: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Postgraduate",
    code: "PG",
    totalCourses: 6,
    status: "Active",
  },
  {
    id: 3,
    name: "Diploma",
    code: "DIP",
    totalCourses: 4,
    status: "Inactive",
  },
];

const CategoryList: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-xl font-bold">Category List</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage course categories for the college
          </p>
        </div>

        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search category..." className="pl-10" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b bg-muted/40 text-left">
                <th className="px-4 py-3 font-semibold">Category Name</th>
                <th className="px-4 py-3 font-semibold">Code</th>
                <th className="px-4 py-3 font-semibold">Courses</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item) => (
                <tr key={item.id} className="border-b hover:bg-muted/20">
                  <td className="px-4 py-4 font-medium">{item.name}</td>
                  <td className="px-4 py-4">{item.code}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      {item.totalCourses}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge
                      variant={item.status === "Active" ? "default" : "secondary"}
                    >
                      {item.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Pencil className="mr-1 h-4 w-4" />
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="mr-1 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryList;