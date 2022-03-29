import React from 'react';
import BreadCrumb from '../common/BreadCrumb';
import ArticleContent from './ArticleContent';

const MainContent = () => {
    return (
        <main className='main'>
            <div className='container'>
                <div className='row row--grid'>
                    <BreadCrumb
                        active="Home"
                        link="/"
                        nonActive="Article"
                    />
                    <ArticleContent />
                </div>
            </div>
        </main>
    );
}


export default MainContent;