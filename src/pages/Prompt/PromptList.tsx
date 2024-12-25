import React from 'react';
import { Plus } from 'lucide-react';
import PromptTable from '../../components/Prompt/PromptTable';
import CreatePromptButton from '../../components/Prompt/CreatePromptButton';

const PromptList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Library Prompt</h1>
          <p className="text-gray-600">Kelola dan bagikan prompt untuk pembelajaran</p>
        </div>
        <CreatePromptButton />
      </div>
      <PromptTable />
    </div>
  );
};

export default PromptList;