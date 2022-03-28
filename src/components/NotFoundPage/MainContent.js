import React from 'react';
import NotFoundPageBox from './NotFoundPageBox';
import BreadCrumb from '../common/BreadCrumb';

const MainContent = () => {
  return (
    <div className='main'>
        <div className='container'>
            <div className="row row--grid">
                <BreadCrumb active="Home" link='/' nonActive="Error 404"/>
                <NotFoundPageBox/>
            </div>
        </div>
    </div>
  )
}

export default MainContent;




