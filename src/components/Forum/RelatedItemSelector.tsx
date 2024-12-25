import React, { useState } from 'react';
import { Book, BookOpen, Library } from 'lucide-react';

interface RelatedItemSelectorProps {
  value: { type: string; id: number } | null;
  onChange: (item: { type: string; id: number } | null) => void;
}

interface RelatedItem {
  id: number;
  type: string;
  title: string;
}

const mockItems: RelatedItem[] = [
  { id: 1, type: 'course', title: 'Matematika Dasar' },
  { id: 2, type: 'ebook', title: 'Panduan Belajar Aljabar' },
  { id: 3, type: 'prompt', title: 'Template Soal Matematika' },
];

const RelatedItemSelector = ({ value, onChange }: RelatedItemSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'course':
        return BookOpen;
      case 'ebook':
        return Book;
      case 'prompt':
        return Library;
      default:
        return Book;
    }
  };

  const selectedItem = value 
    ? mockItems.find(item => item.id === value.id)
    : null;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Terkait Dengan
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {selectedItem ? (
            <div className="flex items-center">
              {React.createElement(getIcon(selectedItem.type), {
                className: "w-5 h-5 text-blue-500 mr-2"
              })}
              <span>{selectedItem.title}</span>
            </div>
          ) : (
            <span className="text-gray-500">Pilih item terkait (opsional)</span>
          )}
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
            <div className="p-2">
              {mockItems.map((item) => {
                const Icon = getIcon(item.type);
                return (
                  <button
                    key={`${item.type}-${item.id}`}
                    type="button"
                    className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-50 ${
                      value?.id === item.id ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      onChange({ type: item.type, id: item.id });
                      setIsOpen(false);
                    }}
                  >
                    <Icon className="w-5 h-5 text-blue-500 mr-2" />
                    <div className="text-left">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-500 capitalize">
                        {item.type}
                      </div>
                    </div>
                  </button>
                );
              })}
              <button
                type="button"
                className="w-full text-center p-2 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  onChange(null);
                  setIsOpen(false);
                }}
              >
                Hapus pilihan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedItemSelector;