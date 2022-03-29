import React from 'react';

const CommentAuthorInformation = ({ comment }) => {
    return (
        <div className="comments__autor">
            <img
                className="comments__avatar"
                src={comment.authorPicture}
                alt="" />
            <span
                className="comments__name">
                {comment.createdBy}
            </span>
            <span
                className="comments__time">
                {comment.createdAt}
            </span>
        </div>
    );
}

export default CommentAuthorInformation;