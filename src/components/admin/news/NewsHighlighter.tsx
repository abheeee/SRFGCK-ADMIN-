import React from "react";
import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlightedNews = {
  title: "Admissions Open 2026",
  description:
    "Applications are now open for all UG and PG programs. Apply before the deadline.",
};

const NewsHighlighter: React.FC = () => {
  return (
    <Card className="rounded-2xl border bg-gradient-to-r from-primary/10 to-blue-500/10 shadow-sm">
      <CardContent className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Sparkles className="h-5 w-5" />
          Highlighted News
        </div>

        <h2 className="text-lg font-bold">{highlightedNews.title}</h2>
        <p className="text-sm text-muted-foreground">
          {highlightedNews.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsHighlighter;