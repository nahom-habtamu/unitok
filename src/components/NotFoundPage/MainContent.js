import React from 'react';
import NotFoundPageBox from './NotFoundPageBox';
import NotFoundPageHeaderLinks from './NotFoundPageHeaderLinks';
const MainContent = () => {
  return (
    <div className='main'>
        <div className='container'>
            <div className="row row--grid">
                <NotFoundPageHeaderLinks/>
                <NotFoundPageBox/>
            </div>
        </div>
    </div>
  )
}

export default MainContent;




