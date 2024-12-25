import React from 'react';
import { Book, Users, Clock } from 'lucide-react';
import CourseCard from '../../components/Courses/CourseCard';
import CreateCourseButton from '../../components/Courses/CreateCourseButton';

const courses = [
  {
    id: 1,
    title: 'Matematika Dasar',
    description: 'Pembelajaran dasar matematika untuk SD kelas 4-6',
    students: 24,
    modules: 8,
    duration: '2 bulan',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'
  },
  // Add more courses here
];

const CourseList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Daftar Kursus</h1>
        <CreateCourseButton />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;