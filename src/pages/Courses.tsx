import { useState } from "react";
import CourseHeader from "@/components/admin/courses/CourseHeader";
import CourseForm from "@/components/admin/courses/CourseForm";
import CourseList from "@/components/admin/courses/CourseList";
import type {
  CourseFormData,
  CourseItem,
} from "@/components/admin/courses/types";

const initialFormData: CourseFormData = {
  courseKey: "",
  title: "",
  duration: "",
  eligibility: "",
  intake: "",
  overview: "",
  subjects: [""],
  campus: "",
  lab: "",
};

const Courses = () => {
  const [formData, setFormData] = useState<CourseFormData>(initialFormData);
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (field: keyof CourseFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddSubject = () => {
    setFormData((prev) => ({
      ...prev,
      subjects: [...prev.subjects, ""],
    }));
  };

  const handleChangeSubject = (index: number, value: string) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index] = value;

    setFormData((prev) => ({
      ...prev,
      subjects: updatedSubjects,
    }));
  };

  const handleRemoveSubject = (index: number) => {
    const updatedSubjects = formData.subjects.filter((_, i) => i !== index);

    setFormData((prev) => ({
      ...prev,
      subjects: updatedSubjects.length ? updatedSubjects : [""],
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setEditingId(null);
  };

  const handleSave = () => {
    if (!formData.courseKey || !formData.title) {
      alert("Please fill Course Key and Course Title");
      return;
    }

    if (editingId) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === editingId ? { ...formData, id: editingId } : course
        )
      );
      alert("Course updated successfully");
    } else {
      const newCourse: CourseItem = {
        id: Date.now().toString(),
        ...formData,
      };

      setCourses((prev) => [newCourse, ...prev]);
      alert("Course added successfully");
    }

    setFormData(initialFormData);
    setEditingId(null);
  };

  const handleEdit = (course: CourseItem) => {
    setFormData({
      courseKey: course.courseKey,
      title: course.title,
      duration: course.duration,
      eligibility: course.eligibility,
      intake: course.intake,
      overview: course.overview,
      subjects: course.subjects.length ? course.subjects : [""],
      campus: course.campus,
      lab: course.lab,
    });

    setEditingId(course.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    setCourses((prev) => prev.filter((course) => course.id !== id));

    if (editingId === id) {
      setFormData(initialFormData);
      setEditingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/40 via-slate-50 to-white">
      <div className="w-full px-6 lg:px-8 py-6 space-y-6">
        <CourseHeader />

        <CourseForm
          formData={formData}
          isEditing={Boolean(editingId)}
          onChange={handleChange}
          onAddSubject={handleAddSubject}
          onChangeSubject={handleChangeSubject}
          onRemoveSubject={handleRemoveSubject}
          onReset={handleReset}
          onSave={handleSave}
        />

        <CourseList
          courses={courses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Courses;