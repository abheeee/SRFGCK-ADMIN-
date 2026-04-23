export interface CourseFormData {
  courseKey: string;
  title: string;
  duration: string;
  eligibility: string;
  intake: string;
  overview: string;
  subjects: string[];
  campus: string;
  lab: string;
}

export interface CourseItem extends CourseFormData {
  id: string;
}