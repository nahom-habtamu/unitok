import React from 'react';
import DummyAuthor from '../../constants/DummyAuthor';
import AuthorInformation from './AuthorInformation';
import AuthorPageHeroImage from './AuthorPageHeroImage';
import ManageAuthor from './ManageAuthor';

const MainContent = () => {
    return (
        <main className='main'>
            <AuthorPageHeroImage />
            <div className='container'>
                <div className='row row--grid'>
                    <AuthorInformation author={DummyAuthor} />
                    <ManageAuthor />
                </div>
            </div>
        </main>
    )
}

export default MainContent;