import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="home">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="home__content">
                        <h1 className="home__title">The largest NFT marketplace</h1>
                        <p className="home__text">
                            Digital marketplace for crypto collectibles and non-fungible tokens. 
                            <br/>Buy, sell, and discover exclusive digital assets.
                        </p>
                        <div className="home__btns">
                            <Link to="/explore" className="home__btn home__btn--clr">Explore</Link>
                            <Link to="/signin" className="home__btn">Create</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;