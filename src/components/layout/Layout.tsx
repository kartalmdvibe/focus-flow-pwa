import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <main className="flex-1 pb-20 p-4 max-w-md mx-auto w-full">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
