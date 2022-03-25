import React from 'react'
import Item from './Item';
import ItemsTitle from './ItemsTitle';

const Items = ({title,to,fromExplore}) => {
  return (
    <section className="row row--grid">
      <ItemsTitle title={title} to={to}/>
        <div className="col-12">
            <div className="main__carousel-wrap">
                <div 
                  className=
                  {`main__carousel main__carousel${fromExplore ? '--explore' : '--live'} owl-carousel`} 
                  id={`${ fromExplore ? 'explore' : 'live'} `}>
                    {fromExplore ? <Item/> : <Item time="15 minutes left"/>}
                    {fromExplore ? <Item/> : <Item time="15 minutes left"/>}
                    {fromExplore ? <Item/> : <Item time="15 minutes left"/>}
                    {fromExplore ? <Item/> : <Item time="15 minutes left"/>}
                </div>

                <button className="main__nav main__nav--prev" 
                  data-nav={`${fromExplore ? '#explore' : '#live'}`} 
                  type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={`M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z`}/></svg>
                </button>

                <button 
                  className="main__nav main__nav--next" 
                  data-nav={`${fromExplore ? '#explore' : '#live'}`} 
                  type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={`M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z`}/></svg>
                </button>

            </div>
          </div>
    </section>
  );
}

export default Items;


