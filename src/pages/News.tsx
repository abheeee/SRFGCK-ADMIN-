import React from "react";
import { Newspaper, Megaphone } from "lucide-react";

import NewsList from "@/components/admin/news/NewsList";
import NewsForm from "@/components/admin/news/NewsForm";
import NewsHighlighter from "@/components/admin/news/NewsHighlighter";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const News: React.FC = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">News Management</h1>
        <p className="text-sm text-muted-foreground">
          Manage college announcements and updates
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Total News</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
            <Newspaper className="h-6 w-6 text-primary" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Published</p>
              <h2 className="text-2xl font-bold">8</h2>
            </div>
            <Megaphone className="h-6 w-6 text-primary" />
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="list" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="list">News List</TabsTrigger>
          <TabsTrigger value="form">Add News</TabsTrigger>
          <TabsTrigger value="highlight">Highlight</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <NewsList />
        </TabsContent>

        <TabsContent value="form">
          <NewsForm />
        </TabsContent>

        <TabsContent value="highlight">
          <NewsHighlighter />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default News;