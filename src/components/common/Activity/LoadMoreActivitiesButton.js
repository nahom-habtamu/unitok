import React from 'react';

const LoadMoreActivitiesButton = () => {
    return (
        <div className="row row--grid">
            <div className="col-12">
                <button
                    className="main__load"
                    type="button" data-toggle="collapse"
                    data-target="#collapsemore"
                    aria-expanded="false"
                    aria-controls="collapsemore">
                    Load more
                </button>
            </div>
        </div>
    );
};

export default LoadMoreActivitiesButton;
