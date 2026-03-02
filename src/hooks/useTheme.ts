import { useState, useEffect } from 'react';

const THEME_KEY = 'workout-app-theme';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleTheme };
};
