import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReportHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Kelola Raport</h1>
        <p className="text-gray-600">Buat dan kelola raport siswa</p>
      </div>
      <Link
        to="/reports/create"
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <Plus className="w-5 h-5 mr-2" />
        Buat Raport
      </Link>
    </div>
  );
};

export default ReportHeader;