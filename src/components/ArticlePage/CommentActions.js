import React from 'react';

import CommentRateUpButton from './CommentRateUpButton';
import CommentRateDownButton from './CommentRateDownButton';
import ReplyToCommentButton from './ReplyToCommentButton';
import QuoteCommentButton from './QuoteCommentButton';


const CommentActions = ({ commentActions }) => {
    const {
        onUpRate, onDownRate,
        onReply, onQuote,
        upRatedCount, downRatedCount
    } = commentActions;

    return (
        <div className='comments__actions'>
            <div className='comments__rate'>
                <CommentRateUpButton
                    onUpRate={onUpRate}
                    upRatedCount={upRatedCount}
                />
                <CommentRateDownButton
                    downRateCount={downRatedCount}
                    onDownRate={onDownRate}
                />
            </div>
            <ReplyToCommentButton onReply={onReply} />
            <QuoteCommentButton onQuote={onQuote} />
        </div>
    );
}

export default CommentActions;