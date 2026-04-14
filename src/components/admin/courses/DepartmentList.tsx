import React from "react";
import { Building2, GraduationCap, Users, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const departments = [
  {
    id: 1,
    name: "Department of Science",
    hod: "Dr. Ramesh",
    courses: 8,
    students: 420,
  },
  {
    id: 2,
    name: "Department of Commerce",
    hod: "Dr. Priya",
    courses: 5,
    students: 360,
  },
  {
    id: 3,
    name: "Department of Arts",
    hod: "Dr. Suresh",
    courses: 6,
    students: 290,
  },
];

const DepartmentList: React.FC = () => {
  return (
    <Card className="rounded-2xl border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Department List</CardTitle>
        <p className="text-sm text-muted-foreground">
          Overview of departments and their course strength
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="rounded-2xl border bg-background p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <h3 className="text-lg font-semibold">{dept.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                HOD: {dept.hod}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-muted/40 p-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    Courses
                  </div>
                  <p className="mt-1 text-lg font-bold">{dept.courses}</p>
                </div>

                <div className="rounded-xl bg-muted/40 p-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Students
                  </div>
                  <p className="mt-1 text-lg font-bold">{dept.students}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentList;