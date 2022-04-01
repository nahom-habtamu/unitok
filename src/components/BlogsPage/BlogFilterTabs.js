import React, { useState, useEffect } from 'react';
import BlogFilterTab from './BlogFilterTab';

const BlogFilterTabs = ({ tabs, onActiveTabChanged }) => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    onActiveTabChanged(activeTabIndex);
  }, [activeTabIndex, onActiveTabChanged]);


  const buildTabs = () => {
    return tabs.map((tab, index) => <BlogFilterTab
      text={tab}
      isActive={index === activeTabIndex}
      onClick={() => setActiveTabIndex(index)} />
    );
  };

  return (
    <div className='col-12'>
      <ul
        className="nav nav-tabs main__tabs"
        id="main__tabs"
        role="tablist">
        {buildTabs()}
      </ul>
    </div>
  );
};

export default BlogFilterTabs;