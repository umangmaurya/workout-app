import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  isDarkMode: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, isDarkMode, onClose }) => {
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
        
        <nav className="p-4 flex-1">
          <p className="text-gray-500 text-sm text-center mt-8">Menu coming soon...</p>
        </nav>
      </div>
    </>
  );
};
