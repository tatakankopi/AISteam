import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

interface MaterialSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const MaterialSelect = ({ value, onChange }: MaterialSelectProps) => {
  const { data: materials, isLoading } = useQuery({
    queryKey: ['materials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('materials')
        .select('id, title, type');
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) return <div>Loading materials...</div>;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Materi Pembelajaran
      </label>
      <select
        multiple
        value={value}
        onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions, option => option.value);
          onChange(selected);
        }}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[120px]"
      >
        {materials?.map((material) => (
          <option key={material.id} value={material.id}>
            {material.title} ({material.type})
          </option>
        ))}
      </select>
      <p className="mt-1 text-sm text-gray-500">
        Tahan Ctrl/Cmd untuk memilih beberapa materi
      </p>
    </div>
  );
};

export default MaterialSelect;