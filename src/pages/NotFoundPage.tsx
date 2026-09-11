import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  isRoot?: boolean;
  slug?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center px-4 selection:bg-emerald-100 selection:text-emerald-900">
      <div className="relative z-10 max-w-md mx-auto text-center flex flex-col items-center">
        {/* 404 Header */}
        <div className="relative mb-2">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter leading-none select-none text-neutral-900">
            404
          </h1>
        </div>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-800 mb-6">
          Lost in the void
        </h2>

        {/* Back to Home Button */}
        <Link
          to="/browse"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 hover:-translate-y-0.5 shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5 text-neutral-400 group-hover:text-white" />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
};
