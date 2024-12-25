import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';
import { menuItems } from './menuItems';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-white h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Dashboard Guru</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isActive={location.pathname === item.path}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;