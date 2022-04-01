import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActivityPage from './ActivityPage';
import ArticlePage from './ArticlePage';
import AuthorPage from './AuthorPage';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/activity" element={<ActivityPage />} />
        <Route exact path="/article" element={<ArticlePage />} />
        <Route exact path="/author" element={<AuthorPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;