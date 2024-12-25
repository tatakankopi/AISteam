export interface Report {
  id: string;
  studentId: string;
  courseId: string;
  semester: string;
  academicYear: string;
  curriculum: string;
  grades: Grade[];
  feedback?: string;
  status: 'draft' | 'pending' | 'validated' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface Grade {
  subjectId: string;
  score: number;
  grade: string;
  feedback?: string;
}

export interface ReportTemplate {
  id: string;
  name: string;
  curriculum: string;
  subjects: string[];
  gradingScale: GradingScale[];
}

export interface GradingScale {
  grade: string;
  minScore: number;
  maxScore: number;
  description: string;
}