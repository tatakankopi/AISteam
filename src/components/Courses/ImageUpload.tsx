import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  image: File | null;
  onChange: (file: File) => void;
}

const ImageUpload = ({ image, onChange }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Foto Kursus
      </label>
      <div 
        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="space-y-1 text-center">
          {image ? (
            <div>
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="mx-auto h-32 w-auto object-cover rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-2">{image.name}</p>
            </div>
          ) : (
            <>
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Upload foto</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">atau drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;