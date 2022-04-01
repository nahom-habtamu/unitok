import React from 'react';
import { Link } from 'react-router-dom';

const ItemsTitle = ({title, to}) => {
  return (
    <div className="col-12">
        <div className="main__title">
            <h2>
                <Link to={`/${to}`}>{title}</Link>
            </h2>
        </div>
    </div>
  )
}

export default ItemsTitle