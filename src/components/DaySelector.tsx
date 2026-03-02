import React, { useRef } from 'react';

interface DaySelectorProps {
  currentIndex: number;
  totalDays: number;
  isDarkMode: boolean;
  isStarter: boolean;
  onDayChange: (index: number) => void;
}

const DAYS_5 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const DAYS_6 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAYS_3 = ['Day 1', 'Day 2', 'Day 3'];

export const DaySelector: React.FC<DaySelectorProps> = ({
  currentIndex,
  totalDays,
  isDarkMode,
  isStarter,
  onDayChange,
}) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const days = totalDays === 3 ? DAYS_3 : totalDays === 6 ? DAYS_6 : DAYS_5;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < days.length - 1) {
        onDayChange(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        onDayChange(currentIndex - 1);
      }
    }
  };

  return (
    <div 
      className="px-4 pt-3 pb-2"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`flex justify-between items-center rounded-xl p-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        {days.map((day, idx) => (
          <button
            key={day}
            onClick={() => onDayChange(idx)}
            className={`flex-1 py-2 px-1 rounded-lg text-xs font-semibold transition-all ${
              idx === currentIndex
                ? isStarter
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-violet-500 text-white shadow-md'
                : isDarkMode
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};
