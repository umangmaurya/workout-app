import { useState } from 'react';
import { getDayWorkoutIndex, workoutData } from '../data/workouts';

export const useWorkout = () => {
  const [currentIndex, setCurrentIndex] = useState(getDayWorkoutIndex);
  const [warmupOpen, setWarmupOpen] = useState(false);
  const [cooldownOpen, setCooldownOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? workoutData.length - 1 : prev - 1));
    setWarmupOpen(false);
    setCooldownOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === workoutData.length - 1 ? 0 : prev + 1));
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

  const currentWorkout = workoutData[currentIndex];
  const isStarter = currentWorkout.theme === "starter";

  return {
    currentIndex,
    currentWorkout,
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
