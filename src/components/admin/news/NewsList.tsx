import React from "react";
import { Pencil, Trash2, CalendarDays, Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const newsData = [
  {
    id: 1,
    title: "Admissions Open 2026",
    date: "2026-04-01",
    status: "Published",
  },
  {
    id: 2,
    title: "Annual Fest Announcement",
    date: "2026-03-20",
    status: "Draft",
  },
];

const NewsList: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">News List</CardTitle>
        <p className="text-sm text-muted-foreground">
          Manage all college news and announcements
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="flex flex-col gap-3 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Newspaper className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">{news.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {news.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    news.status === "Published" ? "default" : "secondary"
                  }
                >
                  {news.status}
                </Badge>

                <Button size="icon" variant="outline">
                  <Pencil className="h-4 w-4" />
                </Button>

                <Button size="icon" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsList;