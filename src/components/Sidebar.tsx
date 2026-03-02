import React from 'react';
import { ProgramType } from '../types';

interface SidebarProps {
  isOpen: boolean;
  isDarkMode: boolean;
  program: ProgramType;
  onClose: () => void;
  onProgramChange: (program: ProgramType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  isDarkMode, 
  program,
  onClose,
  onProgramChange,
}) => {
  const handleProgramSelect = (newProgram: ProgramType) => {
    onProgramChange(newProgram);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 max-w-md mx-auto"
          onClick={onClose}
        />
      )}
      <div 
        className={`fixed top-0 left-0 h-full w-72 max-w-[80%] z-50 transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        style={{ maxWidth: '288px' }}
      >
        <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Menu</h2>
            <button 
              onClick={onClose} 
              className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Workout Program
          </p>
          
          <button
            onClick={() => handleProgramSelect('starter')}
            className={`w-full text-left p-3 rounded-xl mb-2 transition-all ${
              program === 'starter'
                ? 'bg-emerald-500/20 border-2 border-emerald-500'
                : isDarkMode 
                  ? 'bg-gray-700/50 hover:bg-gray-700 border-2 border-transparent' 
                  : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3-Day Light</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Beginner friendly</p>
              </div>
              {program === 'starter' && (
                <svg className="w-5 h-5 text-emerald-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>

          <button
            onClick={() => handleProgramSelect('main')}
            className={`w-full text-left p-3 rounded-xl mb-2 transition-all ${
              program === 'main'
                ? 'bg-violet-500/20 border-2 border-violet-500'
                : isDarkMode 
                  ? 'bg-gray-700/50 hover:bg-gray-700 border-2 border-transparent' 
                  : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>5-Day Main</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Mon-Fri intensive</p>
              </div>
              {program === 'main' && (
                <svg className="w-5 h-5 text-violet-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>

          <button
            onClick={() => handleProgramSelect('sixday')}
            className={`w-full text-left p-3 rounded-xl transition-all ${
              program === 'sixday'
                ? 'bg-purple-500/20 border-2 border-purple-500'
                : isDarkMode 
                  ? 'bg-gray-700/50 hover:bg-gray-700 border-2 border-transparent' 
                  : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold">6</span>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>6-Day Split</p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Mon-Sat + Arms day</p>
              </div>
              {program === 'sixday' && (
                <svg className="w-5 h-5 text-purple-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>
        </nav>
      </div>
    </>
  );
};
