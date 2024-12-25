import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemProps } from './types';

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label, path, isActive }) => {
  return (
    <li>
      <Link
        to={path}
        className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default MenuItem;