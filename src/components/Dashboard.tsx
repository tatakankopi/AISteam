import React from 'react';
import { 
  Users, 
  BookOpen, 
  TestTube, 
  MessageSquare,
  TrendingUp
} from 'lucide-react';

const statsCards = [
  { icon: Users, label: 'Total Murid', value: '150', change: '+12%' },
  { icon: BookOpen, label: 'Kursus Aktif', value: '8', change: '+2' },
  { icon: TestTube, label: 'Kuis Dibuat', value: '24', change: '+5' },
  { icon: MessageSquare, label: 'Diskusi Aktif', value: '36', change: '+8' },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{card.label}</p>
                <h3 className="text-2xl font-bold mt-2">{card.value}</h3>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <card.icon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500">{card.change}</span>
              <span className="text-gray-600 ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Murid baru bergabung ke kelas Matematika</p>
                  <p className="text-xs text-gray-500">2 jam yang lalu</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Kuis Mendatang</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                  <TestTube className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Kuis Matematika Dasar</p>
                  <p className="text-xs text-gray-500">Besok, 10:00 WIB</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;