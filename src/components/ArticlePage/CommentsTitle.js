import React from 'react';

const CommentsTitle = ({ commentsCount }) => {
    return (
        <div className="comments__title">
            <h4>Comments</h4>
            <span>{commentsCount}</span>
        </div>
    );
};

export default CommentsTitle;