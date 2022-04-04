import React from 'react';
import { Link } from 'react-router-dom';

const HotCollectionItem = () => {
    return (
        <div className="collection">
            <Link
                to="/collection"
                className="collection__cover"
                data-bg="img/bg/bg-small.png">
            </Link>
            <div className="collection__meta">
                <Link
                    to='/author'
                    className="collection__avatar collection__avatar--verified">
                    <img src="img/avatars/avatar3.jpg" alt="" />
                </Link>
                <h3 className="collection__name">
                    <Link to='collection'>Hashmasks</Link>
                </h3>
                <span className="collection__number">ERC-721</span>
            </div>
        </div>
    );
};

export default HotCollectionItem;