import React from 'react';
import { Book, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseProps {
  course: {
    id: number;
    title: string;
    description: string;
    students: number;
    modules: number;
    duration: string;
    image: string;
  };
}

const CourseCard = ({ course }: CourseProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.students} Murid</span>
          </div>
          <div className="flex items-center">
            <Book className="w-4 h-4 mr-1" />
            <span>{course.modules} Modul</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Link 
            to={`/courses/${course.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Lihat Detail →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;