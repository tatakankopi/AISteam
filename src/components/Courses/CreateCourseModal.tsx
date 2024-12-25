import React, { useState } from 'react';
import { X, Upload, Wand2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { generateTitles, generateDescription } from '../../utils/aiGeneration';
import { supabase } from '../../lib/supabase';
import ImageUpload from './ImageUpload';
import DateRangePicker from './DateRangePicker';
import TeacherSelect from './TeacherSelect';
import MaterialSelect from './MaterialSelect';
import QuizSelect from './QuizSelect';

interface CreateCourseModalProps {
  onClose: () => void;
}

const CreateCourseModal = ({ onClose }: CreateCourseModalProps) => {
  const queryClient = useQueryClient();
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    teacherId: '',
    materials: [] as string[],
    quizzes: [] as string[],
    image: null as File | null,
  });
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const createCourseMutation = useMutation({
    mutationFn: async () => {
      let imageUrl = '';
      
      // Upload image if exists
      if (courseData.image) {
        const fileExt = courseData.image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('course-images')
          .upload(fileName, courseData.image);
          
        if (uploadError) throw uploadError;
        
        const { data: { publicUrl } } = supabase.storage
          .from('course-images')
          .getPublicUrl(fileName);
          
        imageUrl = publicUrl;
      }

      // Create course
      const { data: course, error: courseError } = await supabase
        .from('courses')
        .insert({
          title: courseData.title,
          description: courseData.description,
          image_url: imageUrl,
          start_date: courseData.startDate,
          end_date: courseData.endDate,
          teacher_id: courseData.teacherId,
        })
        .select()
        .single();

      if (courseError) throw courseError;

      // Add materials
      if (courseData.materials.length > 0) {
        const { error: materialsError } = await supabase
          .from('course_materials')
          .insert(
            courseData.materials.map(materialId => ({
              course_id: course.id,
              material_id: materialId,
            }))
          );

        if (materialsError) throw materialsError;
      }

      // Add quizzes
      if (courseData.quizzes.length > 0) {
        const { error: quizzesError } = await supabase
          .from('course_quizzes')
          .insert(
            courseData.quizzes.map(quizId => ({
              course_id: course.id,
              quiz_id: quizId,
            }))
          );

        if (quizzesError) throw quizzesError;
      }

      return course;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      onClose();
    },
  });

  const handleGenerateTitles = async () => {
    setIsGenerating(true);
    try {
      const titles = await generateTitles();
      setGeneratedTitles(titles);
    } catch (error) {
      console.error('Error generating titles:', error);
    }
    setIsGenerating(false);
  };

  const handleSelectTitle = async (title: string) => {
    setCourseData({ ...courseData, title });
    try {
      const description = await generateDescription(title);
      setCourseData(prev => ({ ...prev, description }));
    } catch (error) {
      console.error('Error generating description:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCourseMutation.mutate();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Buat Kursus Baru</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Judul Kursus
              </label>
              <button
                type="button"
                onClick={handleGenerateTitles}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                disabled={isGenerating}
              >
                <Wand2 className="w-4 h-4 mr-1" />
                {isGenerating ? 'Generating...' : 'Generate Judul'}
              </button>
            </div>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan judul kursus"
              value={courseData.title}
              onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
              required
            />
            {generatedTitles.length > 0 && (
              <div className="mt-2 space-y-2">
                {generatedTitles.map((title, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectTitle(title)}
                    className="w-full text-left p-2 text-sm hover:bg-blue-50 rounded-lg"
                  >
                    {title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Masukkan deskripsi kursus"
              value={courseData.description}
              onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
              required
            />
          </div>

          <TeacherSelect
            value={courseData.teacherId}
            onChange={(teacherId) => setCourseData({ ...courseData, teacherId })}
          />

          <DateRangePicker
            startDate={courseData.startDate}
            endDate={courseData.endDate}
            onStartDateChange={(date) => setCourseData({ ...courseData, startDate: date })}
            onEndDateChange={(date) => setCourseData({ ...courseData, endDate: date })}
          />

          <ImageUpload
            image={courseData.image}
            onChange={(file) => setCourseData({ ...courseData, image: file })}
          />

          <MaterialSelect
            value={courseData.materials}
            onChange={(materials) => setCourseData({ ...courseData, materials })}
          />

          <QuizSelect
            value={courseData.quizzes}
            onChange={(quizzes) => setCourseData({ ...courseData, quizzes })}
          />

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
              disabled={createCourseMutation.isPending}
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              disabled={createCourseMutation.isPending}
            >
              {createCourseMutation.isPending ? 'Menyimpan...' : 'Simpan Kursus'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseModal;