import React from 'react';

const Author = ({ author }) => {
    const { id, name, username, description, image } = author;
    return (
        <div className="author">
            <div
                className="author__cover author__cover--bg"
                data-bg="img/bg/bg-small.png"
            />
            <div className="author__meta">
                <div
                    className="author__avatar author__avatar--verified">
                    <img src={image} alt="" />
                </div>
                <h3
                    className="author__name">
                    <a href={`/author/${id}`}>{name}</a>
                </h3>
                <h3
                    className="author__nickname">
                    <a href={`/author/${id}`}>{username}</a>
                </h3>
                <p className="author__text">{description}</p>
            </div>
        </div>
    );
};

export default Author;