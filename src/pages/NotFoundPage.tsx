import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

interface NotFoundPageProps {
  isRoot?: boolean;
  slug?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 flex flex-col items-center justify-center px-4 selection:bg-emerald-100 selection:text-emerald-900 dark:selection:bg-emerald-950 dark:selection:text-emerald-300">
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center flex flex-col items-center">
        {/* 404 Header */}
        <div className="relative mb-2">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter leading-none select-none text-neutral-900 dark:text-white">
            404
          </h1>
        </div>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 mb-6">
          Lost in the void
        </h2>

        {/* Back to Home Button */}
        <Link
          to="/browse"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-200 hover:-translate-y-0.5 shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5 text-neutral-400 group-hover:text-white" />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
};
