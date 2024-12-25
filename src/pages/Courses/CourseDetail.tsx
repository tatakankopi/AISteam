import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Book, Users, Clock, FileText, TestTube } from 'lucide-react';
import type { Course } from '../../types/course';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'quizzes'>('overview');

  // Mock data - replace with actual data fetching
  const course: Course = {
    id: 1,
    title: 'Matematika Dasar',
    description: 'Pembelajaran dasar matematika untuk SD kelas 4-6',
    students: 24,
    modules: 8,
    duration: '2 bulan',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400',
    materials: [
      { id: 1, courseId: 1, title: 'Pengenalan Aljabar', type: 'document', content: 'Materi pengenalan...', order: 1 },
      { id: 2, courseId: 1, title: 'Operasi Dasar', type: 'video', content: 'Video pembelajaran...', order: 2 },
    ],
    quizzes: [
      { id: 1, courseId: 1, title: 'Kuis Aljabar', type: 'multiple-choice', questions: 10, duration: '30 menit', dueDate: '2024-03-20' },
    ],
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="relative h-48">
          <img 
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h1>
          <p className="text-gray-600 mb-6">{course.description}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Total Murid</p>
                <p className="font-semibold">{course.students}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Book className="w-5 h-5 text-blue-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Jumlah Modul</p>
                <p className="font-semibold">{course.modules}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Durasi</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
          </div>

          <div className="border-b mb-6">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'materials', 'quizzes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'materials' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Materi Pembelajaran</h2>
                <Link
                  to={`/materials/create/${course.id}`}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Tambah Materi
                </Link>
              </div>
              {course.materials?.map((material) => (
                <div key={material.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="mr-4">
                      {material.type === 'video' ? '📹' : material.type === 'document' ? '📄' : '📊'}
                    </div>
                    <div>
                      <h3 className="font-medium">{material.title}</h3>
                      <p className="text-sm text-gray-500">Modul {material.order}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">Lihat Detail</button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'quizzes' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Kuis</h2>
                <Link
                  to={`/quiz/create/${course.id}`}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <TestTube className="w-4 h-4 mr-2" />
                  Buat Kuis
                </Link>
              </div>
              {course.quizzes?.map((quiz) => (
                <div key={quiz.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{quiz.title}</h3>
                    <p className="text-sm text-gray-500">
                      {quiz.questions} Soal • {quiz.duration}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Tenggat: {quiz.dueDate}</span>
                    <button className="text-blue-600 hover:text-blue-800">Lihat Detail</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;