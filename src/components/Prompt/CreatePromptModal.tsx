import React, { useState } from 'react';
import { X } from 'lucide-react';
import PromptCategorySelector from './PromptCategorySelector';
import PromptFormatSelector from './PromptFormatSelector';

interface CreatePromptModalProps {
  onClose: () => void;
}

const CreatePromptModal = ({ onClose }: CreatePromptModalProps) => {
  const [promptData, setPromptData] = useState({
    title: '',
    category: '',
    format: '',
    content: '',
    isShared: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle prompt creation
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Buat Prompt Baru</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Prompt
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan judul prompt"
              value={promptData.title}
              onChange={(e) => setPromptData({ ...promptData, title: e.target.value })}
            />
          </div>

          <PromptCategorySelector
            value={promptData.category}
            onChange={(category) => setPromptData({ ...promptData, category })}
          />

          <PromptFormatSelector
            value={promptData.format}
            onChange={(format) => setPromptData({ ...promptData, format })}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Konten Prompt
            </label>
            <textarea
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={6}
              placeholder="Tulis konten prompt..."
              value={promptData.content}
              onChange={(e) => setPromptData({ ...promptData, content: e.target.value })}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="share-prompt"
              checked={promptData.isShared}
              onChange={(e) => setPromptData({ ...promptData, isShared: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="share-prompt" className="ml-2 block text-sm text-gray-900">
              Bagikan prompt ini ke library
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Simpan Prompt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePromptModal;