import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreatorsPage from './CreatorsPage';
import ActivityPage from './ActivityPage';
import ArticlePage from './ArticlePage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import BlogsPage from './BlogsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/activity" element={<ActivityPage />} />
        <Route exact path="/article" element={<ArticlePage />} />
        <Route exact path="/author" element={<ProfilePage />} />
        <Route exact path="/authors" element={<CreatorsPage />} />
        <Route exact path="/blogs" element={<BlogsPage/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;