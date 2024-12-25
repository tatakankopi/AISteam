import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Question {
  id: string;
  type: string;
  content: string;
  options?: string[];
  correctAnswer?: string | number;
}

interface QuestionEditorProps {
  questions: Question[];
  onChange: (questions: Question[]) => void;
}

const QuestionEditor = ({ questions, onChange }: QuestionEditorProps) => {
  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: 'multiple-choice',
      content: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    };
    onChange([...questions, newQuestion]);
  };

  const removeQuestion = (id: string) => {
    onChange(questions.filter((q) => q.id !== id));
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    onChange(
      questions.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Daftar Pertanyaan</h3>
        <button
          type="button"
          onClick={addQuestion}
          className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          Tambah Pertanyaan
        </button>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className="border rounded-lg p-4 space-y-4"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-medium">Pertanyaan {index + 1}</h4>
              <button
                type="button"
                onClick={() => removeQuestion(question.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div>
              <textarea
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Masukkan pertanyaan"
                value={question.content}
                onChange={(e) =>
                  updateQuestion(question.id, { content: e.target.value })
                }
              />
            </div>

            {question.type === 'multiple-choice' && (
              <div className="space-y-2">
                {question.options?.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`correct-${question.id}`}
                      checked={question.correctAnswer === optionIndex}
                      onChange={() =>
                        updateQuestion(question.id, {
                          correctAnswer: optionIndex,
                        })
                      }
                    />
                    <input
                      type="text"
                      className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder={`Pilihan ${optionIndex + 1}`}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...(question.options || [])];
                        newOptions[optionIndex] = e.target.value;
                        updateQuestion(question.id, { options: newOptions });
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionEditor;