import React from 'react';
import { FileText, Video, Layout } from 'lucide-react';
import type { Material } from '../../types/course';

interface MaterialItemProps {
  material: Material;
}

const MaterialItem = ({ material }: MaterialItemProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return FileText;
      case 'video':
        return Video;
      default:
        return Layout;
    }
  };

  const Icon = getIcon(material.type);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
      <div className="flex items-center">
        <div className="p-3 bg-blue-50 rounded-lg mr-4">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{material.title}</h3>
          <p className="text-sm text-gray-500">Modul {material.order}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
          Edit
        </button>
        <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
          Hapus
        </button>
      </div>
    </div>
  );
};

export default MaterialItem;