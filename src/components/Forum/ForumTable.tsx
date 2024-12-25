import React from 'react';
import { MessageSquare, Eye, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ForumPost } from '../../types/forum';

const mockForums: ForumPost[] = [
  {
    id: 1,
    title: 'Diskusi Materi Aljabar',
    content: 'Pembahasan soal-soal aljabar...',
    authorId: '1',
    authorName: 'John Doe',
    authorType: 'teacher',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z',
    accessLevel: 'public',
    relatedTo: {
      type: 'course',
      id: 1,
      title: 'Matematika Dasar'
    }
  }
];

const ForumTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-hidden">
        <div className="grid gap-4 p-4">
          {mockForums.map((forum) => (
            <Link
              key={forum.id}
              to={`/forum/${forum.id}`}
              className="block bg-white p-6 rounded-lg border hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {forum.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {forum.content}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span>12 balasan</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>45 dilihat</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>2 jam yang lalu</span>
                    </div>
                  </div>
                </div>
                {forum.relatedTo && (
                  <div className="ml-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {forum.relatedTo.title}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumTable;