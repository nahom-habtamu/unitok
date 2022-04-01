import React from 'react';

const BlogsTitle = ({ title }) => {
  return (
    <div className="col-12">
      <div className="main__title main__title--page">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default BlogsTitle;