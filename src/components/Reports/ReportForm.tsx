import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Report } from '../../types/report';

interface ReportFormProps {
  initialData?: Partial<Report>;
  onSubmit: (data: Partial<Report>) => void;
}

const ReportForm = ({ initialData, onSubmit }: ReportFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: '',
    courseId: '',
    semester: '',
    academicYear: '',
    curriculum: '',
    ...initialData
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Semester
          </label>
          <select
            value={formData.semester}
            onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Pilih Semester</option>
            <option value="Ganjil">Ganjil</option>
            <option value="Genap">Genap</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tahun Ajaran
          </label>
          <input
            type="text"
            value={formData.academicYear}
            onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="2023/2024"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Kurikulum
          </label>
          <select
            value={formData.curriculum}
            onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Pilih Kurikulum</option>
            <option value="K13">K13</option>
            <option value="Merdeka">Kurikulum Merdeka</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => navigate('/reports')}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default ReportForm;