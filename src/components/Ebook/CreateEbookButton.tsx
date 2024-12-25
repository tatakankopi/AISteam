import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CreateEbookModal from './CreateEbookModal';

const CreateEbookButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-5 h-5 mr-2" />
        Upload E-Book
      </button>

      {isModalOpen && (
        <CreateEbookModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default CreateEbookButton;