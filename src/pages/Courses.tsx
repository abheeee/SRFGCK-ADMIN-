import React from "react";
import {
  Layers3,
  BookOpen,
  GraduationCap,
  Building2,
} from "lucide-react";

import CategoryList from "@/components/admin/courses/CategoryList";
import SubcategoryList from "@/components/admin/courses/SubcategoryList";
import CategoryForm from "@/components/admin/courses/CategoryForm";
import SubcategoryForm from "@/components/admin/courses/SubcategoryForm";
import DepartmentList from "@/components/admin/courses/DepartmentList";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses: React.FC = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Course Management
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Manage categories, subcategories, and departments for the degree
            college
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Categories</p>
              <h2 className="mt-1 text-2xl font-bold">3</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Layers3 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Subcategories</p>
              <h2 className="mt-1 text-2xl font-bold">10</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Departments</p>
              <h2 className="mt-1 text-2xl font-bold">6</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total Courses</p>
              <h2 className="mt-1 text-2xl font-bold">22</h2>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 gap-2 md:grid-cols-4">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="subcategories">Subcategories</TabsTrigger>
          <TabsTrigger value="department">Departments</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-6">
          <CategoryList />
        </TabsContent>

        <TabsContent value="subcategories" className="space-y-6">
          <SubcategoryList />
        </TabsContent>

        <TabsContent value="department" className="space-y-6">
          <DepartmentList />
        </TabsContent>

        <TabsContent value="forms" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <CategoryForm />
            <SubcategoryForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Courses;