import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({active,nonActive,link}) => {
  return (
    <div className="col-12">
        <ul className="breadcrumb">
            <li className="breadcrumb__item">
                <Link to={link}>{active}</Link>
            </li>
            <li className="breadcrumb__item breadcrumb__item--active">
                {nonActive}
            </li>
        </ul>
    </div>
  )
}

export default BreadCrumb;