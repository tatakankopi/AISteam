import React from 'react';

interface PromptCategorySelectorProps {
  value: string;
  onChange: (category: string) => void;
}

const categories = [
  {
    id: 'math',
    title: 'Matematika',
    description: 'Prompt untuk pembelajaran matematika'
  },
  {
    id: 'science',
    title: 'Sains',
    description: 'Prompt untuk pembelajaran sains'
  },
  {
    id: 'language',
    title: 'Bahasa',
    description: 'Prompt untuk pembelajaran bahasa'
  }
];

const PromptCategorySelector = ({ value, onChange }: PromptCategorySelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Kategori Prompt
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              value === category.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
            onClick={() => onChange(category.id)}
          >
            <h3 className="font-medium text-gray-900">{category.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptCategorySelector;