// src/store/types.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  enrolledStudents: Student[];
  totalEnrolledStudents: number;
}

export interface CompletedCourse {
  courseId: string;
  grade: number;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledCourses: Course[];
  completedCourses: CompletedCourse[];
  totalCompletedCourses: number;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  teachingCourses: Course[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
}

export interface LoadingError {
  loading: boolean;
  error: string | null;
}
