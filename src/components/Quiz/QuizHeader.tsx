import React from 'react';
import CreateQuizButton from './CreateQuizButton';

interface QuizHeaderProps {
  courseId: string | null;
}

const QuizHeader = ({ courseId }: QuizHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Kelola Kuis</h1>
        <p className="text-gray-600">Buat dan kelola kuis untuk setiap kursus</p>
      </div>
      <CreateQuizButton courseId={courseId} />
    </div>
  );
};

export default QuizHeader;