import { useState, useEffect } from 'react';
import { ProgramType } from '../types';

const PROGRAM_KEY = 'workout-app-program';
const DEFAULT_PROGRAM: ProgramType = 'main'; // 5-day program as default

export const useProgram = () => {
  const [program, setProgram] = useState<ProgramType>(() => {
    const saved = localStorage.getItem(PROGRAM_KEY);
    return (saved as ProgramType) || DEFAULT_PROGRAM;
  });

  useEffect(() => {
    localStorage.setItem(PROGRAM_KEY, program);
  }, [program]);

  const selectProgram = (newProgram: ProgramType) => {
    setProgram(newProgram);
  };

  return { program, selectProgram };
};
