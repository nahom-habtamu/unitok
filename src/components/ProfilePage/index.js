import React from 'react';
import DummyAuthors from '../../constants/DummyAuthors';
import AuthorInformation from './AuthorInformation';
import AuthorPageHeroImage from './AuthorPageHeroImage';
import ManageAuthor from './ManageAuthor';

const MainContent = () => {
    return (
        <main className='main'>
            <AuthorPageHeroImage />
            <div className='container'>
                <div className='row row--grid'>
                    <AuthorInformation author={DummyAuthors[0]} />
                    <ManageAuthor />
                </div>
            </div>
        </main>
    )
}

export default MainContent;