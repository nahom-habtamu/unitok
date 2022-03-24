import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="home__content">
                        <h1 class="home__title">The largest NFT marketplace</h1>
                        <p class="home__text">
                            Digital marketplace for crypto collectibles and non-fungible tokens. 
                            <br/>Buy, sell, and discover exclusive digital assets.
                        </p>
                        <div class="home__btns">
                            <Link to="/explore" class="home__btn home__btn--clr">Explore</Link>
                            <Link to="/signin" class="home__btn">Create</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;