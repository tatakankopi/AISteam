import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReportForm from '../../components/Reports/ReportForm';
import type { Report } from '../../types/report';

const CreateReport = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: Partial<Report>) => {
    // Handle report creation
    console.log('Creating report:', data);
    navigate('/reports');
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Buat Raport Baru</h1>
        <p className="text-gray-600">Isi informasi raport siswa</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <ReportForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateReport;