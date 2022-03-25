import React from 'react';
import { Link } from 'react-router-dom';
import HotCollectionsTitle from './HotCollectionsTitle';

const HotCollections = () => {
  return (
    <section className="row row--grid">
        <HotCollectionsTitle/>
        <div className='col-12'>
            <div className="main__carousel-wrap">
                <div className="main__carousel main__carousel--collections owl-carousel" id="collections">
                    <HotCollectionItem/>
                    <HotCollectionItem/>
                    <HotCollectionItem/>
                    <HotCollectionItem/>
                    <HotCollectionItem/>
                    <HotCollectionItem/>
                    <HotCollectionItem/>
                </div>

                <button 
                    className="main__nav main__nav--prev" 
                    data-nav="#collections" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z"/></svg>
                </button>
                <button 
                    className="main__nav main__nav--next" 
                    data-nav="#collections" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
                </button>

            </div>
        </div>
    </section>
  )
}

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
                    <img src="img/avatars/avatar3.jpg" alt=""/>
                </Link>
                <h3 className="collection__name">
                    <Link to='collection'>Hashmasks</Link>
                </h3>
                <span className="collection__number">ERC-721</span>
            </div>
        </div>
    );
}


export default HotCollections;


