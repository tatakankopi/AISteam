import { 
  BookOpen, 
  FileText, 
  Book, 
  TestTube, 
  FileBarChart, 
  Link2, 
  Library, 
  MessageSquare, 
  Bell, 
  Users,
  Home
} from 'lucide-react';
import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Daftar Kursus', path: '/courses' },
  { icon: FileText, label: 'Kelola Materi', path: '/materials' },
  { icon: TestTube, label: 'Kelola Kuis', path: '/quiz' },
  { icon: FileBarChart, label: 'Kelola Raport', path: '/reports' },
  { icon: Link2, label: 'MyLink Prompt', path: '/mylink' },
  { icon: Library, label: 'Library Prompt', path: '/prompts' },
  { icon: Book, label: 'E-book', path: '/ebooks' },
  { icon: MessageSquare, label: 'Forum Diskusi', path: '/forum' },
  { icon: Bell, label: 'Pengumuman', path: '/announcements' },
  { icon: Users, label: 'Kelola Murid', path: '/students' },
];