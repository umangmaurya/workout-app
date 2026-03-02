import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  isDarkMode: boolean;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, isDarkMode, onTabChange }) => {
  const getTabClass = (tab: TabType) => {
    const isActive = activeTab === tab;
    if (isActive) return 'text-emerald-400';
    return isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-900';
  };

  return (
    <nav className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t z-30 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="flex justify-around py-2">
        <button 
          onClick={() => onTabChange('workout')}
          className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${getTabClass('workout')}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs mt-1">Workout</span>
        </button>
        <button 
          onClick={() => onTabChange('progress')}
          className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${getTabClass('progress')}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-xs mt-1">Progress</span>
        </button>
        <button 
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${getTabClass('profile')}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </nav>
  );
};
