import React from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onMenuClick: () => void;
  formattedDate: string;
  formattedTime: string;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleTheme,
  onMenuClick,
  formattedDate,
  formattedTime,
}) => {
  return (
    <header className={`sticky top-0 z-30 backdrop-blur border-b transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuClick}
            className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-full flex items-center justify-center">
              <span className="text-sm">💪</span>
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">My Workouts</h1>
            <p className="text-gray-500 text-xs">{formattedDate} • {formattedTime}</p>
          </div>
        </div>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
        >
          {isDarkMode ? (
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};
