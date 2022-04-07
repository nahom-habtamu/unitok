import React from 'react';
import AuthorCodeCopy from './AuthorCodeCopy';

const AuthorInformation = ({ author }) => {
    return (
        <div className="col-12 col-xl-3">
            <div className="author author--page">
                <div className="author__meta">
                    <a
                        className="author__avatar author__avatar--verified"
                        href='/author'>
                        <img src={author.image} alt="" />
                    </a>
                    <h1 className="author__name">
                        {author.name}
                    </h1>
                    <h2 className="author__nickname">
                        {author.username}
                    </h2>
                    <p className="author__text">{author.description}</p>
                    <AuthorCodeCopy id={author.id} />
                </div>
            </div>
        </div>
    );
};

export default AuthorInformation;