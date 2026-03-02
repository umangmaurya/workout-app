import React, { useRef } from 'react';
import { Workout } from '../types';
import { warmups, cooldowns, workoutData } from '../data/workouts';
import { CollapsibleSection } from './CollapsibleSection';

interface WorkoutCardProps {
  workout: Workout;
  currentIndex: number;
  isStarter: boolean;
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
  currentIndex,
  isStarter,
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
        className={`h-full rounded-2xl p-4 flex flex-col ${
          isStarter
            ? "bg-gradient-to-br from-emerald-600/80 to-emerald-900/90"
            : "bg-gradient-to-br from-violet-600/80 to-violet-900/90"
        }`}
      >
        {/* Card Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-bold">{workout.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300 text-sm">{workout.duration}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isStarter ? "bg-emerald-500/30 text-emerald-200" : "bg-violet-500/30 text-violet-200"
          }`}>
            {currentIndex + 1} / {workoutData.length}
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
              className="bg-white/10 backdrop-blur rounded-lg p-3 flex items-center justify-between"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{exercise.name}</p>
                <p className="text-sm text-gray-300">{exercise.sets}</p>
              </div>
              <a
                href={exercise.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex-shrink-0 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <span>▶️</span>
                <span>Form</span>
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
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
          <button
            onClick={onPrev}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-1.5">
            {workoutData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onIndexChange(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? isStarter
                      ? "bg-emerald-400 w-5"
                      : "bg-violet-400 w-5"
                    : "bg-white/30 hover:bg-white/50 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
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
