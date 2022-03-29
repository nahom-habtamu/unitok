import React, { useState } from 'react';

import CommentAuthorInformation from './CommentAuthorInformation';
import CommentActions from './CommentActions';
import AddCommentsForm from './AddCommentsForm';

const Comment = ({ comment, dispatch }) => {

    const [inputInfo, setInputInfo] = useState({
        active: false,
        type: ''
    });

    const commentActions = {
        onUpRate: () => dispatch({ type: 'UP_RATE', payload: comment.index }),
        onDownRate: () => dispatch({ type: 'DOWN_RATE', payload: comment.index }),
        onReply: () => {
            setInputInfo((prevInfo) => {
                return {
                    active: !prevInfo.active,
                    type: 'Reply'
                };
            });
        },
        onQuote: () => {
            setInputInfo((prevInfo) => {
                return {
                    active: !prevInfo.active,
                    type: 'Quote'
                };
            });
        },
        upRatedCount: comment.likesCount,
        downRatedCount: comment.dislikesCount,
    };

    const getCommentType = () => {
        if (comment.repliedToComment) {
            return `comments__item comments__item--${comment.quote ? 'quote' : 'answer'}`
        }
        return 'comments__item';
    }

    return (
        <>
            <li className={getCommentType()}>
                <CommentAuthorInformation comment={comment} />
                <p className='comments__text'>
                    {comment.quote && <span>{comment.quote}</span>}
                    {comment.comment}
                </p>
                <CommentActions commentActions={commentActions} />
            </li>
            {
                inputInfo.active && <AddCommentsForm
                    dispatch={dispatch}
                    commentType={inputInfo.type}
                    quote={inputInfo.type === 'Quote' ? comment.comment : null}
                    repliedTo={comment.index}
                />
            }
        </>
    );
}

export default Comment;