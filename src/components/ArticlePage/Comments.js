import React, { useReducer } from 'react';

import Comment from './Comment';
import CommentsTitle from './CommentsTitle';
import AddCommentsForm from './AddCommentsForm';

import commentsReducer from '../../reducers/commentsReducer';

const Comments = ({ comments }) => {

    const [state, dispatch] = useReducer(commentsReducer, comments);

    const buildCommentList = () => {
        var mainComments = state.filter(e => !e.repliedToComment);

        return mainComments.map(e => {
            var repliesToThisComment =
                state.filter(r => r.repliedToComment === e.index);
            return (
                <>
                    <Comment
                        comment={e}
                        dispatch={dispatch}
                        key={e.index}
                    />
                    {
                        buildReplies()
                    }
                </>
            );

            function buildReplies() {
                return repliesToThisComment.map(e => {
                    return <Comment
                        comment={e}
                        dispatch={dispatch}
                        key={e.index}
                    />;
                });
            }
        });
    };

    return (
        <div className='comments'>
            <CommentsTitle commentsCount={state.length} />
            <ul className='comments__list'>
                {buildCommentList()}
            </ul>
            <AddCommentsForm 
                dispatch={dispatch} 
                commentType='Comment'
            />
        </div>
    );
};

export default Comments;