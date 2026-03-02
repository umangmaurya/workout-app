import React, { useRef } from 'react';
import { Workout } from '../types';
import { warmups, cooldowns } from '../data/workouts';
import { CollapsibleSection } from './CollapsibleSection';

interface WorkoutCardProps {
  workout: Workout;
  workouts: Workout[];
  currentIndex: number;
  isStarter: boolean;
  isDarkMode: boolean;
  warmupOpen: boolean;
  cooldownOpen: boolean;
  onToggleWarmup: () => void;
  onToggleCooldown: () => void;
  onPrev: () => void;
  onNext: () => void;
  onIndexChange: (index: number) => void;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({
  workout,
  workouts,
  currentIndex,
  isStarter,
  isDarkMode,
  warmupOpen,
  cooldownOpen,
  onToggleWarmup,
  onToggleCooldown,
  onPrev,
  onNext,
  onIndexChange,
}) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
  };

  return (
    <div
      className="h-full p-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`h-full rounded-2xl p-4 flex flex-col border-2 ${
          isDarkMode
            ? isStarter
              ? "bg-emerald-900/90 border-emerald-700 text-white"
              : "bg-violet-900/90 border-violet-700 text-white"
            : isStarter
              ? "bg-white border-emerald-200 text-gray-900"
              : "bg-white border-violet-300 text-gray-900"
        }`}
      >
        {/* Card Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-bold">{workout.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <svg className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{workout.duration}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isDarkMode
              ? isStarter ? "bg-emerald-500/30 text-emerald-200" : "bg-violet-500/30 text-violet-200"
              : isStarter ? "bg-emerald-100 text-emerald-700" : "bg-violet-100 text-violet-700"
          }`}>
            {currentIndex + 1} / {workouts.length}
          </span>
        </div>

        {/* Exercise List with Warm-up and Cool-down */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1">
          <CollapsibleSection
            title="Warm-up (5 min)"
            icon="🔥"
            items={warmups[workout.warmupType]}
            isOpen={warmupOpen}
            onToggle={onToggleWarmup}
            bgColor="bg-amber-600/30"
            borderColor="border-amber-500/30"
          />

          {workout.exercises.map((exercise, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-3 flex items-center justify-between ${isDarkMode ? 'bg-white/10 backdrop-blur' : isStarter ? 'bg-white shadow-md border border-emerald-200' : 'bg-white shadow-md border border-violet-300'}`}
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{exercise.name}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{exercise.sets}</p>
              </div>
              <a
                href={exercise.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-2 flex-shrink-0 p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : isStarter 
                      ? 'text-emerald-500 hover:text-emerald-700 hover:bg-emerald-50' 
                      : 'text-violet-500 hover:text-violet-700 hover:bg-violet-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}

          <CollapsibleSection
            title="Cool-down (5 min)"
            icon="🧘"
            items={cooldowns[workout.cooldownType]}
            isOpen={cooldownOpen}
            onToggle={onToggleCooldown}
            bgColor="bg-teal-600/30"
            borderColor="border-teal-500/30"
          />
        </div>

        {/* Carousel Navigation */}
        <div className={`flex items-center justify-between mt-4 pt-3 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
          <button
            onClick={onPrev}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-1.5">
            {workouts.map((_, idx: number) => (
              <button
                key={idx}
                onClick={() => onIndexChange(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? isStarter
                      ? "bg-emerald-500 w-5"
                      : "bg-violet-500 w-5"
                    : isDarkMode 
                      ? "bg-white/30 hover:bg-white/50 w-2"
                      : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
