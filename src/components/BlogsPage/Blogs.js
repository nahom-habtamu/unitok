import React from 'react';
import Blog from "./Blog";

const Blogs = ({ blogs }) => {

  const buildBlogs = () => {
    return blogs.map(blog => <div className="col-12 col-sm-6 col-lg-4">
      <Blog blog={blog} key={blog.id} />
    </div>
    );
  };

  return (
    <div className='tab-content'>
      <div className='tab-pane fade show active'>
        <div className="row row--grid">
          {buildBlogs()}
        </div>
      </div>
    </div>
  );
};


export default Blogs;