import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import AccessLevelSelector from './AccessLevelSelector';
import RelatedItemSelector from './RelatedItemSelector';

interface CreateForumModalProps {
  onClose: () => void;
}

const CreateForumModal = ({ onClose }: CreateForumModalProps) => {
  const [forumData, setForumData] = useState({
    title: '',
    content: '',
    accessLevel: 'public',
    attachments: [] as File[],
    relatedTo: null as { type: string; id: number } | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forum creation
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Buat Forum Diskusi</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Diskusi
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan judul diskusi"
              value={forumData.title}
              onChange={(e) => setForumData({ ...forumData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Konten
            </label>
            <textarea
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={5}
              placeholder="Tulis konten diskusi..."
              value={forumData.content}
              onChange={(e) => setForumData({ ...forumData, content: e.target.value })}
            />
          </div>

          <AccessLevelSelector
            value={forumData.accessLevel}
            onChange={(level) => setForumData({ ...forumData, accessLevel: level })}
          />

          <RelatedItemSelector
            value={forumData.relatedTo}
            onChange={(item) => setForumData({ ...forumData, relatedTo: item })}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lampiran
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload file</span>
                    <input
                      type="file"
                      className="sr-only"
                      multiple
                      onChange={(e) => {
                        if (e.target.files) {
                          setForumData({ 
                            ...forumData, 
                            attachments: [...Array.from(e.target.files)]
                          });
                        }
                      }}
                    />
                  </label>
                  <p className="pl-1">atau drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, atau gambar hingga 10MB
                </p>
              </div>
            </div>
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
              Buat Diskusi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForumModal;