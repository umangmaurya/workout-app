import React from 'react';

interface ProgressTabProps {
  isDarkMode: boolean;
}

export const ProgressTab: React.FC<ProgressTabProps> = ({ isDarkMode }) => {
  return (
    <div className="p-4 space-y-4">
      <div className={`rounded-2xl p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <h3 className="font-bold mb-3">Your Progress</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Weight Goal</span>
              <span className="text-emerald-400">74kg → 66kg</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="h-full bg-emerald-500 rounded-full" style={{width: '25%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Weekly Workouts</span>
              <span className="text-violet-400">3/5 completed</span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="h-full bg-violet-500 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`rounded-2xl p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <h3 className="font-bold mb-3">Daily Targets</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className={`rounded-xl p-3 text-center ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
            <div className="text-2xl font-bold text-orange-400">1,700</div>
            <div className="text-xs text-gray-400">Calories</div>
          </div>
          <div className={`rounded-xl p-3 text-center ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
            <div className="text-2xl font-bold text-blue-400">125g</div>
            <div className="text-xs text-gray-400">Protein</div>
          </div>
        </div>
      </div>
    </div>
  );
};
