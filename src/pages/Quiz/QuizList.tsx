import React from 'react';
import { useSearchParams } from 'react-router-dom';
import QuizTable from '../../components/Quiz/QuizTable';
import QuizHeader from '../../components/Quiz/QuizHeader';

const QuizList = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');

  return (
    <div className="p-6">
      <QuizHeader courseId={courseId} />
      <QuizTable courseId={courseId} />
    </div>
  );
};

export default QuizList;