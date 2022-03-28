import React from 'react';
import { Link } from 'react-router-dom';

const Activity = (props) => {
    
    const { 
        id, title, image, createdBy, price, lastActivity, authorId 
    } = props.activity;

    return (
        <div className="col-12 col-lg-6">
            <div className="activity">
                <Link to={`/itemDetail/${id}`} className="activity__cover">
                    <img src={image} alt="" />
                </Link>
                <div className="activity__content">
                    <h3 className="activity__title">
                        <Link to={`/${id}`}>{title}</Link>
                    </h3>
                    <p className="activity__text">
                        listed by
                        <Link to={`/author/${authorId}`}>
                            {` ${createdBy}`}
                        </Link>
                        <div>
                            {`For Price `}
                            <b>{price} ETB</b>
                        </div>
                    </p>
                    <span className="activity__time">
                        {lastActivity}
                    </span> 
                </div>
            </div>
        </div>
    );
}

export default Activity;