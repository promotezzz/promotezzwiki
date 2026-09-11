import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { BrowsePage } from './pages/BrowsePage';
import { WikiPage } from './pages/WikiPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Root domain redirects to /browse where users can see all wiki things */}
          <Route path="/" element={<Navigate to="/browse" replace />} />
          
          {/* /browse directory view */}
          <Route path="/browse" element={<BrowsePage />} />

          {/* Mod wikis accessed via direct sublink */}
          <Route path="/:slug" element={<WikiPage />} />
          
          {/* Any unknown fallback route shows the colorful 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
