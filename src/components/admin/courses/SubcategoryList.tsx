import React from "react";
import { Layers3, Pencil, Trash2, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const subcategories = [
  {
    id: 1,
    name: "B.Sc",
    category: "Undergraduate",
    duration: "3 Years",
    department: "Science",
    status: "Active",
  },
  {
    id: 2,
    name: "B.Com",
    category: "Undergraduate",
    duration: "3 Years",
    department: "Commerce",
    status: "Active",
  },
  {
    id: 3,
    name: "M.Sc",
    category: "Postgraduate",
    duration: "2 Years",
    department: "Science",
    status: "Active",
  },
];

const SubcategoryList: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-xl font-bold">Subcategory List</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage subcategories such as B.Sc, B.Com, M.Sc
          </p>
        </div>

        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search subcategory..." className="pl-10" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-sm">
            <thead>
              <tr className="border-b bg-muted/40 text-left">
                <th className="px-4 py-3 font-semibold">Subcategory</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Department</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subcategories.map((item) => (
                <tr key={item.id} className="border-b hover:bg-muted/20">
                  <td className="px-4 py-4 font-medium">{item.name}</td>
                  <td className="px-4 py-4">{item.category}</td>
                  <td className="px-4 py-4">{item.department}</td>
                  <td className="px-4 py-4">{item.duration}</td>
                  <td className="px-4 py-4">
                    <Badge>{item.status}</Badge>
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

export default SubcategoryList;