import React from 'react';

interface QuizTypeSelectorProps {
  value: string;
  onChange: (type: string) => void;
}

const quizTypes = [
  {
    id: 'multiple-choice',
    title: 'Pilihan Ganda',
    description: 'Soal dengan beberapa pilihan jawaban',
  },
  {
    id: 'essay',
    title: 'Essay',
    description: 'Soal dengan jawaban berupa teks',
  },
  {
    id: 'true-false',
    title: 'Benar/Salah',
    description: 'Soal dengan pilihan benar atau salah',
  },
];

const QuizTypeSelector = ({ value, onChange }: QuizTypeSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Jenis Kuis
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quizTypes.map((type) => (
          <div
            key={type.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              value === type.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
            onClick={() => onChange(type.id)}
          >
            <h3 className="font-medium text-gray-900">{type.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizTypeSelector;