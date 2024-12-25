import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const menuItems = [
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

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-white h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Dashboard Guru</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;