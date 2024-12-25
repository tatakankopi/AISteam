import React from 'react';
import { Book, Upload, Share2 } from 'lucide-react';
import CreateEbookButton from '../../components/Ebook/CreateEbookButton';
import EbookTable from '../../components/Ebook/EbookTable';

const EbookList = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">E-Book Library</h1>
          <p className="text-gray-600">Kelola dan bagikan e-book pembelajaran</p>
        </div>
        <CreateEbookButton />
      </div>
      <EbookTable />
    </div>
  );
};

export default EbookList;