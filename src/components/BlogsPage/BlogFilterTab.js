import React from 'react';

const BlogFilterTab = ({ text, isActive, onClick }) => {
  return (
    <li className="nav-item">
      <a
        onClick={onClick}
        class={`nav-link ${isActive ? 'active' : ''}`}>
        {text}
      </a>
    </li>
  );
};

export default BlogFilterTab;