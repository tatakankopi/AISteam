export interface ForumPost {
  id: number;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorType: 'student' | 'teacher';
  createdAt: string;
  updatedAt: string;
  accessLevel: 'public' | 'student' | 'teacher';
  attachments?: string[];
  relatedTo?: {
    type: 'ebook' | 'prompt' | 'course';
    id: number;
    title: string;
  };
}

export interface ForumComment {
  id: number;
  postId: number;
  content: string;
  authorId: string;
  authorName: string;
  authorType: 'student' | 'teacher';
  createdAt: string;
}