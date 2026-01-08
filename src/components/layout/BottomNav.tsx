import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, List, BarChart2, Settings } from 'lucide-react';
import clsx from 'clsx';

export const BottomNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Focus', path: '/' },
    { icon: List, label: 'Tasks', path: '/tasks' },
    { icon: BarChart2, label: 'Stats', path: '/stats' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 safe-area-bottom z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                "flex flex-col items-center justify-center w-full h-full transition-colors duration-200",
                isActive
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              )
            }
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
