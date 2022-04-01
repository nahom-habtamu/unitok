import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import BlogFilterTabs from './BlogFilterTabs';
import BlogsTitle from './BlogsTitle';
import Blogs from './Blogs';

import DummyArticles from '../../constants/DummyArticles';

const MainContent = () => {
  return (
    <main className="main">
      <div className="container">
        <div className='row row--grid'>
          <BreadCrumb
            active="Home"
            link="/"
            nonActive="Blogs"
          />
          <BlogsTitle title="Our Blogs" />
          <BlogFilterTabs
            onActiveTabChanged={(value) => console.log(value)}
            tabs={["All", "Digital Art", "Collectibles", "Domains"]}
          />

          <Blogs blogs={DummyArticles} />

        </div>
      </div>
    </main>
  )
}

export default MainContent;