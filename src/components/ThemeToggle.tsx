import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-xs text-neutral-500 dark:text-neutral-400 select-none">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
      <button
        onClick={toggleTheme}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-neutral-300 dark:border-neutral-700
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-emerald-500
          ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}
        `}
      >
        <span
          className={`
            pointer-events-none inline-flex h-5 w-5 transform items-center justify-center rounded-full
            bg-white dark:bg-neutral-950 shadow-xs transition-transform duration-200 ease-in-out
            ${isDark ? 'translate-x-5' : 'translate-x-0'}
          `}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-emerald-400" />
          ) : (
            <Sun className="w-3 h-3 text-neutral-600" />
          )}
        </span>
      </button>
    </div>
  );
};
