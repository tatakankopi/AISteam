import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

interface QuizSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const QuizSelect = ({ value, onChange }: QuizSelectProps) => {
  const { data: quizzes, isLoading } = useQuery({
    queryKey: ['quizzes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('quizzes')
        .select('id, title, type');
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) return <div>Loading quizzes...</div>;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Kuis
      </label>
      <select
        multiple
        value={value}
        onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions, option => option.value);
          onChange(selected);
        }}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[120px]"
      >
        {quizzes?.map((quiz) => (
          <option key={quiz.id} value={quiz.id}>
            {quiz.title} ({quiz.type})
          </option>
        ))}
      </select>
      <p className="mt-1 text-sm text-gray-500">
        Tahan Ctrl/Cmd untuk memilih beberapa kuis
      </p>
    </div>
  );
};

export default QuizSelect;