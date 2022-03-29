import React, { useState } from 'react';

const AddCommentsForm = ({ commentType, repliedTo, quote, dispatch }) => {

    const [comment, setComment] = useState("");

    const handleAddingComment = () => {
        const newComment = {
            createdBy: "Nahom Habtamu",
            createdAt: "30.08.2021, 2.44",
            authorPicture: "img/avatar.svg",
            comment: comment,
            repliedToComment: repliedTo ?? "",
            quote: quote ?? ""
        };

        dispatch({
            type: "ADD_COMMENT",
            payload: newComment
        });

        setComment("");
    };

    return (
        <form className="comments__form">
            <div className="sign__group">
                <textarea
                    name="text"
                    className="sign__textarea"
                    placeholder={`Add ${commentType}`}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} />
            </div>
            <button
                onClick={handleAddingComment}
                type="button"
                className="sign__btn">
                Add
            </button>
        </form>
    );
};


export default AddCommentsForm;