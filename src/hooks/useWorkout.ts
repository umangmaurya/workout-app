import { useState, useMemo, useEffect } from 'react';
import { workoutData } from '../data/workouts';
import { ProgramType } from '../types';

export const useWorkout = (program: ProgramType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [warmupOpen, setWarmupOpen] = useState(false);
  const [cooldownOpen, setCooldownOpen] = useState(false);

  const filteredWorkouts = useMemo(() => {
    return workoutData.filter(w => w.theme === program);
  }, [program]);

  // Reset index when program changes
  useEffect(() => {
    setCurrentIndex(0);
    setWarmupOpen(false);
    setCooldownOpen(false);
  }, [program]);

  // Auto-select today's workout for 5-day and 6-day programs
  useEffect(() => {
    if (program === 'main' || program === 'sixday') {
      const day = new Date().getDay();
      if (program === 'sixday') {
        // Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5 in filtered array
        const dayMap: Record<number, number> = {
          1: 0, // Monday
          2: 1, // Tuesday
          3: 2, // Wednesday
          4: 3, // Thursday
          5: 4, // Friday
          6: 5, // Saturday
        };
        if (dayMap[day] !== undefined && dayMap[day] < filteredWorkouts.length) {
          setCurrentIndex(dayMap[day]);
        }
      } else {
        // Mon=0, Tue=1, Wed=2, Thu=3, Fri=4 in filtered array
        const dayMap: Record<number, number> = {
          1: 0, // Monday
          2: 1, // Tuesday
          3: 2, // Wednesday
          4: 3, // Thursday
          5: 4, // Friday
        };
        if (dayMap[day] !== undefined && dayMap[day] < filteredWorkouts.length) {
          setCurrentIndex(dayMap[day]);
        }
      }
    }
  }, [program, filteredWorkouts.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredWorkouts.length - 1 : prev - 1));
    setWarmupOpen(false);
    setCooldownOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredWorkouts.length - 1 ? 0 : prev + 1));
    setWarmupOpen(false);
    setCooldownOpen(false);
  };

  const setWorkoutIndex = (index: number) => {
    setCurrentIndex(index);
    setWarmupOpen(false);
    setCooldownOpen(false);
  };

  const toggleWarmup = () => setWarmupOpen(!warmupOpen);
  const toggleCooldown = () => setCooldownOpen(!cooldownOpen);

  const currentWorkout = filteredWorkouts[currentIndex];
  const isStarter = program === 'starter';

  return {
    currentIndex,
    currentWorkout,
    filteredWorkouts,
    isStarter,
    warmupOpen,
    cooldownOpen,
    handlePrev,
    handleNext,
    setWorkoutIndex,
    toggleWarmup,
    toggleCooldown,
  };
};
