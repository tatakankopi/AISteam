export interface Course {
  id: number;
  title: string;
  description: string;
  students: number;
  modules: number;
  duration: string;
  image: string;
  materials?: Material[];
  quizzes?: Quiz[];
}

export interface Material {
  id: number;
  courseId: number;
  title: string;
  type: 'document' | 'video' | 'presentation';
  content: string;
  order: number;
  duration?: string;
}

export interface Quiz {
  id: number;
  courseId: number;
  title: string;
  type: string;
  questions: number;
  duration: string;
  dueDate: string;
}