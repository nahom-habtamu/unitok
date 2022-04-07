import React from 'react';

import DummyAuthors from '../../constants/DummyAuthors';
import AuthorInformation from '../common/AuthorInformation';
import AddAuctionForm from './AddAuctionForm';

const MainContent = () => {

    return (
        <main className='main'>
            <div
                className='main__author'
                data-bg="img/bg/bg.png"
            />
            <div className='container'>
                <div className='row row--grid'>
                    <AuthorInformation author={DummyAuthors[0]} />
                    <AddAuctionForm />
                </div>
            </div>
        </main>
    );
}

export default MainContent;