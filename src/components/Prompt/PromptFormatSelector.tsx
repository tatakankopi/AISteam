import React from 'react';

interface PromptFormatSelectorProps {
  value: string;
  onChange: (format: string) => void;
}

const formats = [
  {
    id: 'description',
    title: 'Deskripsi',
    description: 'Format penjelasan deskriptif'
  },
  {
    id: 'math',
    title: 'Matematika',
    description: 'Format khusus untuk rumus dan perhitungan'
  }
];

const PromptFormatSelector = ({ value, onChange }: PromptFormatSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Format Prompt
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formats.map((format) => (
          <div
            key={format.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              value === format.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
            onClick={() => onChange(format.id)}
          >
            <h3 className="font-medium text-gray-900">{format.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{format.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptFormatSelector;