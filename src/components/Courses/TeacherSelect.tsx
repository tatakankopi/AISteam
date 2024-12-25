import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

interface TeacherSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const TeacherSelect = ({ value, onChange }: TeacherSelectProps) => {
  const { data: teachers, isLoading } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('teachers')
        .select('id, name, email');
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) return <div>Loading teachers...</div>;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Guru Pengajar
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Pilih Guru</option>
        {teachers?.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name} ({teacher.email})
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeacherSelect;