import React, { useState } from 'react';
import { X } from 'lucide-react';
import QuizTypeSelector from './QuizTypeSelector';
import QuestionEditor from './QuestionEditor';

interface CreateQuizModalProps {
  onClose: () => void;
}

const CreateQuizModal = ({ onClose }: CreateQuizModalProps) => {
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState({
    title: '',
    courseId: '',
    type: '',
    duration: '',
    dueDate: '',
    questions: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quiz creation
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Buat Kuis Baru</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex items-center ${
                  stepNumber < 3 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Judul Kuis
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan judul kuis"
                  value={quizData.title}
                  onChange={(e) =>
                    setQuizData({ ...quizData, title: e.target.value })
                  }
                />
              </div>
              <QuizTypeSelector
                value={quizData.type}
                onChange={(type) => setQuizData({ ...quizData, type })}
              />
            </div>
          )}

          {step === 2 && (
            <QuestionEditor
              questions={quizData.questions}
              onChange={(questions) =>
                setQuizData({ ...quizData, questions })
              }
            />
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durasi Kuis
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Contoh: 30 menit"
                  value={quizData.duration}
                  onChange={(e) =>
                    setQuizData({ ...quizData, duration: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tenggat Waktu
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={quizData.dueDate}
                  onChange={(e) =>
                    setQuizData({ ...quizData, dueDate: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Kembali
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Simpan Kuis
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuizModal;