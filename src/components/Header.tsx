import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white h-16 fixed top-0 right-0 left-64 shadow-sm z-10">
      <div className="h-full flex items-center justify-between px-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Selamat Datang, Guru</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;