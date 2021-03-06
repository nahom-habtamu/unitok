import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreatorsPage from './CreatorsPage';
import ActivityPage from './ActivityPage';
import ArticlePage from './ArticlePage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import BlogsPage from './BlogsPage';
import ExplorePage from './ExplorePage';
import FaqPage from './FaqPage';
import AuctionDetailPage from './AuctionDetailPage';
import ContactsPage from './ContactsPage';
import ForgotPage from './ForgotPage';
import PrivacyPage from './PrivacyPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import CreateAuctionPage from './CreateAuctionPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/activity" element={<ActivityPage />} />
        <Route exact path="/article" element={<ArticlePage />} />
        <Route exact path="/author" element={<ProfilePage />} />
        <Route exact path="/authors" element={<CreatorsPage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/explore" element={<ExplorePage />} />
        <Route exact path="/faq" element={<FaqPage />} />
        <Route exact path="/auction" element={<AuctionDetailPage />} />
        <Route exact path="/contacts" element={<ContactsPage />} />
        <Route exact path="/forgotpassword" element={<ForgotPage />} />
        <Route exact path="/privacypolicy" element={<PrivacyPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/signin" element={<SignInPage />} />
        <Route exact path="/create" element={<CreateAuctionPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;