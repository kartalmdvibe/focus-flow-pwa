import React from 'react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
          Focus-Flow
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Master your time, master your flow.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full"
      >
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Daily Goal</h2>
          <div className="flex items-end justify-between mb-2">
            <span className="text-3xl font-bold">0%</span>
            <span className="text-sm text-gray-500">0 / 4 hours</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
            <div
              className="bg-primary-500 h-full rounded-full transition-all duration-1000"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.4, duration: 0.5 }}
         className="w-full grid grid-cols-2 gap-4"
      >
         <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-900/50">
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-400">0</div>
            <div className="text-sm text-primary-600 dark:text-primary-500">Streak Days</div>
         </div>
         <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">Tasks Done</div>
         </div>
      </motion.div>
    </div>
  );
};
