import React from 'react';
import Author from "./Author";

const Authors = ({ authors }) => {
    const buildAuthorList = () => {
        return authors.map(author => 
            <div className='col-12 col-sm-6 col-lg-4 col-xl-3'>
                <Author author={author} />
            </div>
        );
    };

    return (
        <div className='row row--grid'>
            {buildAuthorList()}
        </div>
    );
};

export default Authors;