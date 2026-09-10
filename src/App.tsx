import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WikiPage } from './pages/WikiPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* No home page: Root returns colorful 404 because no sublink was specified */}
        <Route path="/" element={<NotFoundPage isRoot={true} />} />
        
        {/* Mod wikis accessed strictly via direct sublink */}
        <Route path="/:slug" element={<WikiPage />} />
        
        {/* Any unknown fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
