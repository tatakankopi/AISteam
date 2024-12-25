import React, { useState } from 'react';
import { X, Upload, Lock } from 'lucide-react';

interface CreateEbookModalProps {
  onClose: () => void;
}

const CreateEbookModal = ({ onClose }: CreateEbookModalProps) => {
  const [ebookData, setEbookData] = useState({
    title: '',
    description: '',
    category: '',
    accessLevel: 'public',
    file: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEbookData({ ...ebookData, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle e-book upload
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Upload E-Book Baru</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul E-Book
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan judul e-book"
              value={ebookData.title}
              onChange={(e) => setEbookData({ ...ebookData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Masukkan deskripsi e-book"
              value={ebookData.description}
              onChange={(e) => setEbookData({ ...ebookData, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <select
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={ebookData.category}
              onChange={(e) => setEbookData({ ...ebookData, category: e.target.value })}
            >
              <option value="">Pilih kategori</option>
              <option value="matematika">Matematika</option>
              <option value="sains">Sains</option>
              <option value="bahasa">Bahasa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              File E-Book (PDF)
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
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">atau drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF hingga 10MB</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hak Akses
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="public"
                  name="accessLevel"
                  value="public"
                  checked={ebookData.accessLevel === 'public'}
                  onChange={(e) => setEbookData({ ...ebookData, accessLevel: e.target.value })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="public" className="ml-2 block text-sm text-gray-900">
                  Publik (Semua murid dapat mengakses)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="restricted"
                  name="accessLevel"
                  value="restricted"
                  checked={ebookData.accessLevel === 'restricted'}
                  onChange={(e) => setEbookData({ ...ebookData, accessLevel: e.target.value })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="restricted" className="ml-2 block text-sm text-gray-900">
                  Terbatas (Hanya untuk kursus tertentu)
                </label>
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
              Upload E-Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEbookModal;