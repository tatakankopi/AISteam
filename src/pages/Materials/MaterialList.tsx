import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import MaterialItem from '../../components/Materials/MaterialItem';
import type { Material } from '../../types/course';

const MaterialList = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');

  // Mock data - replace with actual data fetching
  const materials: Material[] = [
    { id: 1, courseId: 1, title: 'Pengenalan Aljabar', type: 'document', content: 'Materi pengenalan...', order: 1 },
    { id: 2, courseId: 1, title: 'Operasi Dasar', type: 'video', content: 'Video pembelajaran...', order: 2 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kelola Materi</h1>
          <p className="text-gray-600">Atur materi pembelajaran untuk setiap kursus</p>
        </div>
        <Link
          to="/materials/create"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Tambah Materi
        </Link>
      </div>

      <div className="grid gap-6">
        {materials.map((material) => (
          <MaterialItem key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default MaterialList;