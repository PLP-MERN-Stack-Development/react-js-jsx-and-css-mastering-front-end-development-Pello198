import React, { useEffect, useState } from 'react';
import Button from './Button';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      variant="secondary"
      size="sm"
      className="flex items-center gap-2"
    >
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </Button>
  );
};

export default ThemeToggle;
