import React from 'react';
import { Users, UserCheck, Shield } from 'lucide-react';

interface AccessLevelSelectorProps {
  value: string;
  onChange: (level: string) => void;
}

const AccessLevelSelector = ({ value, onChange }: AccessLevelSelectorProps) => {
  const levels = [
    {
      id: 'public',
      title: 'Umum',
      description: 'Dapat diakses oleh semua pengguna',
      icon: Users
    },
    {
      id: 'student',
      title: 'Murid',
      description: 'Hanya dapat diakses oleh murid',
      icon: UserCheck
    },
    {
      id: 'teacher',
      title: 'Guru',
      description: 'Hanya dapat diakses oleh guru',
      icon: Shield
    }
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Hak Akses
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              value === level.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
            onClick={() => onChange(level.id)}
          >
            <div className="flex items-center space-x-3">
              <level.icon className="w-5 h-5 text-blue-500" />
              <div>
                <h3 className="font-medium text-gray-900">{level.title}</h3>
                <p className="text-sm text-gray-500">{level.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessLevelSelector;