import React from 'react';

interface ProfileTabProps {
  isDarkMode: boolean;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({ isDarkMode }) => {
  return (
    <div className="p-4 space-y-4">
      <div className={`rounded-2xl p-4 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-full mx-auto mb-3 flex items-center justify-center">
          <span className="text-3xl">💪</span>
        </div>
        <h3 className="font-bold text-lg">Fitness Journey</h3>
        <p className="text-gray-400 text-sm">Keep pushing!</p>
      </div>
      <div className={`rounded-2xl p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <h3 className="font-bold mb-3">Goals</h3>
        <div className="space-y-2 text-sm">
          <div className={`flex justify-between py-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <span className="text-gray-400">Target Weight</span>
            <span className="font-semibold">66 kg</span>
          </div>
          <div className={`flex justify-between py-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <span className="text-gray-400">Daily Calories</span>
            <span className="font-semibold">1,700 kcal</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Daily Protein</span>
            <span className="font-semibold">125g</span>
          </div>
        </div>
      </div>
    </div>
  );
};
